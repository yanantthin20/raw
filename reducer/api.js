/**
 * api reducer to centralize all of the api stuff(loading, success, error) in one places
 * this reducer is just intended to handle api stuff, if you want to store result from api response, do them in each own reducer
 */
import { getErrorMessage } from "../shared/utility";

/**
 *  centralized loading reducer to handle loading stuffs in one place,
 *  can handle multiple loading state in
 * @param state
 * @param action
 * @returns { any } -> return value can be varied according to the type changes which were happened in the store
 */
export const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(LOADING|SUCCESS|ERROR)/.exec(type);

  // not a *_REQUEST / *_SUCCESS / *_ERROR actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === "LOADING",
  };
};

/**
 *  centralized error reducer to handle error stuffs in one place,
 *  can handle multiple error state in one place
 * @param state
 * @param action
 * @returns { any } -> return value can be varied according to the type changes which were happened in the store
 */
export const errorReducer = (state = {}, action) => {
  const { type, error } = action;
  const matches = /(.*)_(LOADING|ERROR)/.exec(type);
  // not a *_LOADING / *_ERROR actions, so we ignore them
  if (!matches) return state;
  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]:
        requestState === "ERROR" ? getErrorMessage(error || "") : "",
  };
};

/**
 *  centralized success reducer to handle error stuffs in one place,
 *  can handle multiple success state in one place
 * @param state
 * @param action
 * @returns { any } -> return value can be varied according to the type changes which were happened in the store
 */
export const successReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(LOADING|SUCCESS|ERROR)/.exec(type);

  // not a *_LOADING / *_SUCCESS actions, so we ignore them
  if (!matches) return state;
  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === "SUCCESS",
  };
};


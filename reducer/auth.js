import {fetchRequest, isValidJWT} from "../helper/helper";
import {baseApiUrl} from "../helper/config";
import actionCreator from "../shared/action-creator";
import {createReducer} from "../shared/utility";
import immer from 'immer'

/**
 * @type {string}
 */
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const LOGOUT = "LOGOUT";

const initialState = {
  isFetching: false,
  isAuthenticated: isValidJWT(localStorage.getItem('token')),
  isLogout: false,
  error: {},
  user: {},
  role: 'Buyer',
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = initialState, {type, ...action}) {
  return immer(state, draft => {
    const matches = /(.*)_(LOADING|SUCCESS|ERROR)/.exec(type);
    if(matches) {
      const [, requestName] = matches;
      createReducer({type, action, initialState}, requestName.toLowerCase(), draft)
    }
  })
}

/**
 * Actions
 */
export const requestSignUp = params => actionCreator(SIGN_UP, () => fetchRequest(`${baseApiUrl}admin/register`, params, "post"))
export const requestSignIn = params => actionCreator(SIGN_IN, () => fetchRequest(`${baseApiUrl}admin/signin`, params, "post"), (payload) => {
  localStorage.setItem('token', payload.token)
})
export const requestUpdateProfile = params => actionCreator(UPDATE_PROFILE, () => fetchRequest(`${baseApiUrl}update-profile`, params, "post"))
export const requestLogout = params => actionCreator(LOGOUT, () => fetchRequest(`${baseApiUrl}logout`, params, "post"))

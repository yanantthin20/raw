import {fetchRequest, fileUpload} from "../helper/helper";
import immer from 'immer'
import {baseApiUrl} from "../helper/config";
import actionCreator from "../shared/action-creator";
import {createReducer} from "../shared/utility";


export const GET_TOWNSHIP = 'GET_TOWNSHIP'
const actionTypes = [GET_TOWNSHIP]

const initialState = {
  get_township: []
};

export default function utility(state = initialState, { type, ...action }) {
  return immer(state, draft => {
    const matches = /(.*)_(LOADING|SUCCESS|ERROR)/.exec(type);
    if(matches) {
      const [, requestName] = matches;
      if(actionTypes.includes(requestName)) {
        createReducer({type, action, initialState}, requestName.toLowerCase(), draft)
      }
    }
  })
}

//actions
export const requestTownship = params => actionCreator(GET_TOWNSHIP, () => fetchRequest(`${baseApiUrl}postalCode/getAllPostalCodeWithStatus`, params, "get", params, true))
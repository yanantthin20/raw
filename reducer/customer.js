import {fetchRequest} from "../helper/helper";
import immer from 'immer'
import {baseApiUrl} from "../helper/config";
import actionCreator from "../shared/action-creator";
import {createReducer} from "../shared/utility";

/**
 * @type {strings}
 */
export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const GET_CUSTOMER_DETAIL = 'GET_CUSTOMER_DETAIL';
const actionTypes = [GET_CUSTOMERS, GET_CUSTOMER_DETAIL];

const initialState = {
    get_customers: [],
    get_customer_detail: {}
};
/**
 * Reducer
 * @param state
 * @param action
 * @returns {*} returns immutable data with immer
 */
export default function(state = initialState, { type, ...action } ) {
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

/**
 * Actions
 */
export const requestCustomerList = params => actionCreator(GET_CUSTOMERS, () => fetchRequest(`${baseApiUrl}customers`, {}, "get", {}, true), (res) => console.log(res));
export const requestCustomerDetail = id => actionCreator(GET_CUSTOMER_DETAIL, () => fetchRequest(`${baseApiUrl}customer/${id}`, {}, "get", {}, true), (res) => console.log(res));

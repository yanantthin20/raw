import {fetchRequest} from "../helper/helper";
import immer from 'immer'
import {baseApiUrl} from "../helper/config";
import actionCreator from "../shared/action-creator";
import {createReducer} from "../shared/utility";

/**
 * @type {strings}
 */
export const GET_ORDERS = 'GET_ORDERS';
export const CHANGE_ORDER_STATE = 'CHANGE_ORDER_STATE';
export const GET_ORDER_DETAIL = 'GET_ORDER_DETAIL';
export const CANCEL_ORDER= 'CANCEL_ORDER';

const actionTypes = [GET_ORDERS, CHANGE_ORDER_STATE, GET_ORDER_DETAIL];

const initialState = {
  get_orders: [],
  get_order_detail: {}
};
/**
 * Reducer
 * @param state
 * @param action
 * @returns {*} returns immutable data with immer
 */
export default function order(state = initialState, { type, ...action }) {
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
export const requestOrders = state => actionCreator(GET_ORDERS, () => fetchRequest(`${baseApiUrl}orders/getOrdersByState?state=${state}`, {}, "get", { }, true), (res) => console.log(res))
export const requestUpdateOrderState = params =>
    actionCreator(CHANGE_ORDER_STATE, () => fetchRequest(`${baseApiUrl}orders/updateOrderState`, params, "post", params, true))
export const requestOrderDetail = id =>
    actionCreator(GET_ORDER_DETAIL, () => fetchRequest(`${baseApiUrl}orders/${id}`, {}, "get", {}, true), (res) => console.log(res))
export const requestCancelOrderState = id =>
  actionCreator(CANCEL_ORDER, () => fetchRequest(`${baseApiUrl}orders/cancel/${id}`, null , "post", null, true))




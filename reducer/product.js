import {fetchRequest, fileUpload} from "../helper/helper";
import immer from 'immer'
import {baseApiUrl} from "../helper/config";
import actionCreator from "../shared/action-creator";
import {createReducer} from "../shared/utility";

/**
 * @type {strings}
 */
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const SET_PRODUCT_DETAIL = 'SET_PRODUCT_DETAIL';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const SET_CATEGORY = 'SET_CATEGORY';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const RESET_PRODUCT_DETAIL = 'RESET_PRODUCT_DETAIL';

const actionTypes = [GET_PRODUCTS, GET_PRODUCT_DETAIL];

const initialState = {
  get_products: [],
  productDetail: {},
  categories: [],
};
/**
 * Reducer
 * @param state
 * @param action
 * @returns {*} returns immutable data with immer
 */
export default function product(state = initialState, { type, ...action } ) {
  return immer(state, draft => {
    switch(type) {
      case SET_CATEGORY:
        draft.categories = action.payload;
        break;
      case SET_PRODUCT_DETAIL:
        draft.productDetail = action.payload;
        break;
      case RESET_PRODUCT_DETAIL:
        draft.productDetail = {};
        break;
    }
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
export const requestProducts = params => actionCreator(GET_PRODUCTS, () => fetchRequest(`${baseApiUrl}product/getAllProductWithCategory`, params, "get", params, true))
export const requestProductDetail = id =>
  actionCreator(GET_PRODUCT_DETAIL, () => fetchRequest(`${baseApiUrl}product/${id}`, {}, "get"), (res) => console.log(res))

export const editProduct = (params, file) => actionCreator(EDIT_PRODUCT, () => {
  const formData = new FormData();
  formData.append('file', file);
  return fetchRequest(`${baseApiUrl}product/edit`, formData, "post", params, true)
});

export const createProduct = (params, file) => actionCreator(CREATE_PRODUCT, () => {
  const formData = new FormData();
  formData.append('file', file);
  return fetchRequest(`${baseApiUrl}product/new`, formData, "post", params, true)
});

export const deleteProduct = productId =>
  actionCreator(DELETE_PRODUCT, () => fetchRequest(`${baseApiUrl}product/delete`, {product_id: productId}, "post", {product_id: productId}, true))

export const setCategory = categories => dispatch => dispatch({
  type: SET_CATEGORY,
  payload: categories,
});

export const setProductDetail = productDetail => dispatch => dispatch({
    type: SET_PRODUCT_DETAIL,
    payload: productDetail,
  });

export const resetProductDetail = () => dispatch => dispatch({
  type: RESET_PRODUCT_DETAIL,
})


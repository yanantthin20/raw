import { combineReducers } from 'redux'

import { successReducer as success, loadingReducer as loading, errorReducer as error} from "./api";
import auth from './auth'
import order from './order'
import product from './product'
import utility from "./utility";
import customer from "./customer";

export default combineReducers({
  order,
  auth,
  utility,
  success,
  loading,
  error,
  customer,
  product,
})

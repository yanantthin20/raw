import {getActionTypes} from "./utility";

export default function actionCreator(type, axiosFunction, successCb = () => null, errorCb =() => null) {
    const [loading, success, err ] = getActionTypes(type)
    return function(dispatch) {
      dispatch({ type: loading});
      axiosFunction()
        .then(res => {
          dispatch({ type: success, payload: res.data });
          successCb(res.data)
        })
        .catch(error => {
            errorCb();
          dispatch({
            type: err,
            error,
          });
        });
    }
}

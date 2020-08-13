/**
 * attempt to extract xhr error message from a variety of formats
 * @param  {object}     err     xhr response object
 * @return {string}             extracted error message
 */
export const getErrorMessage = err => {
    if (!err) return "";
    if (err.response) {
        if (err.response.data) {
            if (err.response.data.errormsg) {
                return err.response.data.errormsg;
            } else if (err.response.data.message) {
                return err.response.data.message;
            } else if (err.response.data.error_description) {
                return err.response.data.error_description;
            } else if (err.response.data.error) {
                //stripe
                if (err.response.data.error.message)
                    return err.response.data.error.message;
            }
        } else if (err.response.errormsg) {
            return err.response.errormsg;
        }
    } else if (err.data) {
        if (err.data.message) return err.data.message;
    } else if (err.message) return err.message;
    return "";
};

/**
 * helper functions to generate all the actions type in a single place
 * @param subset
 * @returns {string[]}
 */
export const getActionTypes = (subset) => ([
    subset+'_LOADING',
    subset+'_SUCCESS',
    subset+'_ERROR'
]);


export const createReducer = ({type, action, initialState}, keyword, state) => {
    const [loading, success, error]= getActionTypes(keyword.toUpperCase());
    switch(type) {
        case success:
            state[keyword] = action.payload;
            break;
        case loading:
        case error:
            state[keyword] = initialState[keyword];
            break;
        default:
            return null;
    }
}


/**
 54  * simple jwt validation
 55  * performs base64 decode and validate values
 56  * @param  {string}     token   JWT
 57  * @return {boolean}            whether JWT is valid
 58  */
export const isValidJWT = token => {
  if (!token) return null;
  let base64Url;
  let base64;
  let data;

  try {
    base64Url = token.split(".")[1];
    base64 = base64Url.replace("-", "+").replace("_", "/");
    data = JSON.parse(window.atob(base64));
  } catch (err) {
    return false;
  }

  switch (true) {
    case data.exp * 1000 < new Date().getTime():
      return false;
    default:
    //do nothing
  }

  return true;
};

/**
 * refresh page with javascript
 */
export function forceRefresh() {
  window.location.reload();
}

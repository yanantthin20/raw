import axios from "axios";

/**
 * get access token
 */
export function getAccessToken() {
  return window.localStorage.getItem("token");
}

/**
 *
 * @param { string } url        fetch url
 * @param { boolean } restrict  whether api need authentication
 * @param { object } body       request body
 * @param { string } method     request method
 * @param { object } params     request params
 * @returns { AxiosStatic }
 */
export function fetchRequest(url, data = {}, method = "get", params = {}, restrict = false) {
  let header;
  if(restrict) {
    header = { Authorization: `Bearer ${getAccessToken()}` };
  }
  return axios({
    method,
    url,
    data,
    headers: header,
    params: params,
  });
}

export function fileUpload(url, file) {
  let formData = new FormData();
  formData.set('image', file);
  return axios.post(url, formData, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}` },
      'content-type': 'multipart/form-data' //                          do not forget this
    });
}

export function downloadRequest(url, data = {}, method = "get", params = {}) {
  const header = { Authorization: `Bearer ${getAccessToken()}` };
  return axios({
    method,
    url,
    data,
    params: params,
    headers: header,
    responseType: "blob"
  });
}

/**
 * simple jwt validation
 * performs base64 decode and validate values
 * @param  {string} 	token 	JWT
 * @return {boolean}       		whether JWT is valid
 */
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
    case data.role && data.role.length < 1:
    case Array.isArray(data.roles) && data.roles.length < 1:
    case data.exp * 1000 < new Date().getTime():
      return false;
    default:
    //do nothing
  }

  return true;
};

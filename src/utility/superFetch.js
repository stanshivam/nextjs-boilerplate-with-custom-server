import fetch from 'isomorphic-unfetch';
import { API_URL } from '../../config';
export const customHeader = api => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // Authorization: (() => {
    //   const user = localStorage.getItem(config.user);
    //   let token = user && JSON.parse(user).token;
    //   switch (api) {
    //     default:
    //       return `Bearer ${token}`;
    //   }
    // })()
  };
};
const base = (method, url, data = {}, thirdParty = '') => {
  let body = undefined;
  if (method !== 'get') {
    body = JSON.stringify(data);
  }
  return fetch(`${API_URL}/${url}`, {
    method,
    headers: customHeader(thirdParty),
    body
  })
    .then(res => res)
    .catch(error => error);
};

const SuperFetch = {};

['get', 'post', 'put', 'delete'].forEach(method => {
  SuperFetch[method] = base.bind(null, method);
});

export default SuperFetch;

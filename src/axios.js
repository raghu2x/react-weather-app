import axios from "axios";
let AUTH_TOKEN = '';
let baseURL = 'https://hiring-test.a2dweb.com';

const api = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: { 'Authorization': 'Bearer ' + AUTH_TOKEN }
});


const auth_token = "auth_token";
const header_token_key = "Authorization";

const token = {
  get: () => {
    return localStorage.getItem(auth_token);
  }
};

api.interceptors.request.use(
  (config) => {
    if (config.url.indexOf("/login") <= 0) {
      if (token.get()) {
        config.headers[header_token_key] = 'Bearer ' + token.get();
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response && response.headers && response.headers[header_token_key]) {
      localStorage.setItem(auth_token, response.headers[header_token_key]);
    }
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error && (error?.response?.status === 403 || error?.response?.status === 412)) {
      // alert('something went wrong');
      localStorage.clear();
    } else {
      console.error(error?.response?.data);
      // alert('please login again');
      console.error('please login again');
    }
    return { error: error?.response?.data?.message || error?.response?.data?.msg || 'something went wrong!' };
  }
);

export default api;
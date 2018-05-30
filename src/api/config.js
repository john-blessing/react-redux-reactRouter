import axios from 'axios'

const baseURL = 'http://localhost:8999/api/v1.0/'

const api = axios.create({
    baseURL,
    timeout: 5000,
    withCredentials: true
});

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default api;
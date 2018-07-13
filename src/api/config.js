import axios from 'axios'

const baseURL = 'http://localhost:8084/api/'

axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.data.res_code === 500) {
       window.location.href = '/login'
    }
    return response;
}, function (error) {
    if (error.request.status !== 200) {
        window.location.href = '/login'
    } else {
        // Do something with response error
        return Promise.reject(error);
    }
});

export default axios;
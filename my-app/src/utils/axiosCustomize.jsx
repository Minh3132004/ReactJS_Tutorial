import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8081/",
    timeout: 10000,
});



// Add a request interceptor

instance.interceptors.request.use(function (config) {
    console.log("interceptors request : ", config);
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor

instance.interceptors.response.use(function (response) {
    console.log("interceptors response : ", response);

    return response && response.data ? response.data : response;
}, function (error) {
    return error && error.response && error.response.data ? Promise.reject(error.response.data) : Promise.reject(error);
});

export default instance;
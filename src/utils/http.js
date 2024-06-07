// src/utils/http.js
import axios from 'axios';

// 创建 axios 实例
const httpInstance = axios.create({
    baseURL: '/api',  // 应该是前端的地址
    timeout: 5000,
});

// axios 请求拦截器
httpInstance.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

// axios 响应拦截器
httpInstance.interceptors.response.use(
    response => response.data,
    error => {
        return Promise.reject(error);
    }
);

export default httpInstance;

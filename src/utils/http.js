// src/utils/http.js
import axios from 'axios';
import { getTokenInfoStore } from "@/stores/getTokenInfoStore.js";

// 创建 axios 实例
const httpInstance = axios.create({
    baseURL: '/api',  // 应该是前端的地址
    timeout: 5000,
});

// axios 请求拦截器
httpInstance.interceptors.request.use(config => {
        // 1. 从pinia获取token数据
        const TokenInfoStore = getTokenInfoStore()
        // 2.按照后端要求拼接token数据
        console.log("1111:", TokenInfoStore.serveTokenInfo)
        const token = TokenInfoStore.serveTokenInfo
        if (token){
           config.headers.Authorization = `Bearer ${token}`
        }
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

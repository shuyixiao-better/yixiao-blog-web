// src/apis/test.js
import httpInstance from '@/utils/http';

export const getCategoryAPI = () => {
    return httpInstance.get('/api/hello');  // 使用代理前缀
};

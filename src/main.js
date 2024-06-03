// src/main.js
import './assets/main.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import httpInstance from './utils/http';  // 引入 axios 实例

// 测试接口函数
import { getCategoryAPI } from '@/apis/test.js';
getCategoryAPI().then(res => {
    console.log(res);
});

// 创建应用实例
const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.mount('#app');

// 将 httpInstance 挂载到全局属性中，便于在组件中使用
app.config.globalProperties.$http = httpInstance;

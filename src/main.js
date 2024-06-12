// src/main.js
import './assets/main.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import httpInstance from './utils/http';  // 引入 axios 实例


import router from "@/router/index.js";
import ContentComponent from '@/views/Home/ContentComponent.vue'
// 导入element-plus依赖
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入全局白色底色样式
import './assets/global.css';


// 创建应用实例
const app = createApp(App);

app.component('content-component', ContentComponent)

const pinia = createPinia();
createApp(App).use(pinia).use(router).use(ElementPlus).mount('#app')

// 将 httpInstance 挂载到全局属性中，便于在组件中使用
app.config.globalProperties.$http = httpInstance;

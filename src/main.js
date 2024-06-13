import './assets/main.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/index.js";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import httpInstance from './utils/http';  // 引入 axios 实例
import ContentComponent from '@/views/Home/ContentComponent.vue';
// 导入全局白色底色样式
import './assets/global.css';

// 导入 store
import { getTokenInfoStore } from '@/stores/getTokenInfoStore.js';

const pinia = createPinia();

// 创建应用实例
const app = createApp(App);

// 注册 Pinia
app.use(pinia);

// 调用 getTokenInfoStore 之前确保 Pinia 已经注册
const tokenInfoStore = getTokenInfoStore();

// 调用 getTokenInfo 方法
tokenInfoStore.getTokenInfo().then(() => {
    console.log('Token information retrieved successfully.');

    // 注册路由
    app.use(router);

    // 注册 Element Plus
    app.use(ElementPlus);

    // 注册全局组件
    app.component('content-component', ContentComponent);

    // 将 httpInstance 挂载到全局属性中，便于在组件中使用
    app.config.globalProperties.$http = httpInstance;

    // 挂载应用
    app.mount('#app');
}).catch((error) => {
    console.error('Failed to retrieve token information:', error);

    // 即使获取 token 失败，也继续注册路由和其他插件，然后挂载 Vue 应用，以免阻塞应用启动
    app.use(router);
    app.use(ElementPlus);
    app.component('content-component', ContentComponent);
    app.config.globalProperties.$http = httpInstance;
    app.mount('#app');
});

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Hot from "@/views/Search/hot.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            name: Layout,
            component: Layout,
        },
        {
            path: '/hot',
            name: Hot,
            component: Hot
        }
    ]
})

export default router

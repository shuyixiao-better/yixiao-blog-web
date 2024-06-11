import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/homePage/homePage.vue'
import Hot from "@/views/Search/hot.vue";
import ArticleArchiving from '@/views/articleArchiving/articleArchiving.vue'
import SaySay from '@/views/saySay/saySay.vue'
import WebsiteGuide from '@/views/websiteGuide/websiteGuide.vue'
import Guestbook from '@/views/guestbook/guestbook.vue'
import FriendshipLink from '@/views/friendshipLink/friendshipLink.vue'
import AboutThisSite from '@/views/aboutThisSite/aboutThisSite.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            name: HomePage,
            component: HomePage,
        },
        {
            path: '/articleArchiving',
            name: ArticleArchiving,
            component: ArticleArchiving,
        },
        {
            path: '/saySay',
            name: SaySay,
            component: SaySay,
        },
        {
            path: '/websiteGuide',
            name: WebsiteGuide,
            component: WebsiteGuide,
        },
        {
            path: '/guestbook',
            name: Guestbook,
            component: Guestbook,
        },
        {
            path: '/friendshipLink',
            name: FriendshipLink,
            component: FriendshipLink,
        },
        {
            path: '/hot',
            name: Hot,
            component: Hot
        },
        {
            path: '/aboutThisSite',
            name: AboutThisSite,
            component: AboutThisSite
        }

    ]
})

export default router

// 权限校验相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getVerificationCode } from '@/apis/token/getVerificationCode.js'

export const getTokenInfoStore = defineStore('user', () => {
    // 1. 定义获取token权限的state
    const tokenInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getTokenInfo = async () => {
        const res = await getVerificationCode()
        tokenInfo.value = res.data
    }
    // 3. 以对象的格式把state和action return
    return {
        getTokenInfo
    }
}, {
    persist: true,
})
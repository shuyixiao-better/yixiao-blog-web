<template>
  <div class="userMenu">
    <div class="noticeBtn">
      <el-dropdown trigger="hover">
        <div class="el-dropdown-link hand-style">
          <svg-icon icon-class="notice"></svg-icon>
          <span v-if="topBageShow()" class="notice-bage topBage"></span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <span v-for="(item, index) in noticeList" :key="index" @click="handleClickNotice(index)">
            <el-dropdown-item>
              {{ item }}
              <span v-if="validata(index)" class="notice-bage"></span>
            </el-dropdown-item>
          </span>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="userInfo">
      <el-dropdown trigger="hover">
        <div class="el-dropdown-link hand-style">
          <img v-if="!userInfo" src="http://img.shiyit.com/touristAvatar.png" alt="">
          <img v-else :src="userInfo.avatar" alt="" />
        </div>
        <el-dropdown-menu slot="dropdown" v-if="userInfo">
          <router-link style="text-decoration: none; color: #71777c;" :to="'/user'">
            <el-dropdown-item>
              个人中心
            </el-dropdown-item>
          </router-link>
          <a style="text-decoration: none; color: #71777c;" @click="logout">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </a>
        </el-dropdown-menu>
        <el-dropdown-menu slot="dropdown" v-else>
          <div class="loginTip" style="padding: 10px; font-size: 0.9rem;">
            <p>登录网站，获取以下权益</p>
            <div style="margin-top: 10px;">
              <span>
                <i class="el-icon-cloudy"></i> 参与互动评论
              </span>
              <span style="margin-left: 10px;">
                <i class="el-icon-cloudy"></i> 发表优质文章
              </span>
            </div>
            <el-button @click="handleLogin" style="margin: 0 auto; display: block; margin-top: 10px;" type="success" size="small">立即登录</el-button>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  props: {
    userInfo: Object,
    noticeList: Array,
  },
  methods: {
    topBageShow() {
      // 定义你的逻辑
      return false;
    },
    handleClickNotice(index) {
      // 处理通知点击逻辑
    },
    validata(index) {
      // 验证逻辑
      return false;
    },
    logout() {
      // 处理退出登录逻辑
    },
    handleLogin() {
      // 处理登录逻辑
    },
  },
};
</script>

<style scoped>
.userMenu {
  display: flex;
  align-items: center;
}
.noticeBtn, .userInfo {
  margin-left: 10px;
}
.notice-bage {
  background-color: red;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: inline-block;
}
.topBage {
  position: absolute;
  top: 0;
  right: 0;
}
</style>

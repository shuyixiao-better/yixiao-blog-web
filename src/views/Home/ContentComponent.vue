<template>
    <div id="content">
      <ul>
        <li><a href="#home">首页</a></li>
        <li><a href="#news">文章归档</a></li>
        <li><a href="#contact">说说</a></li>
        <li><a href="#about">网址导航</a></li>
        <li><a href="#about">热搜</a></li>
        <li><a href="#about">留言板</a></li>
        <li><a href="#about">友情链接</a></li>
        <li><a href="#about">关于本站</a></li>
      </ul>
    </div>
</template>

<script>
import NavItem from "@/views/Home/NavItem.vue";
import SearchBox from "@/views/Home/SearchBox.vue";
import UserMenu from "@/views/Home/UserMenu.vue";

export default {
  name: 'ContentComponent',
  components: {UserMenu, SearchBox, NavItem},
  data() {
    return {
      path: this.$route.path,
      showSearch: false,
      showUser: true,
      userInfo: null, // 或实际的用户信息
      noticeList: [], // 通知列表
      logoSrc: 'logo.png', // 替换为实际的 logo 路径
      navItems: [
        { path: '/', name: '首页', icon: 'home' },
        { path: '/archive', name: '文章归档', icon: 'archive', dropdown: [
            { path: '/archive', name: '文章归档', icon: 'el-icon-date' },
            { path: '/category', name: '文章分类', icon: 'el-icon-menu' },
            { path: '/tags', name: '文章标签', icon: 'el-icon-collection-tag' },
          ] },
        { path: '/say', name: '说说', icon: 'say' },
        { path: '/navigation', name: '网址导航', icon: 'navigation' },
        { path: '/hot', name: '热搜', icon: 'hot2' },
        { path: '/message', name: '留言板', icon: 'message' },
        { path: '/links', name: '友情链接', icon: 'friendLink' },
        { path: '/about', name: '关于本站', icon: 'about', dropdown: [
            { path: '/about', name: '关于本站', icon: 'el-icon-monitor' },
            { url: 'https://gitee.com/quequnlong/shiyi-blog', name: '网站源码', icon: 'iconfont icon-zitidaima' },
            { url: this.adminUrl, name: '后台管理', icon: 'el-icon-setting' },
          ] },
      ],
    };
  },
  methods: {
    handleOpenSearchDialog() {
      this.showSearch = true;
    },
    logout() {
      // 退出登录逻辑
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #303030;
  display: flex; /* 添加这一行 */
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>

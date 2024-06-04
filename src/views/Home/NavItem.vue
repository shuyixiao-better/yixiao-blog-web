<template>
  <li :class="{ active: item.path === currentPath }">
    <span v-if="!item.dropdown">
      <router-link :to="item.path" class="hand-style">
        <svg-icon :icon-class="item.icon"></svg-icon> {{ item.name }}
      </router-link>
    </span>
    <el-dropdown v-else trigger="hover">
      <span class="el-dropdown-link hand-style">
        <svg-icon :icon-class="item.icon"></svg-icon> {{ item.name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <template v-for="subItem in item.dropdown">
          <router-link v-if="subItem.path" :to="subItem.path" :key="subItem.path" style="text-decoration: none; color: #71777c;">
            <el-dropdown-item>
              <i :class="subItem.icon"></i> {{ subItem.name }}
            </el-dropdown-item>
          </router-link>
          <a v-else :href="subItem.url" :key="subItem.url" target="_blank" style="text-decoration: none; color: #71777c;">
            <el-dropdown-item>
              <i :class="subItem.icon"></i> {{ subItem.name }}
            </el-dropdown-item>
          </a>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    item: Object,
    currentPath: String,
  },
};
</script>

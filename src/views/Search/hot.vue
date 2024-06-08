<script setup>
import { reactive, onMounted } from 'vue';
import {getHotAPI} from '@/apis/hotSearch.js';

// 使用 reactive 来创建响应式数据
const state = reactive({
  baiduList: [],
  weiboList: [],
  zhihuList: [],
  csdnList: [],
  toutiaoList: [],
});

// 使用 onMounted 代替 created 钩子函数
onMounted(() => {
  getHotAPI("baidu").then(res => {
    state.baiduList = res.data.data;
  });
  // 重复的 API 调用可以封装成函数，避免代码重复
  const fetchData = (source) => {
    getHotAPI(source).then(res => {
      state[source + 'List'] = res.data.data;
    });
  };
  fetchData("weibo");
  fetchData("zhihu");
  fetchData("csdn");
  fetchData("toutiao");
});

function go(url) {
  window.open(url, "_blank");
}
</script>

<template>
  <div class="hot">
    <div class="weibo">
      <div class="title">
        <span>微博热搜</span>
      </div>
      <ul>
        <li
            v-for="(item, index) in state.weiboList"
            class="hand-style"
            :key="index"
            @click="go(item.url)"
        >
            <span class="index">
              {{ index + 1 }}
            </span>
          <span>{{ item.keyword }}</span>
        </li>
      </ul>
    </div>
    <div class="baidu">
      <div class="title">
        <span>百度热搜</span>
      </div>
      <ul>
        <li
            v-for="(item, index) in state.baiduList"
            class="hand-style"
            :key="index"
            @click="go(item.url)"
        >
            <span class="index">
              {{ index + 1 }}
            </span>
          <span>{{ item.keyword }}</span>
        </li>
      </ul>
    </div>

    <div class="zhihu">
      <div class="title">
        <span>知乎热搜</span>
      </div>
      <ul>
        <li
            v-for="(item, index) in state.zhihuList"
            class="hand-style"
            :key="index"
            @click="go(item.url)"
        >
            <span class="index">
              {{ index + 1 }}
            </span>
          <span>{{ item.keyword }}</span>
        </li>
      </ul>
    </div>
    <div class="csdn">
      <div class="title">
        <span>CSDN热搜</span>
      </div>
      <ul>
        <li
            v-for="(item, index) in state.csdnList"
            class="hand-style"
            :key="index"
            @click="go(item.url)"
        >
            <span class="index">
              {{ index + 1 }}
            </span>
          <span>{{ item.keyword }}</span>
        </li>
      </ul>
    </div>
    <div class="toutiao">
      <div class="title">
        <span>头条热搜</span>
      </div>
      <ul>
        <li
            v-for="(item, index) in state.toutiaoList"
            class="hand-style"
            :key="index"
            @click="go(item.url)"
        >
            <span class="index">
              {{ index + 1 }}
            </span>
          <span>{{ item.keyword }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hot {
  grid-template-columns: repeat(5, 1fr);
  display: grid;

  .weibo,
  .baidu,
  .zhihu,
  .csdn,
  .toutiao {
    width: 250px;
    display: inline-block;
    margin-right: 30px;
  }
}

.weibo .title {
  background-color: #d52c2b;
  background-image: radial-gradient(circle at 50% 3%, #d63736, #d52c2b);
}

.toutiao .title {
  background-color: #d10808;
  background-image: radial-gradient(circle at 50% 3%, #d63736, #d52c2b);
}

.baidu .title {
  background-color: #4e6ef2;
  background-image: radial-gradient(circle at 50% -45%, #53a7f5, #4e6ef2);
}

.zhihu .title {
  background-color: #53a7f5;
  background-image: radial-gradient(circle at 50% -45%, #53a7f5, #4e6ef2);
}

.csdn .title {
  background-color: #fc5632;
  background-image: radial-gradient(circle at 50% 3%, #f07a56, #fc5632);
}
.weibo,
.baidu,
.zhihu,
.csdn,
.toutiao {
  .title {
    width: 100%;
    height: 78px;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    svg {
      margin-top: 20px;
      width: 100%;
    }

    span {
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  ul {
    list-style: none;
    margin-top: 10px;

    li {
      margin-bottom: 20px;
      font-size: 13px;
      height: 100%;
      padding: 5px;

      &:first-child .index {
        background-color: #fe2d46;
      }

      &:nth-child(2) .index {
        background-color: #ff6600;
      }

      &:nth-child(3) .index {
        background-color: #faa90e;
      }

      &:hover {
        background-color: var(--hover-color);
        border-radius: 3px;
      }

      span {
        color: var(--text-color);
      }

      .index {
        display: inline-block;
        text-align: center;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        line-height: 20px;
        background-color: #7f7f8c;
        color: #fff;
      }
    }
  }
}
</style>

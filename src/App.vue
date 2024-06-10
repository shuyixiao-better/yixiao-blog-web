<template>
  <Petal
      v-for="(petal, index) in petals"
      :key="index"
      :size="petal.size"
      :left="petal.left"
      :delay="petal.delay"
      :duration="petal.duration"
  />
  <header>
    <ContentComponent />
    <div class="content">
      <el-card style="max-width: 480px">
        <div class="headPortrait">
          <img src="/img/headPortrait.png" class="circle-img">
        </div>
        <div class="description">
          舒一笑<br/>
          <a>免费的技术分享</a>
        </div>
        <div class="socialLinks">
          <el-popover placement="top" :width="225" trigger="hover">
            <template #reference>
              <svg
                  t="1716118770370"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10551"
                  width="40"
                  height="40"
              >
                <path
                    d="M619.486 921.312c-40.947 0-76.776 0-102.368 5.118-30.71-5.118-66.539-5.118-107.486-5.118-112.605 0-214.973 46.066-214.973 76.776s87.013 25.592 199.618 25.592c46.065 0 87.013-5.118 122.841-15.355 35.83 5.118 76.776 10.237 117.724 10.237 112.604 0 199.617 5.118 199.617-25.592s-102.368-71.658-214.973-71.658z"
                    fill="#EFAB1B"
                    p-id="10552"
                ></path>
                <path
                    d="M906.117 609.09c-20.474-56.303-46.066-117.724-71.658-174.026v-40.947C834.46 174.026 721.854 0 512 0S189.54 174.026 189.54 394.117v40.947c-25.591 56.302-51.183 117.723-71.657 174.026-46.065 122.841-46.065 230.328-30.71 240.564 10.237 5.119 51.184-35.828 92.131-102.368C204.896 900.838 312.382 1023.68 512 1023.68s307.104-117.723 332.696-281.512c35.829 66.54 76.776 107.486 87.013 102.368 20.473-5.118 15.355-117.723-25.592-235.446z"
                    fill="#040000"
                    p-id="10553"
                ></path>
                <path
                    d="M430.106 127.96c-30.71 0-56.303 35.829-56.303 81.894 0 46.066 25.592 81.895 56.303 81.895 30.71 0 56.302-35.829 56.302-81.895 0-46.065-25.592-81.894-56.302-81.894z m174.025 0c-30.71 0-56.302 35.829-56.302 76.776 0 46.066 25.592 81.894 56.302 81.894s56.303-35.828 56.303-76.776c0-46.065-25.592-81.894-56.303-81.894z m117.723 358.288c-61.42 10.237-133.078 15.355-204.736 15.355s-143.315-5.118-204.736-15.355c-40.947 51.184-46.065 127.96-46.065 209.854 0 153.552 87.013 281.512 250.801 281.512S767.92 849.654 767.92 696.102c0-81.894-5.118-158.67-46.066-209.854z"
                    fill="#FFFFFF"
                    p-id="10554"
                ></path>
                <path
                    d="M517.118 317.34c-107.486 0-199.617 20.474-199.617 40.948 0 15.355 117.723 66.54 199.617 66.54s199.618-51.185 199.618-66.54c-5.118-20.474-92.131-40.947-199.618-40.947z"
                    fill="#EFAB1B"
                    p-id="10555"
                ></path>
                <path
                    d="M829.34 429.946c-81.894 25.592-194.498 40.947-317.34 40.947-127.96 0-240.565-15.355-317.34-40.947-15.356 35.828-30.711 76.776-46.066 112.604 51.184 15.356 102.368 30.71 163.788 40.948V731.93s40.948 10.237 81.895 10.237c30.71 0 56.302-5.118 56.302-5.118V598.853H512c138.197 0 266.157-20.474 368.525-51.184-15.355-40.947-30.71-76.776-51.184-117.723z"
                    fill="#DB2920"
                    p-id="10556"
                ></path>
                <path
                    d="M450.58 184.262c-15.356 0-25.593 15.356-25.593 30.71s10.237 30.711 25.592 30.711 25.592-15.355 25.592-30.71c-5.118-15.355-15.355-30.71-25.592-30.71z m179.143 20.474s-10.237-10.237-35.829-10.237c-25.592 5.119-35.828 15.355-35.828 20.474 0 0-5.119 10.237 0 15.355 5.118 5.118 10.236-5.118 10.236-5.118s10.237-15.356 25.592-15.356 25.592 5.119 25.592 5.119 5.119 5.118 10.237 0 0-10.237 0-10.237z"
                    fill="#040000"
                    p-id="10557"
                ></path>
              </svg>
            </template>
            <img
                style="width: 200px"
                src="https://shuyixiao.oss-cn-hangzhou.aliyuncs.com/QQ%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg"
            />
          </el-popover>
          <el-popover placement="top" :width="225" trigger="hover">
            <template #reference>
              <svg
                  t="1716118628735"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5954"
                  width="40"
                  height="40"
              >
                <path
                    d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
                    fill="#00C800"
                    p-id="5955"
                ></path>
                <path
                    d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                    fill="#00C800"
                    p-id="5956"
                ></path>
              </svg>
            </template>
            <img
                style="width: 200px"
                src="https://shuyixiao.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg"
            />
          </el-popover>
        </div>

      </el-card>
    </div>
  </header>
</template>

<script>
import ContentComponent from '@/views/Home/ContentComponent.vue';
import Petal from '@/style/Petal.vue'

export default {
  name: 'App',
  components: {
    ContentComponent,
    Petal
  },
  data() {
    return {
      petals: []
    };
  },
  created() {
    this.generatePetals(20);
  },
  methods: {
    generatePetals(count) {
      for (let i = 0; i < count; i++) {
        this.petals.push({
          size: Math.random() * 20 + 20,
          left: Math.random() * window.innerWidth,
          delay: Math.random() * 10,
          duration: Math.random() * 5 + 5
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">
#app {
  position: relative;
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(to bottom, #87ceeb, #f0e68c);
}
.content {
  margin-left: 20%;
}

.headPortrait {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* 增加底部空间以更好地展示旋转效果 */
}

.circle-img {
  width: 100px; /* 可以根据需要调整大小 */
  height: 100px; /* 可以根据需要调整大小 */
  border-radius: 50%;
  object-fit: cover;
  transition: transform 1s;
}

.circle-img:hover {
  transform: rotate(360deg);
}

.description {
  margin-top: 10px; /* 增加顶部空间以与图片区分 */
  text-align: center; /* 文本居中 */
  font-size: 20px; /* 根据需要调整字体大小 */
  color: #333; /* 根据需要调整文本颜色 */
}
.description a{
  font-weight: bold;
}

.socialLinks{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

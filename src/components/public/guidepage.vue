<template>
  <div>
    <!-- 1.如果用户第一次体验此应用，先进入引导页，在跳转首页 -->
    <!-- 2.又进入过一次引导页，以后默认进入广告页。再跳转首页 -->
    <!-- http://localhost:8080/guidepage  引导页 -->
    <!-- http://localhost:8080/advertpage  广告页 -->
    <!-- Swiper -->
    <div class="swiper-container guidepagecontainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img :src="ad01" alt="" />
        </div>
        <div class="swiper-slide">
          <img :src="ad02" alt="" />
        </div>
        <div class="swiper-slide">
          <img :src="ad03" alt="" />
          <van-button plain hairline round type="info" to="/home">点击体验</van-button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination guidepagepagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      ad01: require("../../assets/image/ad/adone.jpg"),
      ad02: require("../../assets/image/ad/ad02.jpg"),
      ad03: require("../../assets/image/ad/ad03.jpg")
    };
  },
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  },
  mounted() {
    new Swiper(".guidepagecontainer", {
      // direction: 'vertical',
      pagination: {
        el: ".guidepagepagination"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
  h3 {
    font-size: 20px;
    color: #404040;
  }
  .van-button {
    position: absolute;
    left: 38%;
    bottom: 120px;
  }
}
</style>

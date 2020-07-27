<template>
  <div>
    <!-- 首页导航 -->
    <div class="swiper-container homeNavSwiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="/quality/all">全部类别</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/quality/convenient">简餐便当</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/quality/tradition">传统美食</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/quality/westernfood">西式套餐</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/quality/macau">港澳风味 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/quality/korea">日韩料理 </router-link>
        </div>
      </div>
    </div>
    <!-- 首页导航 end -->

    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".homeNavSwiperContainer", {
      slidesPerView: 4, //显示个数
      freeMode: true
    });
  }
};
</script>

<style lang="scss" scoped>
a {
  color: white;
}
.swiper-container {
  width: 100%;
  height: 50px;
  background-color: #009cff;
}
.swiper-slide {
  color: white;
  text-align: center;
  font-size: 16px;
  background-color: #009cff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>

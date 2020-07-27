<template>
  <div>
    <!-- 首页导航 -->
    <div class="swiper-container homeNavSwiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="/food/all">全部</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/food/gruel">面食粥点</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/food/convenient">简单便餐</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/food/hamburger">汉堡披萨</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/food/incensepot">香锅冒菜 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/food/snack">小吃炸串 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/food/localdish">地方菜系 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/food/japanese">日本料理 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/food/lightfood">轻食简餐 </router-link>
        </div>
      </div>
    </div>
    <!-- 首页导航 end -->
    <div class="foot-nav">
      <van-row type="flex" justify="space-between">
        <van-col span="6">
          综合排序
          <span class="iconfont icon-paixu"></span>
        </van-col>
        <van-col span="6">
          距离最近
        </van-col>
        <van-col span="6">
          销量最高
        </van-col>
        <van-col span="6">
          筛选
          <span class="iconfont icon-shaixuan"></span>
        </van-col>
      </van-row>
    </div>

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
.foot-nav {
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #999;
}
</style>

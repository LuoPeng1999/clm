<template>
  <div>
    <!-- 首页导航 -->
    <div class="swiper-container homeNavSwiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="/drink/all">全部</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/drink/juice">奶茶果汁</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/drink/dessert">甜品</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/drink/coffee">咖啡</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/drink/cake">蛋糕 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/drink/bread">面包 </router-link>
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

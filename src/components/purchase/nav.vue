<template>
  <div>
    <!-- 广告通知栏 -->
    <van-notice-bar mode="closeable">
      请勿填写密码、取件码和兑换码等敏感信息及违规内容。隐私信息请在骑手接单后再沟通告知。
    </van-notice-bar>
    <!-- 广告通知栏end -->

    <!-- 二级导航栏 -->
    <div class="swiper-container homeNavSwiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="/purchase/milktea">奶茶</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/purchase/coffee">咖啡</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/purchase/refreshment">小吃</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/purchase/express">快递 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/purchase/medicine">药品 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/purchase/dish">买菜 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/purchase/brother">万能小哥 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/purchase/daily">日用 </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/purchase/wine">酒水 </router-link>
        </div>
      </div>
    </div>
    <!-- 二级导航栏end -->
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".homeNavSwiperContainer", {
      slidesPerView: 5, //显示个数
      freeMode: true
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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

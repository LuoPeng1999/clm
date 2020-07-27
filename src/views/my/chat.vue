<template>
  <div>
    <div class="chat-header">
      <p>{{ time }}</p>
      <div class="header-img">
        <img
          src="//alime-base.oss-cn-beijing.aliyuncs.com/avatar/alime-base.oss-cn-beijing-internal.aliyuncs.com1586522766728-小宝客服.png"
          alt=""
        />
      </div>
      <div class="header-content">
        hi~我是智能助理小e，很高兴为您服务。请选择下方热门问题，或在输入框中简述您的疑问哦~~
      </div>
    </div>
    <div class="chat-content">
      <div class="con-left">
        <img :src="question" alt="" />
      </div>
      <div class="con-right">
        <ul>
          <li>订单超时怎么办?</li>
          <li>怎么修改绑定手机号?</li>
          <li>忘记用红包了怎么办?</li>
          <li>我的红包为什么用不了?</li>
          <li>联系不上商家/骑士怎么办?</li>
          <li>怎么开通支付宝免密支付?</li>
        </ul>
      </div>
    </div>
    <div class="chat-nav">
      <div class="swiper-container questionNav">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      question: require("../../assets/image/my/question.png")
    };
  },
  computed: {
    time() {
      let date = new Date();
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      return `${h}:${m}`;
    }
  },
  mounted() {
    new Swiper(".questionNav", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    // new Swiper(".privilegeFourSwiper", {
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   }
    // });
  }
};
</script>

<style lang="scss" scoped>
.chat-header {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-bottom: 40px;
  & > p {
    width: 100%;
    height: 30px;
    line-height: 40px;
    text-align: center;
    color: #999;
    font-size: 12px;
  }
  .header-img {
    margin-top: 10px;
    float: left;
    margin-left: 10px;
    img {
      height: 36px;
      width: 36px;
      vertical-align: middle;
    }
  }
  .header-content {
    float: left;
    width: 60%;
    height: 70px;
    margin-top: 10px;
    font-size: 14px;
    margin-left: 5px;
    line-height: 20px;
    padding: 5px 15px;
    background-color: #fff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    color: #333;
  }
}
.chat-content {
  width: 310px;
  height: 261px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 105px;
  margin-left: 5px;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  box-shadow: 2px 2px 1px #ccc;
  .con-left {
    width: 80px;
    height: 261px;
    float: left;
  }
  .con-right {
    width: 230px;
    height: 261px;
    float: left;
    & > ul {
      width: 100%;
      height: 100%;
      & > li {
        height: 43.5px;
        line-height: 43.5px;
        margin-left: 5px;
        font-size: 14px;
        border-bottom: 1px solid #f0f0f0;
        box-sizing: border-box;
      }
    }
  }
}
</style>

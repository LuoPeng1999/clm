<template>
  <div>
    <!-- 订单头部start -->
    <div class="find_top">
      <div class="ft_left">
        <ul>
          <router-link tag="li" to="/gold">金币商城</router-link>
          <li>0元好物在这里</li>
        </ul>
        <div class="tl_img">
          <img :src="gold" alt="" />
        </div>
      </div>
      <div class="ft_right">
        <div class="rt_content">
          <ul>
            <router-link tag="li" to="/gold">推荐有奖</router-link>
            <li>20元现金拿不停</li>
          </ul>
          <div class="rt_img">
            <img :src="recommend" alt="" />
          </div>
        </div>
        <div class="rb_content">
          <ul>
            <router-link tag="li" to="/gold">周边优惠</router-link>
            <li>领取口碑好券</li>
          </ul>
          <div class="rb_img">
            <img :src="discount" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 订单头部end -->

    <!-- 订单底部start -->
    <div class="find_bottom">
      <div class="fb_title">
        <div class="title_top">
          <span class="tl_left"></span>
          <div class="tl_clock">
            <span class="iconfont icon-icon-test"></span>
          </div>
          <span class="tl_content">限时豪礼</span>
          <span class="tl_right"></span>
        </div>
        <div class="title_bottom">金币换豪礼</div>
      </div>
      <div class="fb_gift">
        <ul>
          <li>
            <img :src="coupon01" alt="" />
            <p>3元品质联盟红包</p>
            <span class="fb_gold">90金币</span>
          </li>
          <li>
            <img :src="coupon02" alt="" />
            <p>5元品质联盟红包</p>
            <span class="fb_gold">150金币</span>
          </li>
          <li>
            <img :src="coupon03" alt="" />
            <p>6元品质联盟红包</p>
            <span class="fb_gold">180金币</span>
          </li>
        </ul>
      </div>
      <div class="fb_footer" @click="$router.push('/gold')">
        查看更多<span>></span>
      </div>
    </div>
    <!-- 订单底部end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      coupon01: require("../assets/image/find/coupon01.png"),
      coupon02: require("../assets/image/find/coupon02.png"),
      coupon03: require("../assets/image/find/coupon03.png"),
      discount: require("../assets/image/find/discount.png"),
      gold: require("../assets/image/find/gold.png"),
      recommend: require("../assets/image/find/recommend.png")
    };
  }
};
</script>

<style lang="scss" scoped>
// 订单头部样式start
.find_top {
  width: 100%;
  height: 188px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #fff;
  .ft_left {
    width: 50%;
    height: 100%;
    float: left;
    border-right: 1px solid #f0f0f0;
    box-sizing: border-box;
    & > ul {
      width: 100%;
      height: 94px;
      margin-top: 7px;
      margin-left: 7px;
      & > li {
        width: 100%;
        height: 30px;
        &:first-child {
          font-size: 18px;
          color: #ffa217;
        }
        &:last-child {
          font-size: 14px;
          color: #999999;
        }
      }
    }
    .tl_img {
      width: 100%;
      height: 50%;
      img {
        width: 84px;
        float: right;
        margin-right: 5px;
      }
    }
  }
  .ft_right {
    width: 50%;
    height: 100%;
    float: left;
    .rt_content {
      width: 100%;
      height: 50%;
      border-bottom: 1px solid #f0f0f0;
      box-sizing: border-box;
      & > ul {
        width: 60%;
        height: 100%;
        float: left;
        & > li {
          width: 100%;
          height: 30px;
          line-height: 57px;
          margin-left: 6px;
          &:first-child {
            font-size: 18px;
            color: #1ba9e1;
          }
          &:last-child {
            font-size: 14px;
            color: #999999;
          }
        }
      }
      .rt_img {
        img {
          display: inline-block;
          width: 52px;
          margin-top: 20px;
          margin-left: 10px;
        }
      }
    }
    .rb_content {
      width: 100%;
      height: 50%;
      & > ul {
        width: 60%;
        height: 100%;
        float: left;
        & > li {
          width: 100%;
          height: 30px;
          line-height: 57px;
          margin-left: 6px;
          &:first-child {
            font-size: 18px;
            color: #f0827d;
          }
          &:last-child {
            font-size: 14px;
            color: #999999;
          }
        }
      }
      .rb_img {
        // text-align: center;
        img {
          display: inline-block;
          width: 52px;
          margin-top: 20px;
          margin-left: 10px;
        }
      }
    }
  }
}
// 订单头部样式end

// 订单头部样式start
.find_bottom {
  width: 100%;
  height: 286px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 20px auto;
  background-color: #fff;
  .fb_title {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    .title_top {
      width: 100%;
      height: 24px;
      text-align: center;
      line-height: 24px;
      .tl_left {
        display: inline-block;
        width: 18px;
        height: 1px;
        background-color: #000;
        margin-right: 8px;
        margin-bottom: 5px;
        position: relative;
        &::after {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background-color: #000;
          position: absolute;
          right: -5px;
          top: -2px;
        }
      }
      .tl_clock {
        display: inline-block;
        font-size: 18px;
        margin-right: 5px;
        color: #f9534e;
      }
      .tl_content {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
      }
      .tl_right {
        display: inline-block;
        width: 18px;
        height: 1px;
        background-color: #000;
        margin-left: 8px;
        margin-bottom: 5px;
        position: relative;
        &::after {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background-color: #000;
          position: absolute;
          left: -5px;
          top: -2px;
        }
      }
    }
    .title_bottom {
      width: 100%;
      height: 16px;
      text-align: center;
      font-size: 14px;
      color: #999999;
    }
  }
  .fb_gift {
    width: 100%;
    height: 186px;
    & > ul {
      display: flex;
      & > li {
        flex: 1;
        text-align: center;
        position: relative;
        & > img {
          display: inline-block;
          // width: 112px;
          height: 75px;
          margin-top: 50px;
        }
        &::after {
          content: "限时抢兑";
          display: inline-block;
          width: 56px;
          height: 20px;
          font-size: 14px;
          color: white;
          background-color: #000;
          position: absolute;
          left: 10px;
          top: 40px;
        }
        & > p {
          font-size: 12px;
          margin-top: 10px;
        }
        & > .fb_gold {
          font-size: 14px;
          color: #ff7b67;
          float: left;
          margin-left: 20px;
        }
        &:first-child .fb_gold {
          &::after {
            content: "￥3";
            font-size: 12px;
            color: #999999;
          }
        }
        &:nth-child(2) .fb_gold {
          &::after {
            content: "￥5";
            font-size: 12px;
            color: #999999;
          }
        }
        &:last-child .fb_gold {
          &::after {
            content: "￥6";
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
  }
  .fb_footer {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    text-align: center;
    color: #999999;
    font-size: 14px;
    line-height: 40px;
    & > span {
      color: #999999;
      font-size: 14px;
      margin-left: 5px;
      line-height: 40px;
    }
  }
}
// 订单底部样式end
</style>

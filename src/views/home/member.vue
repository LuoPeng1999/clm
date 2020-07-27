<template>
  <div>
    <div class="member-header">
      <ul>
        <li>开通超级会员</li>
        <li>每月领<span>￥20</span>专属红包</li>
        <li><span>再享4大会员专属特权</span></li>
        <li>
          <button @click="showShare = true">
            ￥<span>10</span><s>￥15</s>开通会员
          </button>
        </li>
      </ul>
    </div>
    <!-- 特权一 -->
    <div class="privilege-one">
      <div class="privilege-header">
        <span>特权1</span>
        <h3>每月免费领4个会员红包</h3>
      </div>
      <ul>
        <li>
          <span>￥<b>5</b></span>
          <p>无门槛</p>
        </li>
        <li>
          <span>￥<b>5</b></span>
          <p>无门槛</p>
        </li>
        <li>
          <span>￥<b>5</b></span>
          <p>无门槛</p>
        </li>
        <li>
          <span>￥<b>5</b></span>
          <p>无门槛</p>
        </li>
      </ul>
    </div>
    <!-- 特权二 -->
    <div class="privilege-two">
      <div class="privilege-header">
        <span>特权2</span>
        <h3>会员红包可升级大额商家红包</h3>
      </div>
      <div class="privilege-banner">
        <div class="swiper-container privilegeTwoSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li>
                  <img
                    src="https://cube.elemecdn.com/9/9d/6e010a0f6b3a5c6d34dda9e715a6fjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>韩国炸鸡奶茶</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/7/78/dce5fab46ef4ced330e3f36c8c31bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>尚百味披萨</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/3/58/80dbbb68711553fbe26946bbbb3a6jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>黄糖家美式炸鸡</span>
                  <p><span>￥</span><span>8</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/5/38/01e0131bab82c7cb80786c79ae067jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>疯狂小串</span>
                  <p><span>￥</span><span>7</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/1/bf/7edd9c802119747cae207782ff33bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>燕子烧烤</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/c/86/e896f4ec970d7fec0103b042cf8c9png.png?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>韩国炸鸡啤酒屋</span>
                  <p><span>￥</span><span>7</span>无门槛</p>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li>
                  <img
                    src="https://cube.elemecdn.com/5/38/01e0131bab82c7cb80786c79ae067jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>疯狂小串</span>
                  <p><span>￥</span><span>7</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/1/bf/7edd9c802119747cae207782ff33bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>燕子烧烤</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/c/86/e896f4ec970d7fec0103b042cf8c9png.png?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>韩国炸鸡啤酒屋</span>
                  <p><span>￥</span><span>7</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/9/9d/6e010a0f6b3a5c6d34dda9e715a6fjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>韩国炸鸡奶茶</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/7/78/dce5fab46ef4ced330e3f36c8c31bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>尚百味披萨</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/3/58/80dbbb68711553fbe26946bbbb3a6jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>黄糖家美式炸鸡</span>
                  <p><span>￥</span><span>8</span>无门槛</p>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li>
                  <img
                    src="https://cube.elemecdn.com/1/bf/7edd9c802119747cae207782ff33bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>燕子烧烤</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/5/38/01e0131bab82c7cb80786c79ae067jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>疯狂小串</span>
                  <p><span>￥</span><span>7</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/9/9d/6e010a0f6b3a5c6d34dda9e715a6fjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>韩国炸鸡奶茶</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/c/86/e896f4ec970d7fec0103b042cf8c9png.png?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>韩国炸鸡啤酒屋</span>
                  <p><span>￥</span><span>7</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/3/58/80dbbb68711553fbe26946bbbb3a6jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>黄糖家美式炸鸡</span>
                  <p><span>￥</span><span>8</span>无门槛</p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/7/78/dce5fab46ef4ced330e3f36c8c31bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>尚百味披萨</span>
                  <p><span>￥</span><span>6</span>无门槛</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <!-- 特权三 -->
    <div class="privilege-three">
      <div class="privilege-header">
        <span>特权3</span>
        <h3>下单返奖励金,再兑专属红包</h3>
        <p>每下一笔实付满￥20订单,获得1个奖励金</p>
      </div>
      <ul>
        <li>
          <img
            src="//cube.elemecdn.com/9/a9/3bf74c7fc7e8a989be429a56b7053svg.svg"
            alt=""
          />
          <p><span>2个</span>奖励金兑换</p>
          <div class="envelope">
            <div class="left">￥<span>4</span></div>
            <div class="right">商家红包</div>
          </div>
        </li>
        <li>
          <img
            src="//cube.elemecdn.com/9/a9/3bf74c7fc7e8a989be429a56b7053svg.svg"
            alt=""
          />
          <p><span>5个</span>奖励金兑换</p>
          <div class="envelope">
            <div class="left">￥<span>5</span></div>
            <div class="right">商家红包</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 特权四 -->
    <div class="privilege-four">
      <div class="privilege-header">
        <span>特权4</span>
        <h3>会员专属特价商品</h3>
      </div>
      <div class="privilege-banner">
        <div class="swiper-container privilegeFourSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li>
                  <img
                    src="https://cube.elemecdn.com/6/e3/f7cef0b80627c828fdb55eda60811jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>麻酱拌面加小馄饨</span>
                  <p>￥<span>11.5</span><s>￥23</s></p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/2/7c/13c612943cb283b24f025354a2de5jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>鸡蛋炒面➕培根</span>
                  <p>￥<span>9.45</span><s>￥31.8</s></p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/b/a6/851ef0e1849cefcd818eee17e0549jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>老北京炸酱面</span>
                  <p>￥<span>6</span><s>￥20</s></p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/a/e8/f699f4f8d0ee5c449e31247674ac2jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>人气素素素，套餐</span>
                  <p>￥<span>14.4</span><s>￥48</s></p>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li>
                  <img
                    src="https://cube.elemecdn.com/e/49/e011887da762827ce59ad7309a6b8jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>青菜皮蛋瘦肉粥</span>
                  <p>￥<span>6.9</span><s>￥23</s></p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/7/45/7f288db5075821d3c2c360732c1e3jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>大鸡排+鸡腿+地瓜丸6</span>
                  <p>￥<span>24.9</span><s>￥49.8</s></p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/3/39/96e10797b33765a00f055e965b897jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>鱼片玉米好吃的粥</span>
                  <p>￥<span>6.6</span><s>￥22</s></p>
                </li>
                <li>
                  <img
                    src="https://cube.elemecdn.com/6/55/f30b437863686e459a2b8c0dbea46jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_251,h_251/quality,q_90/format,webp"
                    alt=""
                  />
                  <span>香菇瘦肉粥</span>
                  <p>￥<span>6.6</span><s>￥22</s></p>
                </li>
              </ul>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <!-- 特权五 -->
    <div class="privilege-five">
      <div class="privilege-header">
        <span>特权5</span>
        <h3>会员专属客服</h3>
      </div>
      <img
        src="https://cube.elemecdn.com/9/b8/c5f575ba0eb4ed2531c21c8f3ce0bpng.png?x-oss-process=image/quality,q_90/format,webp"
        alt=""
      />
      <p>
        超级会员享有24小时客服专线，配有专属客服，竭诚提供更专业、更优质的服务
      </p>
    </div>

    <van-share-sheet
      v-model="showShare"
      :options="options"
      @select="select"
      title="支付方式"
    />
  </div>
</template>

<script>
import Swiper from "swiper";
import { Toast } from "vant";
export default {
  data() {
    return {
      showShare: false,
      options: [
        {
          name: "微信",
          icon: require("../../assets/image/rice/weixin.png")
        },
        {
          name: "支付宝",
          icon: require("../../assets/image/rice/zhifubao.png")
        },
        {
          name: "QQ",
          icon: require("../../assets/image/rice/qq.png")
        },
        {
          name: "银联",
          icon: require("../../assets/image/rice/yinlian.png")
        }
      ]
    };
  },
  mounted() {
    new Swiper(".privilegeTwoSwiper", {
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
    new Swiper(".privilegeFourSwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  methods: {
    select(option) {
      console.log(option);

      this.showShare = false;
      // 支付提示
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "正在支付中"
      });

      let second = 4;
      const timer = setInterval(() => {
        second--;
        if (second > 1) {
          toast.message = `正在支付中`;
        } else if (second == 1) {
          toast.message = `支付成功`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
// 超级会员头部样式
.member-header {
  width: 100%;
  height: 170px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  background: url("../../assets/image/home/memberImg.png") no-repeat;
  background-size: contain;
  & > ul {
    height: 100%;
    & > li {
      color: #f2d499;
      height: 25%;
      text-align: center;
      line-height: 42.5px;
      & > button {
        height: 40px;
        line-height: 40px;
        background-image: linear-gradient(135deg, #f7e8c9, #f2d499);
        background-color: #f2d499;
        padding: 0px 70px;
        border: 0;
        outline: none;
        color: #14110f;
        border-radius: 30px;
        font-size: 16px;
        & > s {
          font-size: 14px;
          color: rgba(179, 178, 183, 0.8);
          margin-right: 5px;
        }
        & > span {
          font-size: 26px;
          color: rgba(64, 33, 10, 0.8);
          font-weight: bold;
        }
      }
      &:first-child {
        font-size: 16px;
        height: 32.5px;
        line-height: 32.5px;
      }
      &:nth-child(2) {
        font-size: 30px;
        font-weight: bold;
        & > span {
          color: #ff4b33;
        }
      }
      &:nth-child(3) {
        color: #8a7a5c;
        font-size: 13px;
        height: 37.5px;
        line-height: 32.5px;
        & > span {
          background-color: rgba(0, 0, 0, 0.7);
          padding: 3px 10px;
          border-radius: 10px;
        }
      }
    }
  }
}
// 特权一样式
.privilege-one {
  width: 344px;
  height: 154px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
  overflow: hidden;
  .privilege-header {
    width: 320px;
    height: 20px;
    margin: 10px auto;
    & > span {
      display: inline-block;
      width: 40px;
      height: 20px;
      color: rgba(64, 33, 10, 0.8);
      background-color: #f2d499;
      text-align: center;
      line-height: 20px;
      font-weight: 700;
      border-radius: 5px;
      margin-right: 5px;
    }
    & > h3 {
      display: inline-block;
      font-size: 16px;
      color: #333;
    }
  }
  & > ul {
    width: 320px;
    margin: 16px auto;
    & > li {
      width: 74px;
      height: 90px;
      margin-left: 5px;
      background-color: rgba(255, 230, 181, 0.5);
      border-radius: 10px;
      margin-left: 8px;
      float: left;
      text-align: center;
      &:first-child {
        margin-left: 0;
      }
      & > span {
        display: block;
        color: #ff4b33;
        font-size: 14px;
        margin-top: 15px;
        & > b {
          font-size: 26px;
        }
      }
      & > p {
        color: #b47738;
        font-size: 14px;
      }
    }
  }
}
// 特权二样式
.privilege-two {
  width: 344px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
  overflow: hidden;
  .privilege-header {
    width: 320px;
    height: 20px;
    margin: 10px auto;
    & > span {
      display: inline-block;
      width: 40px;
      height: 20px;
      color: rgba(64, 33, 10, 0.8);
      background-color: #f2d499;
      text-align: center;
      line-height: 20px;
      font-weight: 700;
      border-radius: 5px;
      margin-right: 5px;
    }
    & > h3 {
      display: inline-block;
      font-size: 16px;
      color: #333;
    }
  }
  .privilege-banner {
    .privilegeTwoSwiper {
      ul {
        width: 320px;
        margin: 10px auto;
        li {
          width: 100px;
          height: 130px;
          margin-left: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
          background-color: rgba(255, 230, 181, 0.2);
          float: left;
          border-radius: 10px;
          text-align: center;
          overflow: hidden;
          & > img {
            width: 60px;
            height: 60px;
            display: inline-block;
            margin-top: 20px;
          }
          & > span {
            display: inline-block;
          }
          & > p {
            display: inline-block;
            color: #b47738;
            font-size: 12px;
            & > span:first-child {
              color: #ff4b33;
            }
            & > span:last-child {
              color: #ff4b33;
              font-size: 18px;
              font-weight: bold;
              margin-right: 3px;
            }
          }
          &:first-child {
            margin-left: 0;
          }
          &:nth-child(4) {
            margin-left: 0;
          }
        }
      }
    }
  }
}
// 特权三样式
.privilege-three {
  width: 344px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
  overflow: hidden;
  .privilege-header {
    width: 320px;
    height: 30px;
    margin: 10px auto;
    & > span {
      display: inline-block;
      width: 40px;
      height: 20px;
      color: rgba(64, 33, 10, 0.8);
      background-color: #f2d499;
      text-align: center;
      line-height: 20px;
      font-weight: 700;
      border-radius: 5px;
      margin-right: 5px;
    }
    & > h3 {
      display: inline-block;
      font-size: 16px;
      color: #333;
    }
    & > p {
      color: #999;
      font-size: 12px;
    }
  }
  & > ul {
    width: 320px;
    margin: 30px auto;
    li {
      width: 155px;
      height: 98px;
      border: 1px solid rgba(180, 119, 56, 0.25);
      box-sizing: border-box;
      float: left;
      margin-left: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      text-align: center;
      &:first-child {
        margin-left: 0;
      }
      img {
        display: inline-block;
        width: 14px;
        vertical-align: middle;
      }
      p {
        display: inline-block;
        margin-left: 2px;
        margin-top: 10px;
        color: #b47738;
        span {
          color: #ff4b33;
        }
      }
      .envelope {
        width: 138px;
        height: 56px;
        background-color: rgba(255, 230, 181, 0.5);
        display: inline-block;
        margin-top: 5px;
        border-radius: 10px;
        .left {
          float: left;
          margin-left: 20px;
          color: #ff4b33;
          font-size: 16px;
          line-height: 56px;
          span {
            font-size: 22px;
            font-weight: bold;
          }
        }
        .right {
          line-height: 56px;
          font-size: 16px;
          float: right;
          margin-right: 20px;
          color: #b47738;
        }
      }
    }
  }
}
// 特权四样式
.privilege-four {
  width: 344px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
  overflow: hidden;
  .privilege-header {
    width: 320px;
    height: 20px;
    margin: 10px auto;
    & > span {
      display: inline-block;
      width: 40px;
      height: 20px;
      color: rgba(64, 33, 10, 0.8);
      background-color: #f2d499;
      text-align: center;
      line-height: 20px;
      font-weight: 700;
      border-radius: 5px;
      margin-right: 5px;
    }
    & > h3 {
      display: inline-block;
      font-size: 16px;
      color: #333;
    }
  }
  .privilege-banner {
    .privilegeFourSwiper {
      ul {
        width: 320px;
        margin: 10px auto;
        li {
          width: 155px;
          height: 180px;
          margin-left: 10px;
          background-color: #fff;
          float: left;
          text-align: center;
          overflow: hidden;
          position: relative;
          &::after {
            content: "会员专享5.6折";
            color: white;
            display: inline-block;
            background-color: rgb(240, 115, 115);
            position: absolute;
            left: 0;
            bottom: 49px;
            border-bottom-left-radius: 5px;
            border-top-right-radius: 5px;
            padding: 0 5px;
          }
          & > img {
            width: 155px;
            height: 111px;
            display: inline-block;
            margin-top: 20px;
          }
          & > span {
            display: block;
            font-size: 13px;
            color: #171f24;
          }
          & > p {
            display: inline-block;
            color: #333;
            font-size: 12px;
            & > span {
              color: #333;
              font-size: 18px;
              font-weight: bold;
            }
            & > s {
              color: #999;
              font-size: 14px;
              margin-left: 3px;
            }
          }
          &:first-child {
            margin-left: 0;
          }
          &:nth-child(3) {
            margin-left: 0;
          }
        }
      }
    }
  }
}
// 特权五样式
.privilege-five {
  width: 344px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
  overflow: hidden;
  margin-bottom: 60px;
  .privilege-header {
    width: 320px;
    height: 20px;
    margin: 10px auto;
    & > span {
      display: inline-block;
      width: 40px;
      height: 20px;
      color: rgba(64, 33, 10, 0.8);
      background-color: #f2d499;
      text-align: center;
      line-height: 20px;
      font-weight: 700;
      border-radius: 5px;
      margin-right: 5px;
    }
    & > h3 {
      display: inline-block;
      font-size: 16px;
      color: #333;
    }
  }
  & > img {
    width: 128px;
    height: 80px;
    display: inline-block;
    margin-left: 108px;
  }
  & > p {
    width: 320px;
    margin: 10px auto;
  }
}
</style>

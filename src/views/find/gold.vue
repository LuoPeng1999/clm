<template>
  <div>
    <!-- 金币商城头部 -->
    <div class="gold-header">
      <div class="text-left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div class="text-title">
        金币商城
      </div>
    </div>
    <div class="gold-info">
      <div class="info-left">
        <div class="info-icon">
          <span class="iconfont icon-liwu"></span>
        </div>
        <div class="info-text">
          <span>{{ goldnum }}</span
          >金币
        </div>
      </div>
      <div class="info-right">
        <div class="info-icon">
          <span class="iconfont icon-liwu"></span>
        </div>
        <div class="info-text">兑换记录</div>
      </div>
    </div>
    <div class="goods-list">
      <div class="goods-left">
        <img src="//yun.duiba.com.cn/images/201910/crwugjcwol.jpg" alt="" />
      </div>
      <div class="goods-right">
        <img src="//yun.duiba.com.cn/images/201910/r8onusfmp9.jpg" alt="" />
        <img src="//yun.duiba.com.cn/images/201910/sromdt6k96.jpg" alt="" />
      </div>
    </div>
    <div class="ticket-list">
      <ul>
        <li>
          <div class="ticket-img">
            <div class="ticket-left">
              <img
                src="//yun.duiba.com.cn/images/201903/it3cqrpnj3.png"
                alt=""
              />
            </div>
            <div class="ticket-right">
              <img
                src="//yun.duiba.com.cn/images/201804/miaq1o1asn.png"
                alt=""
              />
            </div>
          </div>
          <div class="ticket-coupon">
            <div class="coupon-left">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元品质联盟...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
            <div class="coupon-right">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元馋了么...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="ticket-img">
            <div class="ticket-left">
              <img
                src="//yun.duiba.com.cn/images/201903/it3cqrpnj3.png"
                alt=""
              />
            </div>
            <div class="ticket-right">
              <img
                src="//yun.duiba.com.cn/images/201804/miaq1o1asn.png"
                alt=""
              />
            </div>
          </div>
          <div class="ticket-coupon">
            <div class="coupon-left">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元品质联盟...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
            <div class="coupon-right">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元馋了么...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="ticket-img">
            <div class="ticket-left">
              <img
                src="//yun.duiba.com.cn/images/201903/it3cqrpnj3.png"
                alt=""
              />
            </div>
            <div class="ticket-right">
              <img
                src="//yun.duiba.com.cn/images/201804/miaq1o1asn.png"
                alt=""
              />
            </div>
          </div>
          <div class="ticket-coupon">
            <div class="coupon-left">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元品质联盟...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
            <div class="coupon-right">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元馋了么...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="ticket-img">
            <div class="ticket-left">
              <img
                src="//yun.duiba.com.cn/images/201903/it3cqrpnj3.png"
                alt=""
              />
            </div>
            <div class="ticket-right">
              <img
                src="//yun.duiba.com.cn/images/201804/miaq1o1asn.png"
                alt=""
              />
            </div>
          </div>
          <div class="ticket-coupon">
            <div class="coupon-left">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元品质联盟...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
            <div class="coupon-right">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元馋了么...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="ticket-img">
            <div class="ticket-left">
              <img
                src="//yun.duiba.com.cn/images/201903/it3cqrpnj3.png"
                alt=""
              />
            </div>
            <div class="ticket-right">
              <img
                src="//yun.duiba.com.cn/images/201804/miaq1o1asn.png"
                alt=""
              />
            </div>
          </div>
          <div class="ticket-coupon">
            <div class="coupon-left">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元品质联盟...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
            <div class="coupon-right">
              <div class="ticket-tag">
                <van-tag color="#f0d89d" text-color="#ffffff"
                  >超级会员8折</van-tag
                >
              </div>
              <div class="ticket-name">3元馋了么...</div>
              <div class="ticket-price">72金币</div>
              <div class="ticket-btn">
                <button @click="prompt">兑换</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      goldnum: 175
    };
  },
  methods: {
    prompt() {
      if (this.goldnum > 72) {
        this.goldnum = this.goldnum - 72;
        Toast.fail("兑换成功");
      } else {
        Toast.fail("金币不够,无法兑换");
      }
    }
  },
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
.gold-header {
  width: 100%;
  height: 50px;
  max-width: 436px;
  min-width: 320px;
  background-color: #008eff;
  overflow: hidden;
  margin: 0 auto;
  .text-left {
    height: 50px;
    line-height: 50px;
    float: left;
    font-size: 20px;
    color: white;
    margin-left: 10px;
  }
  .text-title {
    height: 50px;
    line-height: 40px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    float: left;
    margin-left: 120px;
  }
}
.gold-info {
  width: 100%;
  height: 50px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #fff;
  .info-left {
    width: 50%;
    height: 50px;
    float: left;
    text-align: center;
    line-height: 50px;
    .info-icon {
      display: inline-block;
      color: #ff6d41;
    }
    .info-text {
      display: inline-block;
      & > span {
        margin-left: 5px;
        margin-right: 5px;
        color: red;
      }
    }
  }
  .info-right {
    width: 50%;
    height: 50px;
    float: right;
    border-left: 1px solid #f0f0f0;
    box-sizing: border-box;
    text-align: center;
    line-height: 50px;
    .info-icon {
      display: inline-block;
      color: #ff6d41;
    }
    .info-text {
      display: inline-block;
      margin-left: 5px;
    }
  }
}
.goods-list {
  width: 100%;
  height: 125px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
  .goods-left {
    float: left;
    width: 46%;
    margin-left: 4%;
    height: 125px;
  }
  .goods-right {
    float: left;
    width: 46%;
    margin-right: 4%;
    & > img {
      height: 50%;
    }
  }
}
.ticket-list {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 60px;
  ul {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    li {
      .ticket-img {
        width: 100%;
        .ticket-left {
          display: inline-block;
          & > img {
            display: inline-block;
            width: 186px;
          }
        }
        .ticket-right {
          display: inline-block;
          & > img {
            display: inline-block;
            width: 186px;
          }
        }
      }
      .ticket-coupon {
        width: 100%;
        overflow: hidden;
        .coupon-left {
          background-color: #fff;
          float: left;
          width: 46%;
          margin-left: 4%;
          .ticket-tag {
            margin-top: 10px;
            margin-left: 10px;
            display: inline-block;
            .van-tag {
              font-size: 10px;
            }
          }
          .ticket-name {
            display: inline-block;
            font-size: 14px;
            margin-top: 5px;
          }
          .ticket-price {
            color: rgb(253, 87, 70);
            margin-top: 20px;
            margin-left: 10px;
          }
          .ticket-btn {
            & > button {
              width: 51px;
              color: rgb(253, 87, 70);
              outline: none;
              border: 1px solid #fd5746;
              border-radius: 10px;
              background-color: #fff;
              margin-left: 110px;
              margin-bottom: 10px;
            }
          }
        }
        .coupon-right {
          background-color: #fff;
          width: 46%;
          margin-right: 4%;
          float: left;
          border-left: 1px solid #f0f0f0;
          box-sizing: border-box;
          .ticket-tag {
            margin-top: 10px;
            margin-left: 10px;
            display: inline-block;
            .van-tag {
              font-size: 10px;
            }
          }
          .ticket-name {
            display: inline-block;
            font-size: 14px;
            margin-top: 5px;
          }
          .ticket-price {
            color: rgb(253, 87, 70);
            margin-top: 20px;
            margin-left: 10px;
          }
          .ticket-btn {
            & > button {
              width: 51px;
              color: rgb(253, 87, 70);
              outline: none;
              border: 1px solid #fd5746;
              border-radius: 10px;
              background-color: #fff;
              margin-left: 110px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
}
</style>

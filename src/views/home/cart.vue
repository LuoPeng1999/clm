<template>
  <div>
    <div class="cart-header">
      <div class="text-left">
        <van-icon name="arrow-left" @click="cartvue" />
      </div>
      <div class="text-title">确认订单</div>
    </div>
    <div class="cart-address">
      <ul>
        <li>订单配送至</li>
        <li>
          <span class="address">{{ address.addressDetail }}</span>
          <van-icon name="arrow" class="icon" @click="addressFun" />
        </li>
        <li>
          {{ name }}(先生)
          <span>{{ tel }}</span>
        </li>
      </ul>
    </div>
    <div class="cart-time">
      <ul>
        <li>
          <div class="time-left">
            <ul>
              <li>送达时间</li>
              <li>
                <van-tag type="primary">蜂鸟专送</van-tag>
              </li>
            </ul>
          </div>
          <div class="time-right">尽快送达({{ date }}:00送达)</div>
        </li>
        <li>
          <div class="time-left">支付方式</div>
          <div class="time-right">在线支付</div>
        </li>
      </ul>
    </div>
    <div class="cart-info">
      <div class="info-title">
        <h1>清香源木桶饭</h1>
        (人民广场店)
      </div>
      <div class="info-list">
        <ul>
          <li v-for="(item, index) in lists" :key="index">
            <div class="info-left">
              <img :src="item.img" alt="" />
              <div class="img-title">{{ item.name }}x{{ item.num }}</div>
            </div>
            <div class="info-right">
              ￥
              <span class="price">{{ item.price * item.num }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="info-news">
        <ul>
          <li>
            <div class="news-left">配送费</div>
            <div class="news-right">￥0</div>
          </li>
          <li>
            <div class="news-left">
              <van-tag type="danger">标签</van-tag>
              <span>店铺满减优惠</span>
            </div>
            <div class="news-right">-￥2</div>
          </li>
          <li>
            <!-- <div class="news-left">红包/抵用券</div>
            <div class="news-right">
              <van-tag type="danger">0个可用</van-tag>
              <van-icon
                name="arrow"
                class="icon"
                @click="$router.push('/coupon')"
              />
            </div> -->
            <van-coupon-cell
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              @click="showList = true"
            />
          </li>
          <li>
            <div class="news-left">
              <router-link tag="a" to="/explanation">
                <span class="dire">优惠说明</span>
                <van-icon name="question-o" class="directions" />
              </router-link>
            </div>
            <div class="news-right">小计￥{{ price }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-footer">
      <div class="foot-price">
        ￥{{ price }}
        <span>已优惠￥2</span>
      </div>
      <div class="foot-pay" @click="onsubmit">去支付</div>
    </div>
    <!-- 优惠券列表展示 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <!-- 结算账单 -->
    <van-share-sheet
      v-model="showShare"
      :options="options"
      @select="select"
      title="支付方式"
    />
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 500,
  name: "店铺优惠券",
  startAt: 1590940800,
  endAt: 1593446400,
  valueDesc: "5",
  unitDesc: "元"
};
const couponunable = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 500,
  name: "店铺优惠券",
  startAt: 1588262400,
  endAt: 1590883200,
  valueDesc: "5",
  unitDesc: "元"
};
import { Toast } from "vant";
export default {
  data() {
    return {
      lists: [],
      date: new Date().getHours() + 1,
      name: "",
      tel: "",
      address: "",
      priceTotal: 0,
      storeName: "清香源木桶饭",
      storeImg: require("../../assets/image/home/storelist01.png"),
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [couponunable],
      showList: false,
      couponPrice: 0,
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
  created() {
    // console.log(111);
    this.$store.state.vanTabbar = false;
    // console.log(this.$store.state.vanTabbar);
    Object.assign(this.lists, this.$store.state.cart.lists);
    // console.log("this.lists", this.lists);
    let data = this.$store.state.address.lists.find(item => item.isDefault);
    if (data) {
      this.name = data.name;
      this.tel = data.tel;
      this.address = data;
    }
  },
  beforeDestroy() {
    // console.log(222);
    this.$store.state.vanTabbar = true;
    // console.log(this.$store.state.vanTabbar);
  },
  computed: {
    price() {
      // console.log(this.$store.state.cart.lists);
      // return this.$store.state.cart.lists.reduce((total, val) => {
      //   this.priceTotal = total + val.price * val.num;
      //   return total + val.price * val.num;
      // }, 0);
      let total = 0;
      this.$store.state.cart.lists.forEach(val => {
        total += val.price * val.num;
      });
      return (total - 2 - this.couponPrice).toFixed(2);
    },
    cardType() {
      return this.$store.state.address.lists.length == 0 ? "add" : "edit";
    }
  },
  methods: {
    addressFun() {
      if (this.$store.state.address.lists.length == 0) {
        this.$router.push("/add");
      } else {
        this.$router.push("/address");
      }
    },
    cartvue() {
      let price = price;
      let order = {
        orderId: new Date().getTime(),
        address: this.address,
        goodsList: this.lists,
        dataTime: new Date(),
        price: (this.priceTotal - 2 - this.couponPrice).toFixed(2),
        type: 1 // 未支付
      };

      this.$store.commit("order/add", order);
      // 清空购物车
      this.$store.state.cart.lists = [];
      this.$router.push("/rice");
    },
    onsubmit() {
      this.showShare = true;
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      this.couponPrice = (coupon.value / 100).toFixed(2);
    },
    onExchange(code) {
      this.coupons.push(coupon);
      console.log("code", code);
      this.couponPrice = 0;
    },
    select() {
      // Toast.success("支付成功");
      let order = {
        orderId: new Date().getTime(),
        address: this.address,
        goodsList: this.lists,
        dataTime: new Date(),
        price: this.price,
        storeName: this.storeName,
        storeImg: this.storeImg,
        type: 2 // 已支付
      };
      this.$store.commit("order/add", order);
      // 清空购物车
      this.$store.state.cart.lists = [];

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
          this.$router.push("/orderform");
          this.$store.state.active = 2;
          console.log(this);
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-header {
  width: 100%;
  height: 50px;
  max-width: 436px;
  min-width: 320px;
  background-color: #0096ff;
  overflow: hidden;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
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
    text-align: center;
    margin-left: 120px;
  }
}
.cart-address {
  width: 100%;
  height: 120px;
  max-width: 436px;
  min-width: 320px;
  background-color: #0096ff;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 50px;
  & > ul {
    width: 100%;
    height: 120px;
    margin-left: 20px;
    margin-top: 10px;
    & > li {
      width: 100%;
      max-width: 436px;
      min-width: 320px;
      height: 30px;
      line-height: 30px;
      color: white;
      font-size: 16px;

      &:first-child {
        color: rgba($color: #fff, $alpha: 0.8);
      }
      &:nth-child(2) {
        font-size: 25px;
        font-weight: bold;
      }
      & > span {
        height: 30px;
        line-height: 30px;
        float: left;
      }
      & > .address {
        display: inline-block;
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .icon {
        height: 30px;
        line-height: 35px;
        margin-left: 5px;
        float: left;
        margin-left: 5px;
      }
    }
  }
}
.cart-time {
  width: 100%;
  height: 180px;
  max-width: 436px;
  min-width: 320px;
  background: -webkit-linear-gradient(top, #0096ff 0%, #f7f7f7 100%);
  overflow: hidden;
  margin: 0 auto;
  & > ul {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    background-color: #fff;
    & > li {
      height: 80px;
      color: #333;
      font-size: 16px;
      .time-left {
        height: 80px;
        line-height: 80px;
        float: left;
        margin-left: 10px;
        & > ul {
          margin-top: 20px;
          height: 40px;
          & > li {
            height: 20px;
            line-height: 20px;
          }
        }
      }
      .time-right {
        float: right;
        height: 80px;
        line-height: 80px;
        margin-right: 10px;
        color: #0096ff;
      }
    }
  }
}
.cart-info {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 60px;
  .info-title {
    width: 90%;
    font-size: 14px;
    background-color: #fff;
    margin: 0 auto;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    & > h1 {
      display: inline-block;
      font-size: 20px;
      margin-left: 10px;
    }
  }
  .info-list {
    width: 90%;
    font-size: 14px;
    background-color: #fff;
    margin: 0 auto;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
    & > ul {
      width: 100%;
      & > li {
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: #333;
        position: relative;
        .info-left {
          float: left;
          margin-left: 10px;
          & > img {
            display: inline-block;
            width: 40px;
            // margin-left: 10px;
            margin-top: 5px;
            vertical-align: middle;
          }
          .img-title {
            display: inline-block;
            margin-left: 10px;
          }
        }
        .info-right {
          position: absolute;
          right: 0;
          margin-right: 10px;
          color: red;
          .price {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .info-news {
    width: 90%;
    font-size: 14px;
    background-color: #fff;
    margin: 0 auto;
    & > ul {
      width: 100%;
      // margin-left: 10px;
      & > li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #f0f0f0;
        box-sizing: border-box;
        .news-left {
          float: left;
          margin-left: 10px;
          & > span {
            margin-left: 4px;
          }
          .directions {
            height: 50px;
            line-height: 50px;
            margin-left: 5px;
          }
          .dire {
            float: left;
            margin-left: 0;
          }
        }
        .news-right {
          float: right;
          margin-right: 10px;
          .icon {
            margin-top: 19px;
            float: right;
            margin-left: 4px;
          }
        }
      }
    }
  }
}
.cart-footer {
  width: 100%;
  height: 50px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  .foot-price {
    flex: auto;
    background-color: #3c3c3c;
    color: white;
    font-size: 16px;
    line-height: 50px;
    text-indent: 16px;
    & > span {
      font-size: 12px;
      color: #999;
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid #999;
    }
  }
  .foot-pay {
    width: 120px;
    background-color: #00e067;
    font-size: 16px;
    color: white;
    line-height: 50px;
    text-align: center;
  }
}
</style>

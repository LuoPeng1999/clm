<template>
  <div>
    <!-- 订单页面start -->
    <div class="orderform">
      <ul>
        <li
          v-for="(item, index) in $store.state.order.lists"
          :key="index"
          v-show="item.type == 2"
        >
          <div class="orderform_top">
            <div class="oft_left">
              <img :src="item.storeImg" alt="" />
              <ul>
                <li>
                  <span class="oftl_content" @click="$router.push('/rice')">
                    {{ item.storeName }}
                  </span>
                  <span class="oftl_icon">
                    <van-icon name="arrow" />
                  </span>
                </li>
                <li>
                  {{ item.dataTime | dataFormat | dataText }}
                </li>
              </ul>
            </div>
            <div class="oft_right" @click="changeText(index)" ref="wait">
              待送达
            </div>
          </div>
          <div class="orderform_bottom">
            <div class="ofb_left">
              {{ item.goodsList[0].name }}
              <span
                v-if="item.goodsList !== undefined && item.goodsList.length > 1"
              >
                等{{ item.goodsList.length }}件商品
              </span>
            </div>
            <div class="ofb_right">￥{{ item.price }}</div>
          </div>
          <div class="orderform-btns">
            <van-button
              plain
              hairline
              round
              size="mini"
              color="#333"
              class="evaluate"
              >评价</van-button
            >
            <van-button
              plain
              hairline
              round
              size="mini"
              color="#333"
              class="againorder"
              @click="$router.push('/rice')"
              >再来一单</van-button
            >
          </div>
        </li>
      </ul>
    </div>
    <img :src="nullorder" alt="" v-show="$store.state.order.lists == 0" />
    <!-- 订单页面end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nullorder: require("../assets/image/order/nullorder.png")
    };
  },
  methods: {
    changeText(index) {
      // console.log(this);
      // console.log(this.$refs.wait);
      this.$refs.wait[index].innerHTML = "已送达";
    }
  },
  created() {
    this.$store.state.vanTabbar = true;
  },
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  },
  filters: {
    dataFormat(dataString) {
      console.log(dataString);

      var dd = new Date();

      // 获取 年 月 日
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1;
      var d = dd.getDate();

      // 获取 时 分 秒
      var hh = dd.getHours();
      var mm = dd.getMinutes();
      var ss = dd.getSeconds();

      return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    },
    dataText(data) {
      var arr = ["天", "一", "二", "三", "四", "五", "六"];
      var week = new Date().getDay();
      return data + "星期" + arr[week];
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background-color: #f2f2f2;
}
// 订单页面样式start
.orderform {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 10px auto;
  & > ul {
    width: 100%;
    & > li {
      // height: 120px;
      background-color: #fff;
      position: relative;
      margin-top: 10px;
      .orderform_top {
        height: 60px;
        // background-color: pink;
        .oft_left {
          & > img {
            position: absolute;
            width: 30px;
            left: 15px;
            top: 15px;
          }
          & > ul {
            float: left;
            // margin-top: 15px;
            // margin-left: 5px;
            position: absolute;
            left: 50px;
            top: 15px;
            & > li {
              height: 18px;
              font-size: 12px;
              color: #999999;
              line-height: 18px;
              .oftl_content {
                width: 80px;
                font-size: 16px;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .oftl_icon {
                font-size: 12px;
                color: #999999;
                margin-left: 5px;
              }
            }
          }
        }
        .oft_right {
          width: 50px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size: 14px;
          color: #333;
          position: absolute;
          right: 10px;
          top: 0px;
        }
      }
      .orderform_bottom {
        // background-color: skyblue;
        height: 60px;
        border-top: 1px solid #f0f0f0;
        box-sizing: border-box;
        .ofb_left {
          float: left;
          height: 60px;
          line-height: 60px;
          font-size: 14px;
          margin-left: 10px;
        }
        .ofb_right {
          float: right;
          height: 60px;
          line-height: 60px;
          font-size: 16px;
          font-weight: bold;
          margin-right: 20px;
        }
      }
      .orderform-btns {
        height: 30px;
        border-top: 1px solid #f0f0f0;
        box-sizing: border-box;
        .evaluate {
          float: right;
          margin-right: 5px;
          margin-top: 5px;
          color: #333;
        }
        .againorder {
          float: right;
          margin-right: 10px;
          margin-top: 5px;
          color: #333;
        }
      }
    }
  }
}
// 订单页面样式end
</style>

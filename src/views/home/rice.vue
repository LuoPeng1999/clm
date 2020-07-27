<template>
  <div>
    <div class="elmstore">
      <!-- 商家头部 -->
      <div class="rice-header">
        <div class="rice-btn">
          <van-icon name="arrow-left" @click="$router.push('/home')" />
        </div>
        <div class="rice-news">
          <ul>
            <li>
              <h1>
                清香源木桶饭(云客轩店)<span
                  class="iconfont icon-sanjiaoxing"
                  @click="showinfo = true"
                ></span>
              </h1>
            </li>
            <li>
              <ul>
                <li>评价4.4</li>
                <li>月售2097单</li>
                <li>蜂鸟专送约30分钟</li>
              </ul>
            </li>
            <li>
              <div class="li-left">
                <van-tag plain type="danger">20减10</van-tag
                ><van-tag plain type="danger">50减25</van-tag
                ><van-tag plain type="danger">配送费优惠</van-tag>
              </div>
              <div class="li-right">
                5个优惠<span
                  class="iconfont icon-sanjiaoxing1"
                  @click="show = !show"
                ></span>
              </div>
            </li>
            <li>公告:本店优惠活动进行中,所有商品满减和折扣同享</li>
          </ul>
        </div>
      </div>
      <!-- 商品列表 -->
      <van-tabs v-model="activeName">
        <van-tab title="点餐" name="a">
          <van-tree-select
            height="135vw"
            :items="items"
            :main-active-index.sync="active"
          >
            <template #content>
              <ul
                v-for="(item, keys) in foodlist"
                :key="keys"
                v-show="active == keys"
              >
                <li v-for="(obj, index) in item.detail" :key="index">
                  <van-row class="goodslist">
                    <van-col span="8">
                      <van-image height="100" fit="cover" :src="obj.img" />
                    </van-col>
                    <van-col span="16">
                      <div class="content">
                        <h1>{{ obj.name }}</h1>
                        <h2>{{ obj.descr }}</h2>
                        <p class="price">￥{{ obj.price }}</p>
                        <p>
                          <van-button
                            type="info"
                            size="mini"
                            @click="obj.num <= 0 ? 0 : obj.num--"
                            v-if="obj.num > 0"
                            round
                            >-</van-button
                          >
                          <span v-if="obj.num > 0">{{ obj.num }}</span>
                          <van-button
                            type="info"
                            size="mini"
                            @click="add(obj)"
                            class="btnleft"
                            round
                            >+</van-button
                          >
                        </p>
                      </div>
                    </van-col>
                  </van-row>
                </li>
              </ul>
            </template>
          </van-tree-select>
        </van-tab>
        <van-tab title="评价" name="b">
          <!-- <comment></comment> -->
          <div class="comment">
            <ul>
              <li>4.4</li>
              <li>
                <ul class="clearfix">
                  <li>商家评分</li>
                  <li>
                    <van-rate
                      allow-half
                      size="10"
                      gutter="1"
                      v-model="value"
                      readonly
                    />
                  </li>
                </ul>
              </li>
              <li>
                <ul class="clearfix">
                  <li>味道</li>
                  <li>4.4</li>
                </ul>
              </li>
              <li>
                <ul class="clearfix">
                  <li>包装</li>
                  <li>4.5</li>
                </ul>
              </li>
              <li>
                <ul class="clearfix">
                  <li>配送</li>
                  <li>4.8</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="buttonGroup">
            <van-button color="#0097FF" size="small">全部评价</van-button>
            <van-button color="#EBF5FF" size="small"
              ><span class="btncolor">最新</span></van-button
            >
            <van-button color="#EBF5FF" size="small"
              ><span class="btncolor">好评5598</span></van-button
            >
            <van-button color="#F5F5F5" size="small"
              ><span class="btncolor">差评3005</span></van-button
            >
            <van-button color="#EBF5FF" size="small"
              ><span class="btncolor">有图217</span></van-button
            >
          </div>
          <div class="userComment">
            <div class="userComment_top">
              <input type="checkbox" />
              <span>只看有内容的评价</span>
            </div>
            <div class="userComment_content">
              <ul>
                <li>
                  <img :src="avatar" alt="" />
                </li>
                <li>
                  <ul>
                    <li>
                      <span class="con_left">匿名用户</span
                      ><span class="con_right">2020-05-07</span>
                    </li>
                    <li>
                      <van-rate
                        allow-half
                        size="10"
                        gutter="1"
                        v-model="value"
                        readonly
                      />
                      <span class="good">超赞</span>
                    </li>
                    <li>
                      还挺好吃,这家店的菜都挺好吃的,还特别实惠,给五分好评!
                    </li>
                    <li>
                      <img
                        src="https://cube.elemecdn.com/6/15/670f88e9ef7e6795cbc47e255fd25jpeg.jpeg?x-oss-process=image/format,webp/resize,w_300"
                        alt=""
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </van-tab>
        <van-tab title="商家" name="c">
          <div class="merchant">
            <div class="merchant_info">
              <h1>配送信息</h1>
              <ul>
                <li>
                  <van-tag type="primary">蜂鸟专送</van-tag>
                  <span class="distance">约30分钟送达,距离1.6km</span>
                </li>
                <li>配送费￥0.0</li>
              </ul>
            </div>
            <div class="merchant_service">
              <h1>商家服务</h1>
              <span>该商户已购买食品安全责任险,食品安全有保障</span>
            </div>
            <div class="merchant_view">
              <h1>商家实景</h1>
              <div class="img01">
                <img
                  src="https://cube.elemecdn.com/4/95/064dc5ebd3a931e24a4f9b1f7f108jpeg.jpeg?x-oss-process=image/format,webp/resize,w_200,h_200,m_fixed"
                  alt=""
                />
                <span class="img01_info">大堂(1张)</span>
              </div>
              <div class="img02">
                <img
                  src="https://cube.elemecdn.com/6/c4/6610a9ebc19438974747d49633fa7jpeg.jpeg?x-oss-process=image/format,webp/resize,w_200,h_200,m_fixed"
                  alt=""
                />
                <span class="img02_info">门面(1张)</span>
              </div>
            </div>
            <div class="merchant_news">
              <h1>商家信息</h1>
              <van-cell title="订餐热线" />
              <van-cell title="品类" value="木桶饭,其他快餐" />
              <van-cell title="商家电话" value="联系商家" />
              <van-cell
                title="地址"
                value="梅林镇双龙大道1号梅林新区二期3栋9号"
              />
              <van-cell title="营业时间" value="10:30-14:25,16:35-21:35" />
            </div>
            <div class="merchant_qualification">
              <h1>营业资质</h1>
            </div>
          </div>
        </van-tab>
      </van-tabs>

      <div class="elmstore_footer" v-show="activeName == 'a'">
        <div class="left">
          <div class="circle">
            <span class="iconfont icon-waimai"></span>
          </div>
          <div class="left-text-before" v-show="sum == 0">
            {{ check.trackingBefore }}
          </div>
          <div class="left-text-after" v-show="sum > 0">
            <div class="total-money">￥{{ sum }}</div>
            <div class="tracking">
              {{ check.trackingBefore }}
            </div>
          </div>
        </div>
        <div class="right" :class="{ highlight: sum > 0 }" @click="gocart">
          {{ checkAll }}
        </div>
      </div>

      <!-- 弹出显示面板 -->
      <van-action-sheet v-model="show" title="优惠活动">
        <div class="content discount-content">
          <ul>
            <li>
              <van-tag plain type="danger">满减</van-tag
              ><span>满20元减10元</span>
            </li>
            <li>
              <van-tag plain type="warning">会员</van-tag
              ><span>超级会员领4元无门槛红包</span>
            </li>
            <li>
              <van-tag plain type="danger">配送</van-tag
              ><span>配送费立减3元</span>
            </li>
            <li>
              <van-tag plain type="danger">折扣</van-tag
              ><span>折扣商品99折起</span>
            </li>
            <li>
              <van-tag plain type="danger">首单</van-tag
              ><span>馋了么新用户首单立减17元</span>
            </li>
          </ul>
        </div>
      </van-action-sheet>

      <!-- 弹出商家信息面板 -->
      <van-overlay :show="showinfo">
        <div class="wrapper" @click="showinfo = false">
          <div class="block">
            <h3>清香源木桶饭(云客轩店)</h3>
            <ul class="bold">
              <li>4.4</li>
              <li>2097单</li>
              <li>蜂鸟专送</li>
              <li>0.0元</li>
              <li>1.6km</li>
            </ul>
            <ul class="normal">
              <li>评分</li>
              <li>月售</li>
              <li>约30分钟</li>
              <li>配送费</li>
              <li>距离</li>
            </ul>
            <div class="bulletin">
              <p>
                <span class="bulletin-left"></span>公告<span
                  class="bulletin-right"
                ></span>
              </p>
              <span>本店优惠活动进行中,所有商品满减和折扣同享</span>
            </div>
          </div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
// 导入评论功能组件
// import comment from '../../components/rice/comment';
import { Toast } from "vant";
export default {
  data() {
    return {
      storeName: "清香源木桶饭",
      // headernav: ["点餐", "评价", "商家"],
      items: [
        { text: "今日特价" },
        { text: "农菜系列" },
        { text: "素菜系列" },
        { text: "肉菜系列" },
        { text: "酸菜系列" },
        { text: "美味汤品" },
        { text: "满减专享" },
        { text: "饮料系列" },
        { text: "加点米饭" },
        { text: "小吃系列" }
      ],
      value: 4.7,
      foodlist: [
        {
          name: "今日特价",
          detail: [
            {
              id: 1,
              isSelect: true,
              name: "肉皮炒酸菜",
              descr: "月售31份 好评率100%",
              price: 14.53,
              num: 0,
              img: require("../../assets/image/rice/bargainPrice01.png")
            },
            {
              id: 2,
              isSelect: true,
              name: "花菜炒肉丝",
              descr: "月售31份 好评率100%",
              price: 10.89,
              num: 0,
              img: require("../../assets/image/rice/bargainPrice02.png")
            },
            {
              id: 3,
              isSelect: true,
              name: "【特惠】香干肉丝",
              descr: "月售31份 好评率100%",
              price: 10.89,
              num: 0,
              img: require("../../assets/image/rice/bargainPrice03.png")
            }
          ]
        },
        {
          name: "农菜系列",
          detail: [
            {
              id: 4,
              isSelect: true,
              name: "苦瓜炒肉+米饭",
              descr: "月售17份 好评率50%",
              price: 12,
              num: 0,
              img: require("../../assets/image/rice/farmhouse01.png")
            },
            {
              id: 5,
              isSelect: true,
              name: "青椒炒鸡蛋",
              descr: "月售50份 好评率100%",
              price: 11.86,
              num: 0,
              img: require("../../assets/image/rice/farmhouse02.png")
            },
            {
              id: 6,
              isSelect: true,
              name: "农家小炒肉",
              descr: "月售100份 好评率83%",
              price: 13.86,
              num: 0,
              img: require("../../assets/image/rice/farmhouse03.png")
            }
          ]
        },
        {
          name: "素菜系列",
          detail: [
            {
              id: 7,
              isSelect: true,
              name: "酸辣土豆丝",
              descr: "月售57份 好评率50%",
              price: 10.89,
              num: 0,
              img: require("../../assets/image/rice/vegetarian01.png")
            },
            {
              id: 8,
              isSelect: true,
              name: "手撕包菜",
              descr: "月售62份 好评率100%",
              price: 10.87,
              num: 0,
              img: require("../../assets/image/rice/vegetarian02.png")
            },
            {
              id: 9,
              isSelect: true,
              name: "麻婆豆腐",
              descr: "月售16份 好评率0.0%",
              price: 10.89,
              num: 0,
              img: require("../../assets/image/rice/vegetarian03.png")
            }
          ]
        },
        {
          name: "肉菜系列",
          detail: [
            {
              id: 10,
              isSelect: true,
              name: "啤酒鸭",
              descr: "月售100份 好评率100%",
              price: 14.85,
              num: 0,
              img: require("../../assets/image/rice/meatDish01.png")
            },
            {
              id: 11,
              isSelect: true,
              name: "红烧鱼块",
              descr: "月售62份 好评率100%",
              price: 13.86,
              num: 0,
              img: require("../../assets/image/rice/meatDish02.png")
            },
            {
              id: 12,
              isSelect: true,
              name: "猪耳炒大蒜",
              descr: "月售16份 好评率0.0%",
              price: 14.85,
              num: 0,
              img: require("../../assets/image/rice/meatDish03.png")
            }
          ]
        },
        {
          name: "酸菜系列",
          detail: [
            {
              id: 13,
              isSelect: true,
              name: "酸豆角肉沫",
              descr: "月售29份 好评率100%",
              price: 12.87,
              num: 0,
              img: require("../../assets/image/rice/acid01.png")
            },
            {
              id: 14,
              isSelect: true,
              name: "酸菜庆片",
              descr: "月售64份 好评率100%",
              price: 13.84,
              num: 0,
              img: require("../../assets/image/rice/acid02.png")
            },
            {
              id: 15,
              isSelect: true,
              name: "酸辣小鱼干",
              descr: "月售17份 好评率100%",
              price: 14.85,
              num: 0,
              img: require("../../assets/image/rice/acid03.png")
            }
          ]
        },
        {
          name: "美味汤品",
          detail: [
            {
              id: 16,
              isSelect: true,
              name: "西红柿蛋汤",
              descr: "月售17份 好评率100%",
              price: 4.95,
              num: 0,
              img: require("../../assets/image/rice/soup01.png")
            },
            {
              id: 17,
              isSelect: true,
              name: "紫菜蛋汤",
              descr: "月售17份 好评率100%",
              price: 4.95,
              num: 0,
              img: require("../../assets/image/rice/soup02.png")
            },
            {
              id: 18,
              isSelect: true,
              name: "紫菜瘦肉汤",
              descr: "月售21份 好评率100%",
              price: 5.94,
              num: 0,
              img: require("../../assets/image/rice/soup03.png")
            }
          ]
        },
        {
          name: "满减专享",
          detail: [
            {
              id: 19,
              isSelect: true,
              name: "红烧鱼块",
              descr: "月售5份 好评率100%",
              price: 26,
              num: 0,
              img: require("../../assets/image/rice/discount01.png")
            },
            {
              id: 20,
              isSelect: true,
              name: "水豆腐炒肉",
              descr: "月售11份 好评率100%",
              price: 23,
              num: 0,
              img: require("../../assets/image/rice/discount02.png")
            },
            {
              id: 21,
              isSelect: true,
              name: "冬瓜炒肉",
              descr: "月售5份 好评率100%",
              price: 23,
              num: 0,
              img: require("../../assets/image/rice/discount03.png")
            }
          ]
        },
        {
          name: "饮料系列",
          detail: [
            {
              id: 22,
              isSelect: true,
              name: "怡宝矿泉水",
              descr: "月售33份 好评率100%",
              price: 2.47,
              num: 0,
              img: require("../../assets/image/rice/drink01.png")
            },
            {
              id: 23,
              isSelect: true,
              name: "百事可乐",
              descr: "月售34份 好评率100%",
              price: 2.97,
              num: 0,
              img: require("../../assets/image/rice/drink02.png")
            },
            {
              id: 24,
              isSelect: true,
              name: "雪碧",
              descr: "月售19份 好评率0.0%",
              price: 2.97,
              num: 0,
              img: require("../../assets/image/rice/drink03.png")
            }
          ]
        },
        {
          name: "加点米饭",
          detail: [
            {
              id: 25,
              isSelect: true,
              name: "米饭(加饭)",
              descr: "月售100份 好评率100%",
              price: 2.47,
              num: 0,
              img: require("../../assets/image/rice/rice01.png")
            }
          ]
        },
        {
          name: "小吃系列",
          detail: [
            {
              id: 26,
              isSelect: true,
              name: "荷包蛋",
              descr: "月售46份 好评率100%",
              price: 2.97,
              num: 0,
              img: require("../../assets/image/rice/egg01.png")
            }
          ]
        }
      ],
      // priceList: [], // 用于计算总价格
      active: 0,
      activeName: "a",
      avatar: require("../../assets/image/my/avatar.png"),
      check: {
        trackingBefore: "另需配送费￥5",
        checkBefore: "￥10起送",
        checkAfter: "去结算"
      },
      show: false,
      showinfo: false
    };
  },
  methods: {
    linkToOrderform() {
      this.$router.push({ path: "/orderform" });
    },
    add(obj) {
      obj.storeName = this.storeName;
      obj.num += 1;
      this.$store.commit("cart/add", obj);
    },
    gocart() {
      if (this.$store.state.login.lists.length > 0) {
        this.$router.push("/cart");
      } else {
        Toast.fail("请您先登录账号才能购买");
      }
    }
  },
  computed: {
    sum() {
      let total = 0;
      this.foodlist.forEach(val => {
        val.detail.forEach(obj => {
          // console.log(obj);
          if (!obj.num) {
            return;
          } else {
            total += obj.num * obj.price;
          }
        });
      });
      return total.toFixed(2);
    },
    checkAll() {
      if (this.sum > 0) {
        return this.check.checkAfter;
      } else {
        return this.check.checkBefore;
      }
    },
    priceList() {
      let priceList = [];
      this.foodlist.forEach(val => {
        val.detail.forEach(val => {
          if (val.num > 0) {
            priceList.push(val);
            // this.$store.commit("cart/add", "priceList");
          }
        });
      });
      console.log(priceList);
      return priceList;
    }
  },
  created() {
    this.$store.state.vanTabbar = false;
  },
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
.rice-header {
  width: 100%;
  height: 220px;
  max-width: 436px;
  min-width: 320px;
  background: url("../../assets/image/rice/riceheader.png") no-repeat;
  overflow: hidden;
  margin: 0 auto;
  .rice-btn {
    background-color: transparent;
    color: white;
    font-size: 20px;
    margin-left: 5px;
    margin-top: 5px;
  }
  .rice-news {
    height: 75px;
    margin-top: 70px;
    // background-color: pink;
    & > ul {
      height: 100%;
      & > li {
        height: 25px;
        text-align: center;
        & > .li-left {
          float: left;
          margin-left: 70px;
          line-height: 25px;
          & > .van-tag {
            margin-right: 10px;
          }
        }
        & > .li-right {
          float: right;
          margin-right: 50px;
        }
        & > h1 {
          font-size: 25px;
        }
        & > ul {
          height: 25px;
          // background-color: #fff;
          margin-left: 55px;
          margin-top: 8px;
          & > li {
            height: 25px;
            line-height: 25px;
            text-align: center;
            float: left;
            padding: 0px 10px;
          }
        }
      }
    }
  }
}
// 点餐样式
.goodslist {
  position: relative;
  background-color: #fff;
  .van-checkbox {
    position: relative;
    left: 5px;
    top: 37px;
  }
  .content {
    padding-left: 10px;
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 12px;
      font-weight: normal;
      margin-top: 10px;
      color: #999999;
    }
    .price {
      font-size: 14px;
      color: #323233;
      margin-top: 6px;
      color: red;
    }
    span {
      display: inline-block;
      width: 30px;
      font-size: 14px;
      text-align: center;
    }
    .danger {
      span {
        font-size: 12px;
      }
    }
  }
  .btnleft {
    float: right;
    margin-right: 24px;
  }
  .van-button {
    color: white;
    font-weight: bold;
  }
}
.elmstore_footer {
  width: 100%;
  background: #514f4f;
  position: fixed;
  bottom: 0;
  height: 50px;
  display: flex;
  z-index: 999;
  .left {
    flex: 1;
    .circle {
      width: 50px;
      height: 50px;
      background: #726d6d;
      border-radius: 50%;
      position: relative;
      left: 10px;
      bottom: 16px;
      float: left;
      & > span {
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 30px;
      }
    }
    .left-text-before {
      position: relative;
      left: 18px;
      font-size: 14px;
      line-height: 50px;
      color: #c4c4c4;
      float: left;
    }
    .left-text-after {
      position: relative;
      left: 18px;
      color: #c4c4c4;
      float: left;
      .total-money {
        font-size: 24px;
        line-height: 28px;
      }
      .tracking {
        font-size: 11px;
        margin-top: 3px;
      }
    }
  }
  .right {
    flex: 0 0 110px;
    line-height: 50px;
    text-align: center;
    color: #c4c4c4;
    font-size: 16px;
    color: white;
  }
  .highlight {
    background: #38ca73;
    color: #2d2b2a;
    font-weight: bold;
    color: white;
  }
}
// 评价样式
.comment {
  width: 100%;
  height: 80px;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  overflow: hidden;
  margin: 0 auto;
  & > ul {
    width: 100%;
    height: 80px;
    display: flex;
    & > li {
      flex: 1;
      height: 80px;
      text-align: center;
      line-height: 80px;
      font-size: 12px;
      color: #666666;
      & > ul {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        // display: flex;
        & > li {
          //   flex: 1;
          height: 25px;
          text-align: center;
          line-height: 25px;
          &:last-child {
            font-size: 18px;
          }
        }
      }
    }
    & > li:first-child {
      font-size: 35px;
      color: #ff6000;
    }
    & > li:last-child {
      border-left: 1px solid #f0f0f0;
      box-sizing: border-box;
    }
  }
}
.buttonGroup {
  width: 100%;
  height: 100px;
  background-color: #fff;
  margin-top: 10px;
  .van-button {
    margin-left: 15px;
    margin-top: 10px;
    .btncolor {
      color: #666666;
    }
  }
}
.userComment {
  width: 100%;
  // height: 80px;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  overflow: hidden;
  margin: 0 auto;
  .userComment_top {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f0f0f0;
    & > input {
      display: inline-block;
      outline: none;
      border: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-left: 20px;
    }
    & > span {
      display: inline-block;
      color: #666666;
      margin-left: 5px;
    }
  }
  .userComment_content {
    & > ul {
      display: flex;
      & > li {
        flex: auto;
        &:first-child {
          float: left;
          width: 50px;
          & > img {
            width: 30px;
            display: inline-block;
            border-radius: 50%;
            margin-top: 10px;
            margin-left: 5px;
          }
        }
        & > ul {
          width: 100%;
          & > li {
            font-size: 16px;
            color: #333;
            height: 30px;
            line-height: 30px;
            & > .con_left {
              font-size: 12px;
              float: left;
            }
            & > .con_right {
              font-size: 10px;
              color: #999999;
              float: right;
              margin-right: 10px;
            }
            & > .good {
              font-size: 12px;
              color: red;
              margin-left: 5px;
            }
            & > img {
              display: block;
              height: 240px;
            }
            &:last-child,
            &:nth-child(3) {
              width: 90%;
            }
            &:last-child {
              height: 240px;
              margin-top: 40px;
            }
          }
        }
      }
    }
  }
}
// 商家样式
.merchant {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  .merchant_info {
    height: 100px;
    background-color: #fff;
    overflow: hidden;
    h1 {
      font-size: 18px;
      color: #333;
      margin-left: 10px;
      margin-top: 10px;
    }
    ul {
      height: 60px;
      margin-left: 10px;
      li {
        height: 30px;
        line-height: 30px;
        .distance {
          margin-left: 5px;
        }
      }
    }
  }
  .merchant_service {
    height: 80px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 10px;
    h1 {
      font-size: 18px;
      color: #333;
      margin-left: 10px;
      margin-top: 10px;
    }
    span {
      display: inline-block;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
  .merchant_view {
    height: 140px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 10px;
    h1 {
      font-size: 18px;
      color: #333;
      margin-left: 10px;
      margin-top: 10px;
    }
    img {
      display: inline-block;
      width: 70px;
    }
    .img01 {
      position: relative;
      float: left;
      margin-left: 10px;
      margin-top: 10px;
      .img01_info {
        display: inline-block;
        width: 70px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
    .img02 {
      position: relative;
      float: left;
      margin-left: 10px;
      margin-top: 10px;
      .img02_info {
        display: inline-block;
        width: 70px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
  .merchant_news {
    // height: 140px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 10px;
    // margin-bottom: 50px;
    h1 {
      font-size: 18px;
      color: #333;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
  .merchant_qualification {
    height: 50px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 70px;
    h1 {
      font-size: 18px;
      color: #333;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
}
.van-tabs {
  margin-bottom: 50px;
}
.discount-content {
  padding: 1px 16px 25px;
  ul {
    width: 200px;
    margin-left: 20px;
    li {
      margin: 5px 0;
      span {
        margin-left: 10px;
      }
    }
  }
}
// 遮罩层样式
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 300px;
  height: 200px;
  background-color: #fff;
  & > h3 {
    font-size: 16px;
    text-align: center;
    margin-top: 5px;
    color: #333;
  }
  .bold {
    height: 30px;
    margin-left: 20px;
    margin-top: 10px;
    li {
      font-size: 14px;
      float: left;
      font-weight: bold;
      color: #333;
      padding: 0 5px;
      // border: 1px solid #000;
    }
  }
  .normal {
    height: 30px;
    font-size: 12px;
    color: #999;
    margin-left: 12px;
    li {
      float: left;
      padding: 0 6px;
      // border: 1px solid #000;
      margin-left: 7px;
    }
  }
  .bulletin {
    width: 100%;
    text-align: center;
    p {
      height: 20px;
      line-height: 20px;
      color: #a9a9a9;
      span {
        display: inline-block;
        width: 15px;
        height: 1px;
        background-color: #a9a9a9;
        margin-bottom: 3px;
      }
      .bulletin-left {
        margin-right: 5px;
      }
      .bulletin-right {
        margin-left: 5px;
      }
    }
    & > span {
      display: inline-block;
      font-size: 14px;
      margin-left: 20px;
      margin-right: 20px;
      color: #333;
    }
  }
}
</style>

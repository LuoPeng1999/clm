<template>
  <div>
    <!-- 头部搜索框start -->
    <div class="home_header">
      <div class="header_position" @click="$router.push('/address')">
        <div class="icon_location">
          <van-icon name="location-o" />
        </div>
        <div class="position_content">
          {{ address.addressDetail }}
        </div>
        <div class="icon_arrowDown">
          <span class="iconfont icon-sanjiaoxing1"></span>
        </div>
      </div>
      <div class="header-search">
        <input
          type="text"
          placeholder="搜索饿了吧商家、商品名称"
          @focus="getSearch"
        />
        <div class="icon_search">
          <span class="iconfont icon-chaxun"></span>
        </div>
      </div>
    </div>
    <!-- 头部搜索框end -->
    <!-- 头部导航栏start -->
    <div class="home-nav" v-show="flag">
      <ul>
        <router-link tag="li" to="/food/all">
          <a href="javascript:;">
            <img :src="navImg01" alt="" />
            <p>美食</p>
          </a>
        </router-link>
        <router-link tag="li" to="/breakfast/all">
          <a href="javascript:;">
            <img
              src="https://cube.elemecdn.com/1/48/bf1a859bf81553bbcfd6cf4ac42cbjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
              alt=""
            />
            <p>早餐</p>
          </a>
        </router-link>
        <router-link tag="li" to="/purchase">
          <a href="javascript:;">
            <img :src="navImg03" alt="" />
            <p>跑腿代购</p>
          </a>
        </router-link>
        <router-link tag="li" to="/hamburger/all">
          <a href="javascript:;">
            <img :src="navImg04" alt="" />
            <p>汉堡披萨</p>
          </a>
        </router-link>
        <router-link tag="li" to="/drink/all">
          <a href="javascript:;">
            <img :src="navImg05" alt="" />
            <p>甜品饮品</p>
          </a>
        </router-link>
        <router-link tag="li" to="/fastfood">
          <a href="javascript:;">
            <img :src="navImg06" alt="" />
            <p>速食简餐</p>
          </a>
        </router-link>
        <router-link tag="li" to="/snake">
          <a href="javascript:;">
            <img :src="navImg07" alt="" />
            <p>地方小吃</p>
          </a>
        </router-link>
        <li>
          <a href="javascript:;">
            <img :src="navImg08" alt="" />
            <p>米粉面馆</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img :src="navImg09" alt="" />
            <p>包子粥店</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img :src="navImg10" alt="" />
            <p>炸鸡炸串</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 头部导航栏end -->
    <!-- 广告层start -->
    <div class="home_banner" v-show="flag">
      <div class="banner_top" @click="$router.push('/quality/all')">
        <div class="bt_left">
          <ul>
            <li>
              <a href="javascript:;">品质套餐</a>
            </li>
            <li>
              <a href="javascript:;">配搭齐全吃的好</a>
            </li>
            <li>
              <a href="javascript:;">
                立即抢购
                <span>></span>
              </a>
            </li>
          </ul>
        </div>
        <div class="bt_right">
          <img :src="bannerImg01" alt="" />
        </div>
      </div>
      <div class="banner_bottom" @click="$router.push('/member')">
        <div class="bb_left">
          <a href="javascript:;">
            <img :src="bannerImg02" alt="" />
            <p><span>超级会员</span>•每月享12元红包</p>
          </a>
        </div>
        <div class="bb_right">立即开通<span>></span></div>
      </div>
    </div>
    <!-- 广告层end -->
    <!-- 商家层列表start -->
    <div class="home_store">
      <div class="store_title" v-show="flag">
        <span class="st_left"></span>
        <div class="st_content">推荐商家</div>
        <span class="st_right"></span>
      </div>
      <div class="store_nav">
        <ul>
          <li @click="changesort">
            综合排序
            <span class="sn_sort">
              <span class="iconfont icon-paixu"></span>
            </span>
          </li>
          <li>距离最近</li>
          <li>销量最高</li>
          <li @click="flag = !flag">
            筛选
            <span class="iconfont icon-shaixuan"></span>
          </li>
        </ul>
      </div>
      <div class="gruel-list">
        <ul v-if="$store.state.login.lists.length > 0">
          <router-link to="/rice" tag="li">
            <div class="list-left">
              <img
                src="https://cube.elemecdn.com/c/82/d10f7a81457ee5a8b8f072d1e7426jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
                alt=""
              />
            </div>
            <div class="list-right">
              <ul>
                <li>清香源木桶饭(云客轩店)</li>
                <li>
                  <div class="left">
                    <van-rate
                      v-model="value"
                      allow-half
                      void-icon="star"
                      void-color="#eee"
                      readonly
                      size="5px"
                      gutter="5px"
                    />
                    <span class="text-left">{{ value }}</span>
                    <span class="text-left">月售2097单</span>
                  </div>
                  <div class="right">
                    <van-tag type="primary">蜂鸟专送</van-tag>
                  </div>
                </li>
                <li>
                  <div class="left">￥10起送|免配送费</div>
                  <div class="right">1.59km|30分钟</div>
                </li>
                <li>
                  <div class="left">
                    <van-tag type="danger">减</van-tag>
                    满20元减10元,满50元减25元
                  </div>
                  <div class="right">
                    4个活动
                    <span class="iconfont icon-sanjiaoxing1"></span>
                  </div>
                </li>
                <li>
                  <van-tag type="success">减</van-tag>
                  配送费立减3元
                </li>
              </ul>
            </div>
          </router-link>
          <router-link to="/rice" tag="li">
            <div class="list-left">
              <img
                src="https://cube.elemecdn.com/c/82/d10f7a81457ee5a8b8f072d1e7426jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
                alt=""
              />
            </div>
            <div class="list-right">
              <ul>
                <li>清香源木桶饭(云客轩店)</li>
                <li>
                  <div class="left">
                    <van-rate
                      v-model="value"
                      allow-half
                      void-icon="star"
                      void-color="#eee"
                      readonly
                      size="5px"
                      gutter="5px"
                    />
                    <span class="text-left">{{ value }}</span>
                    <span class="text-left">月售2097单</span>
                  </div>
                  <div class="right">
                    <van-tag type="primary">蜂鸟专送</van-tag>
                  </div>
                </li>
                <li>
                  <div class="left">￥10起送|免配送费</div>
                  <div class="right">1.59km|30分钟</div>
                </li>
                <li>
                  <div class="left">
                    <van-tag type="danger">减</van-tag>
                    满20元减10元,满50元减25元
                  </div>
                  <div class="right">
                    4个活动
                    <span class="iconfont icon-sanjiaoxing1"></span>
                  </div>
                </li>
                <li>
                  <van-tag type="success">减</van-tag>
                  配送费立减3元
                </li>
              </ul>
            </div>
          </router-link>
          <router-link to="/rice" tag="li">
            <div class="list-left">
              <img
                src="https://cube.elemecdn.com/c/82/d10f7a81457ee5a8b8f072d1e7426jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
                alt=""
              />
            </div>
            <div class="list-right">
              <ul>
                <li>清香源木桶饭(云客轩店)</li>
                <li>
                  <div class="left">
                    <van-rate
                      v-model="value"
                      allow-half
                      void-icon="star"
                      void-color="#eee"
                      readonly
                      size="5px"
                      gutter="5px"
                    />
                    <span class="text-left">{{ value }}</span>
                    <span class="text-left">月售2097单</span>
                  </div>
                  <div class="right">
                    <van-tag type="primary">蜂鸟专送</van-tag>
                  </div>
                </li>
                <li>
                  <div class="left">￥10起送|免配送费</div>
                  <div class="right">1.59km|30分钟</div>
                </li>
                <li>
                  <div class="left">
                    <van-tag type="danger">减</van-tag>
                    满20元减10元,满50元减25元
                  </div>
                  <div class="right">
                    4个活动
                    <span class="iconfont icon-sanjiaoxing1"></span>
                  </div>
                </li>
                <li>
                  <van-tag type="success">减</van-tag>
                  配送费立减3元
                </li>
              </ul>
            </div>
          </router-link>
          <router-link to="/rice" tag="li">
            <div class="list-left">
              <img
                src="https://cube.elemecdn.com/c/82/d10f7a81457ee5a8b8f072d1e7426jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
                alt=""
              />
            </div>
            <div class="list-right">
              <ul>
                <li>清香源木桶饭(云客轩店)</li>
                <li>
                  <div class="left">
                    <van-rate
                      v-model="value"
                      allow-half
                      void-icon="star"
                      void-color="#eee"
                      readonly
                      size="5px"
                      gutter="5px"
                    />
                    <span class="text-left">{{ value }}</span>
                    <span class="text-left">月售2097单</span>
                  </div>
                  <div class="right">
                    <van-tag type="primary">蜂鸟专送</van-tag>
                  </div>
                </li>
                <li>
                  <div class="left">￥10起送|免配送费</div>
                  <div class="right">1.59km|30分钟</div>
                </li>
                <li>
                  <div class="left">
                    <van-tag type="danger">减</van-tag>
                    满20元减10元,满50元减25元
                  </div>
                  <div class="right">
                    4个活动
                    <span class="iconfont icon-sanjiaoxing1"></span>
                  </div>
                </li>
                <li>
                  <van-tag type="success">减</van-tag>
                  配送费立减3元
                </li>
              </ul>
            </div>
          </router-link>
        </ul>
        <div class="login-list" v-if="$store.state.login.lists.length == 0">
          <img :src="fail" alt="" />
          <p>没有结果</p>
          <span>登录后查看更多商家</span>
          <button type="primary" @click="$router.push('/register')">
            登录
          </button>
        </div>
      </div>
      <!-- 筛选弹出内容 -->
    </div>
    <!-- 商家层列表end -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navImg01: require("../assets/image/home/nav01.png"),
      navImg02: require("../assets/image/home/nav02.png"),
      navImg03: require("../assets/image/home/nav03.png"),
      navImg04: require("../assets/image/home/nav04.png"),
      navImg05: require("../assets/image/home/nav05.png"),
      navImg06: require("../assets/image/home/nav06.png"),
      navImg07: require("../assets/image/home/nav07.png"),
      navImg08: require("../assets/image/home/nav08.png"),
      navImg09: require("../assets/image/home/nav09.png"),
      navImg10: require("../assets/image/home/nav10.png"),
      bannerImg01: require("../assets/image/home/banner01.png"),
      bannerImg02: require("../assets/image/home/banner02.png"),
      fail: require("../assets/image/home/fail.png"),
      value: 4.4,
      address: "",
      flag: true
    };
  },
  methods: {
    getSearch() {
      this.$router.push("/search");
    },
    changesort() {
      this.flag = !this.flag;
    }
  },
  created() {
    let data = this.$store.state.address.lists.find(item => item.isDefault);
    if (data) {
      this.address = data;
    }
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
// 头部搜索框样式start
.home_header {
  width: 100%;
  height: 110px;
  max-width: 436px;
  min-width: 320px;
  background-color: #0096ff;
  overflow: hidden;
  margin: 0 auto;
  .header_position {
    width: 244px;
    height: 24px;
    margin-top: 20px;
    margin-left: 15px;
    margin-bottom: 10px;
    position: relative;
    .icon_location {
      height: 24px;
      text-align: center;
      line-height: 35px;
      float: left;
      color: white;
      font-size: 18px;
      // background-color: green;
    }
    .position_content {
      width: 60%;
      height: 24px;
      text-align: center;
      line-height: 30px;
      float: left;
      color: white;
      font-size: 18px;
      font-weight: bolder;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .icon_arrowDown {
      float: left;
      height: 5px;
      text-align: center;
      line-height: 25px;
      color: white;
      font-size: 5px;
      // margin-left: 2px;
      // background-color: green;
    }
  }
  .header-search {
    width: 90%;
    height: 42px;
    margin: 0 auto;
    margin-bottom: 10px;
    position: relative;
    input {
      width: 100%;
      height: 42px;
      outline: none;
      border-radius: 20px;
      border: none;
      color: #999999;
      font-size: 14px;
      text-align: center;
    }
    .icon_search {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 60px;
      top: 50%;
      margin-top: -14px;
      color: #999999;
    }
  }
}
// 头部搜索框样式end

// 头部导航栏start
a,
a:hover,
a:focus {
  color: #878787;
  text-decoration: none;
}
.home-nav {
  width: 100%;
  height: 200px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 5px auto;
  & > ul {
    width: 90%;
    max-width: 392.4px;
    height: 100%;
    margin: 0 auto;
    list-style: none;
    & > li {
      width: 18%;
      height: 90px;
      float: left;
      margin-left: 2.5%;
      & > a {
        display: block;
        width: 100%;
        height: 100px;
        text-align: center;
        & > img {
          width: 100%;
          height: 55px;
        }
        & > p {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
    & > li:first-child {
      margin-left: 0;
    }
    & > li:nth-child(6) {
      margin-left: 0;
    }
  }
}
// 头部导航栏end

// 广告层样式start
.home_banner {
  width: 100%;
  height: 182px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  // border: 1px solid #000;
  margin: 0 auto;
  .banner_top {
    width: 100%;
    max-width: 412px;
    height: 128px;
    margin-bottom: 5px;
    background-color: #fff;
    .bt_left {
      width: 50%;
      height: 100%;
      float: left;
      & > ul {
        width: 100%;
        height: 100%;
        & > li {
          height: 20%;
          padding-left: 10px;
          box-sizing: border-box;
          & > a {
            color: #999999;
            & > span {
              color: #af8260;
            }
          }
          &:first-child > a {
            font-size: 20px;
            color: black;
            font-weight: bold;
          }
          &:nth-child(2) > a {
            font-size: 14px;
          }
          &:last-child > a {
            color: #af8260;
            font-size: 13px;
            font-weight: bold;
          }
        }
      }
    }
    .bt_right {
      width: 50%;
      height: 100%;
      float: left;
      line-height: 128px;
      & > img {
        display: inline-block;
        width: 100%;
      }
    }
  }
  .banner_bottom {
    width: 100%;
    max-width: 412px;
    height: 45px;
    background-color: #fcebbb;
    .bb_left {
      float: left;
      line-height: 45px;
      & > a {
        display: block;
        img {
          width: 9%;
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
          margin-left: 5px;
        }
        p {
          line-height: 45px;
          display: inline-block;
          // margin-top: 3px;
          font-size: 14px;
          color: #644f1b;
          span {
            display: inline-block;
            font-size: 18px;
            color: #644f1b;
            font-weight: bold;
          }
        }
      }
    }
    .bb_right {
      float: right;
      line-height: 45px;
      color: #644f1b;
      font-size: 14px;
      margin-right: 10px;
      span {
        color: #644f1b;
      }
    }
  }
}
// 广告层样式end

// 商家列表层样式start
.home_store {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 10px auto;
  margin-bottom: 70px;
  .store_title {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    height: 30px;
    // border: 1px solid #000;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    span {
      display: inline-block;
      width: 25px;
      height: 1.5px;
      background-color: #d7d7d7;
    }
    .st_left {
      margin-right: 10px;
      margin-bottom: 5px;
    }
    .st_content {
      display: inline-block;
      font-size: 16px;
    }
    .st_right {
      margin-left: 10px;
      margin-bottom: 5px;
    }
  }
  .store_nav {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    margin: 5px auto;
    & > ul {
      width: 100%;
      list-style: none;
      display: flex;
      & > li {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999999;
        & > span {
          font-size: 10px;
        }
      }
    }
  }
  .gruel-list {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    margin: 0px auto;
    overflow: hidden;
    & > ul {
      width: 100%;
      list-style: none;
      & > li {
        width: 100%;
        height: 200px;
        display: flex;
        background-color: #fff;
        .list-left {
          width: 70px;
          & > img {
            display: inline-block;
            width: 50px;
            margin-top: 10px;
            margin-left: 10px;
          }
        }
        .list-right {
          flex: auto;
          & > ul {
            height: 200px;
            width: 100%;
            & > li {
              height: 40px;
              line-height: 40px;
              &:first-child {
                font-size: 16px;
                font-weight: bold;
                color: #333;
              }
              .left {
                float: left;
                .text-left {
                  margin-left: 6px;
                }
              }
              .right {
                float: right;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
    .login-list {
      text-align: center;
      & > img {
        display: inline-block;
        width: 200px;
        // border: 1px solid #000;
      }
      & > p {
        font-size: 16px;
      }
      & > span {
        display: inline-block;
        padding: 4px 0px;
        color: #999;
      }
      & > button {
        border: 0;
        outline: none;
        width: 140px;
        height: 40px;
        display: block;
        margin-left: 115px;
        background-color: #07c160;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
      }
    }
  }
}
// 商家列表层样式end
</style>

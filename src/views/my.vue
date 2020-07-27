<template>
  <div>
    <!-- 我的页面头部start -->
    <div class="my_header">
      <div class="mh_top">
        <div class="mht_left">
          <div class="mhtl_avatar">
            <img :src="avatar" alt="" />
          </div>
          <div class="mhtl_name">
            <ul v-for="(obj, index) in $store.state.login.lists" :key="index">
              <li>{{ obj.username }}<span @click="del(index)">退出</span></li>
              <li>
                <div class="mhtln_phone">
                  <span class="iconfont icon-shouji"></span>
                </div>
                {{ obj.tel }}
              </li>
            </ul>
            <ul v-if="$store.state.login.lists == ''">
              <li>
                <router-link tag="span" to="/login">登录</router-link>
                /
                <router-link tag="span" to="/register">注册</router-link>
              </li>
              <li>
                <div class="mhtln_phone">
                  <span class="iconfont icon-shouji"></span>
                </div>
                登录后享受更多特权
              </li>
            </ul>
          </div>
        </div>
        <div class="mht_right">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="mh_bottom">
        <div class="mhb_left">
          <ul>
            <li v-if="$store.state.login.lists == ''">
              <span class="iconfont icon-hongbao"></span>
            </li>
            <li v-else><span>0</span>个</li>
            <li>红包</li>
          </ul>
        </div>
        <div class="mhb_right">
          <ul>
            <li v-if="$store.state.login.lists == ''">
              <span class="iconfont icon-jinbi"></span>
            </li>
            <li v-else @click="$router.push('/gold')"><span>10</span>个</li>
            <li>金币</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 我的页面头部end -->

    <!-- 我的页面内容start -->
    <div class="my_content">
      <div class="mc_top">
        <ul>
          <li @click="address">
            <div class="mct_left">
              <span class="mctl_adress">
                <span class="iconfont icon-dizhi"></span>
              </span>
              <span class="mctl_content">我的地址</span>
            </div>
            <div class="mct_right">
              <van-icon name="arrow" />
            </div>
          </li>
        </ul>
      </div>
      <div class="mc_middel">
        <ul>
          <li @click="$router.push('/gold')">
            <div class="mcm_left">
              <span class="mcml_store">
                <span class="iconfont icon-shangcheng"></span>
              </span>
              <span class="mcml_content">金币商城</span>
            </div>
            <div class="mcm_right">
              <van-icon name="arrow" />
            </div>
          </li>
          <li @click="showShare = true">
            <div class="mcm_left">
              <span class="mcml_gift">
                <span class="iconfont icon-liwu"></span>
              </span>
              <span class="mcml_content">分享拿20元现金</span>
            </div>
            <div class="mcm_right">
              <van-icon name="arrow" />
            </div>
          </li>
        </ul>
      </div>
      <div class="mc_bottom">
        <ul>
          <li @click="$router.push('/customer')">
            <div class="mcb_left">
              <span class="mcbl_kefu">
                <span class="iconfont icon-kefu"></span>
              </span>
              <span class="mcbl_content">我的客服</span>
            </div>
            <div class="mcb_right">
              <van-icon name="arrow" />
            </div>
          </li>
          <li>
            <div class="mcb_left">
              <span class="mcbl_app">
                <span class="iconfont icon-elema1"></span>
              </span>
              <span class="mcbl_content">下载饿了吗app</span>
            </div>
            <div class="mcb_right">
              <van-icon name="arrow" />
            </div>
          </li>
          <li @click="$router.push('/serve')">
            <div class="mcb_left">
              <span class="mcbl_rule">
                <span class="iconfont icon-guize"></span>
              </span>
              <span class="mcbl_content">规则中心</span>
            </div>
            <div class="mcb_right">
              <van-icon name="arrow" />
            </div>
          </li>
          <li><span @click="$router.push('/serve')">隐私政策</span></li>
        </ul>
      </div>
    </div>
    <!-- 我的页面内容end -->

    <!-- 分享面板 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      avatar: require("../assets/image/my/avatar.png"),
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" }
      ]
    };
  },
  methods: {
    address() {
      if (this.$store.state.login.lists.length > 0) {
        if (this.$store.state.address.lists.length == 0) {
          this.$router.push("/add");
        } else {
          this.$router.push("/address");
        }
      } else {
        Toast.fail("请您先登录账号才能选择地址");
      }
    },
    del(index) {
      this.$store.state.login.lists.splice(index, 1);
    },
    onSelect(option) {
      console.log(option);
      Toast("分享成功");
      this.showShare = false;
    }
  }
};
</script>

<style lang="scss" scoped>
// 我的页面头部样式start
.my_header {
  width: 100%;
  height: 210px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  .mh_top {
    width: 100%;
    height: 118px;
    background-color: #0097ff;
    .mht_left {
      width: 90%;
      height: 118px;
      float: left;
      .mhtl_avatar {
        width: 68px;
        margin-left: 20px;
        text-align: center;
        line-height: 176px;
        float: left;
        img {
          display: inline-block;
          width: 68px;
          border-radius: 50%;
        }
      }
      .mhtl_name {
        height: 118px;
        float: left;
        margin-left: 20px;
        margin-top: 30px;
        & > ul {
          height: 118px;
          & > li {
            height: 30px;
            color: white;
            font-size: 12px;
            line-height: 30px;
            & > span {
              margin-left: 5px;
            }
            .mhtln_phone {
              float: left;
            }
            &:first-child {
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
      }
    }
    .mht_right {
      float: right;
      width: 10%;
      height: 118px;
      text-align: center;
      line-height: 118px;
      color: white;
    }
  }
  .mh_bottom {
    width: 100%;
    height: 92px;
    background-color: #fff;
    .mhb_left {
      width: 50%;
      height: 92px;
      float: left;
      & > ul {
        width: 100%;
        // height: 92px;
        margin-top: 20px;
        & > li {
          width: 100%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          font-size: 14px;
          color: #666666;
          & > span {
            font-size: 24px;
            font-weight: bolder;
          }
          &:first-child {
            color: #ff5f3e;
          }
        }
      }
    }
    .mhb_right {
      width: 50%;
      height: 92px;
      float: left;
      border-left: 1px solid #f0f0f0;
      box-sizing: border-box;
      & > ul {
        width: 100%;
        // height: 92px;
        margin-top: 20px;
        & > li {
          width: 100%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          font-size: 14px;
          color: #666666;
          & > span {
            font-size: 24px;
            font-weight: bolder;
          }
          &:first-child {
            color: #f5de19;
          }
        }
      }
    }
  }
}
// 我的页面头部样式end

// 我的页面内容样式start
.my_content {
  width: 100%;
  height: 356px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 10px;
  .mc_top {
    width: 100%;
    height: 48px;
    background-color: #fff;
    & > ul {
      width: 100%;
      height: 48px;
      & > li {
        width: 100%;
        height: 48px;
        line-height: 38px;
        .mct_left {
          float: left;
          margin-left: 10px;
          .mctl_adress {
            display: inline-block;
            color: #4aa5f0;
          }
          .mctl_content {
            display: inline-block;
            margin-top: 6px;
            margin-left: 10px;
          }
        }
        .mct_right {
          float: right;
          line-height: 48px;
          margin-right: 10px;
        }
      }
    }
  }
  .mc_middel {
    width: 100%;
    height: 96px;
    background-color: #fff;
    margin-top: 10px;
    & > ul {
      width: 100%;
      height: 48px;
      & > li {
        width: 100%;
        height: 48px;
        line-height: 38px;
        .mcm_left {
          float: left;
          margin-left: 10px;
          .mcml_store {
            display: inline-block;
            color: #94d94a;
          }
          .mcml_gift {
            color: #fc7b53;
            display: inline-block;
          }
          .mcml_content {
            display: inline-block;
            margin-top: 6px;
            margin-left: 10px;
          }
        }
        .mcm_right {
          float: right;
          line-height: 48px;
          margin-right: 10px;
        }
      }
    }
  }
  .mc_bottom {
    width: 100%;
    height: 192px;
    background-color: #fff;
    margin-top: 10px;
    & > ul {
      width: 100%;
      height: 48px;
      & > li {
        width: 100%;
        height: 48px;
        line-height: 38px;
        .mcb_left {
          float: left;
          margin-left: 10px;
          .mcbl_kefu {
            display: inline-block;
            color: #4aa5f0;
          }
          .mcbl_content {
            display: inline-block;
            margin-top: 6px;
            margin-left: 10px;
          }
          .mcbl_app {
            display: inline-block;
            color: #4aa5f0;
          }
          .mcbl_rule {
            display: inline-block;
            color: #4aa5f0;
          }
        }
        .mcb_right {
          float: right;
          line-height: 48px;
          margin-right: 10px;
        }
        &:last-child {
          background-color: #f5f5f5;
          text-align: center;
          line-height: 48px;
          color: #66b2f1;
        }
      }
    }
  }
}
// 我的页面内容样式end
</style>

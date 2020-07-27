<template>
  <div>
    <div class="customer-header" v-show="flag">
      <div class="text-left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div class="text-title">
        我的客服
      </div>
    </div>
    <div class="customer">
      <div class="news">
        <van-notice-bar mode="closeable" @close="flag = true">
          受恶劣天气影响配送延迟通知
        </van-notice-bar>
      </div>
      <div class="header">
        <img
          src="https://ecs.elemecdn.com/4/1e/f919b986e01173b3d8746b688e9fbpng.png"
          alt=""
          class="dog"
        />
        <p>您好,客服小e很高兴为您服务!</p>
      </div>
      <div class="content">
        <h3>常见问题</h3>
        <ul>
          <li>
            <div class="left">
              <p>退单问题</p>
              <van-icon name="arrow" />
            </div>
            <div class="right">
              <div class="top">
                【申请客服介入】进度查询
              </div>
              <div class="bottom">
                商家拒绝退单怎么办？
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <p>催单问题</p>
              <van-icon name="arrow" />
            </div>
            <div class="right">
              <div class="top">
                我的订单超时了怎么办？
              </div>
              <div class="bottom">
                订单一直没有骑士接单怎么办？
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <p>订单变更</p>
              <van-icon name="arrow" />
            </div>
            <div class="right">
              <div class="top">
                下单后怎么更改联系电话？
              </div>
              <div class="bottom">
                订单忘记备注了怎么办
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <p>活动问题</p>
              <van-icon name="arrow" />
            </div>
            <div class="right">
              <div class="top">
                我的红包为什么用不了？
              </div>
              <div class="bottom">
                我是新用户吗？
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <p>投诉反馈</p>
              <van-icon name="arrow" />
            </div>
            <div class="right">
              <div class="top">
                错送漏送餐品怎么办？
              </div>
              <div class="bottom">
                食无忧理赔相关
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <span class="line-fl"></span>
        <p class="fl">
          <span class="iconfont icon-dianhua"></span>
          <span class="text">客服电话:</span>
          <span class="tel">10105757</span>
        </p>
        <span class="line-fr"></span>
      </div>
    </div>
    <div class="customer-footer">
      <button @click="$router.push('/chat')">在线客服</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
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
.customer-header {
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
.header {
  width: 100%;
  height: 120px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  background: url("http://shadow.elemecdn.com/faas/service-front/static/media/bg.c8e3f1ab.png")
    no-repeat;
  .dog {
    float: left;
    width: 48px;
    margin-left: 29px;
    margin-top: 16px;
    margin-bottom: 24px;
  }
  & > p {
    float: left;
    width: 275px;
    height: 32px;
    background-color: rgba(51, 51, 51, 0.15);
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 32px;
    margin-top: 24px;
    margin-left: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
}
.content {
  width: 360px;
  // height: 120px;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  top: -30px;
  background-color: #fff;
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
  }
  & > ul {
    width: 100%;
    li {
      height: 90px;
      position: relative;
      text-align: left;
      border-bottom: 1px solid #f0f0f0;
      box-sizing: border-box;
      .left {
        float: left;
        width: 90px;
        p {
          height: 60px;
          line-height: 60px;
          text-align: center;
          font-size: 12px;
          border-right: 1px solid #f0f0f0;
          box-sizing: border-box;
          margin-top: 15px;
        }
        .van-icon {
          position: absolute;
          top: 38px;
          left: 70px;
        }
      }
      .right {
        float: left;
        .top {
          height: 45px;
          font-size: 16px;
          margin-left: 10px;
          // text-align: left;
          line-height: 45px;
          border-bottom: 1px solid #f0f0f0;
          box-sizing: border-box;
          text-indent: 16px;
        }
        .bottom {
          height: 45px;
          font-size: 16px;
          margin-left: 10px;
          // text-align: left;
          line-height: 45px;
          text-indent: 16px;
        }
      }
    }
  }
}
.footer {
  width: 100%;
  height: 30px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  line-height: 30px;
  margin-bottom: 40px;
  span {
    display: inline-block;
  }
  .line-fl {
    width: 80px;
    height: 1px;
    background-color: #ccc;
    margin-top: 20px;
    float: left;
    margin-left: 10px;
  }
  .line-fr {
    width: 80px;
    height: 1px;
    background-color: #ccc;
    margin-top: 20px;
    float: right;
    margin-right: 10px;
  }
  p {
    margin-left: 30px;
    .text {
      margin-left: 5px;
    }
    .tel {
      margin-left: 5px;
      color: #3c8af6;
    }
  }
}
.customer-footer {
  height: 60px;
  background-color: #fff;
  overflow: hidden;
  // padding: 8px 12px;
  box-shadow: 1px 0px 1px 1px #f0f0f0;
  & > button {
    display: block;
    width: 95%;
    height: 44px;
    line-height: 44px;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #2396ff;
    outline: none;
    border: none;
    margin: 0 auto;
    margin-top: 8px;
    font-weight: bold;
    letter-spacing: 8px;
  }
}
</style>

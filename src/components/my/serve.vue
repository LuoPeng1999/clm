<template>
  <div>
    <!-- 头部返回栏 -->
    <div class="register-header">
      <div class="text-left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div class="text-title">政策条款</div>
    </div>
    <h3>馋了么隐私权政策</h3>
    <p>生效日期:<span>2020年3月9日</span></p>
    <h6>提示条款</h6>
    <ul>
      <li>
        您的信任对我们非常重要，我们深知个人信息对您的重要性，我们将按法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全可控。鉴此，馋了么服务提供者（或简称“我们”）制定本《馋了么隐私权政策》（下称“本政策
        /本隐私权政策”）并提醒您：
      </li>
      <li>
        <span>本政策适用于馋了么提供的产品或服务。</span
        ><b
          ><u
            >如我们及关联公司产品或服务中使用了馋了么提供的产品或服务（例如使用馋了么平台账户登录）但未设独立法律声明及隐私权政策的，则本政策同样适用于该部分产品或服务。</u
          ></b
        >
      </li>
      <li>
        <span>需要特别说明的是，</span
        ><b
          ><u
            >本政策不适用于其他第三方向您提供的服务，第三方向您提供的服务适用其向您说明的隐私权政策，也不适用于馋了么中另行独立设置隐私权政策的产品或服务。</u
          ></b
        >
      </li>
      <li>
        <b
          >本政策与您使用我们的服务关系紧密，我们建议您仔细阅读并理解本政策全部内容，在确认充分理解并同意后再开始使用。我们努力用通俗易懂、简明扼要的文字表达，并对本政策中与您的权益存在重大关系的条款，采用粗体字进行标注以提示您注意。</b
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.vanTabbar = false;
  },
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
// 头部返回栏样式
.register-header {
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
h3 {
  width: 80%;
  display: block;
  font-size: 20px;
  margin: 10px auto;
  text-align: center;
  margin-top: 50px;
}
p {
  font-size: 14px;
  position: absolute;
  right: 0;
  margin-right: 20px;
  & > span {
    margin-left: 5px;
  }
}
h6 {
  margin-top: 60px;
  font-size: 16px;
  margin-left: 10px;
  font-weight: normal;
}
ul {
  margin-left: 10px;
  font-size: 16px;
  line-height: 2;
  margin-bottom: 50px;
  margin-right: 10px;
}
</style>

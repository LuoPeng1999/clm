<template>
  <div>
    <!-- 广告页advertpage.vue -->
    <div class="advertpage">
      <h1>
        剩余<font @click="goHome">{{ num }}点击跳过</font>
      </h1>
      <img :src="adimg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 4,
      cleardata: null,
      adimg: require("../../assets/image/ad/adtwo.png")
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home"); //跳转首页
    }
  },
  created() {
    // 倒计时
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        // 跳转首页
        this.$router.push("/home"); //跳转首页
      } else {
        this.num--;
      }
    }, 1000);

    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
    // 当路由器切换时候，关闭定时器
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss" scoped>
.advertpage {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 667px;
  }
  h1 {
    position: absolute;
    top: 20px;
    right: 10px;
    color: #333;
    font-size: 12px;
  }
}
</style>

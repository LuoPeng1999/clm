<template>
  <div id="app">
    <!-- 底部导航start -->
    <van-tabbar
      v-model="$store.state.active"
      v-show="$store.state.vanTabbar"
      z-index="999"
    >
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/member" icon="diamond-o">会员</van-tabbar-item>
      <van-tabbar-item to="/orderform" icon="shopping-cart-o"
        >订单</van-tabbar-item
      >
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航end -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f5f5f5;
}
</style>

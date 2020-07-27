<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-tabs v-model="$store.state.active" color="#018CFF">
      <van-tab title="帮我买">
        <purchasenav></purchasenav>
      </van-tab>
      <van-tab title="取送件">
        <pickup></pickup>
      </van-tab>
      <van-tab title="网红店">
        <celebrities></celebrities>
      </van-tab>
    </van-tabs>
    <!-- 顶部导航栏结束 -->
  </div>
</template>

<script>
import purchasenav from "../../components/purchase/nav";
import celebrities from "../../components/purchase/celebrities";
import pickup from "../../components/purchase/pickup";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    purchasenav,
    celebrities,
    pickup
  }
};
</script>

<style lang="scss" scoped></style>

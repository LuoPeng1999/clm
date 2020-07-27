<template>
  <div>
    <div class="cele-header">
      附近优选
    </div>
    <div class="cele-nav">
      <van-tabs v-model="active" background="#F7F7F7" color="#018CFF">
        <van-tab title="全部">
          <all></all>
        </van-tab>
        <van-tab title="网红饮品">
          <delifood></delifood>
        </van-tab>
        <van-tab title="热销美食">
          <drink></drink>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import all from "./celebrities/all";
import delifood from "./celebrities/delifood";
import drink from "./celebrities/drink";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    all,
    delifood,
    drink
  }
};
</script>

<style lang="scss" scoped>
.cele-header {
  font-size: 18px;
  margin-top: 50px;
  margin-left: 10px;
}
.cele-nav {
  width: 60%;
}
</style>

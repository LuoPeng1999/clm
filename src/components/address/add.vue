<template>
  <div>
    <div class="add-header">
      <div class="text-left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div class="text-title">
        添加地址
      </div>
    </div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
// 引入地址
import areaList from "./erea";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onSave({ name, tel, province, city, county, areaCode, addressDetail }) {
      this.$store.commit("address/add", {
        name,
        tel,
        address: province + city + county + addressDetail,
        province,
        city,
        county,
        areaCode,
        addressDetail
      });
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.state.vanTabbar = false;
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/my") {
      this.$store.state.vanTabbar = true;
    }
    next();
  }
};
</script>

<style lang="scss" scoped>
.add-header {
  width: 100%;
  height: 50px;
  max-width: 436px;
  min-width: 320px;
  background-color: #ee0a24;
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
</style>

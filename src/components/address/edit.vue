<template>
  <div>
    <div class="edit-header">
      <div class="text-left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div class="text-title">
        修改地址
      </div>
    </div>

    <van-address-edit
      :area-list="areaList"
      show-search-result
      :search-result="searchResult"
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import areaList from "./erea";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {}
    };
  },
  methods: {
    onSave({ name, tel, province, city, county, areaCode, addressDetail }) {
      let id = this.$route.query.id;
      this.$store.commit("address/edit", {
        id,
        name,
        tel,
        address: province + county + addressDetail,
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
    let id = this.$route.query.id;
    this.addressInfo = this.$store.state.address.lists.find(
      item => item.id == id
    );
    this.$store.state.vanTabbar = false;
  }
};
</script>

<style lang="scss" scoped>
.edit-header {
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

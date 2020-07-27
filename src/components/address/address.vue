<template>
  <div>
    <div class="address-header">
      <div class="text-left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div class="text-title">
        添加地址
      </div>
    </div>

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/add");
    },
    onEdit(item) {
      this.$router.push({ path: "/edit", query: { id: item.id } });
    },
    onSelect(item) {
      this.$storestore.commit("address/editId", item.id);
      this.$router.go(-1);
    }
  },
  created() {
    this.list = this.$store.state.address.lists || [];
    try {
      this.chosenAddressId = this.list.find(item => item.isDefault).id;
    } catch (error) {
      Toast("没有地址数据");
    }

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
.address-header {
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

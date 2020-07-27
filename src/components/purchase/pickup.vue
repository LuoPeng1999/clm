<template>
  <div>
    <!-- 地图 -->
    <!-- <doc-preview> -->
      <baidu-map :center="{ lng: 116.403765, lat: 39.91485 }" :zoom="11">
        <bm-view class="map"></bm-view>
        <bm-control :offset="{ width: '20px', height: '10px' }">
          <bm-auto-complete v-model="keyword" :sugStyle="{ zIndex: 1 }">
            <!-- <search-field placeholder="请输入地名关键字"></search-field> 这里指代一个自定义搜索框组件 -->
          </bm-auto-complete>
        </bm-control>
        <bm-local-search
          :keyword="keyword"
          :auto-viewport="true"
        ></bm-local-search>

      </baidu-map>
    <!-- </doc-preview> -->
    
    <!-- 地址信息 -->
    <div class="address">
      <van-cell-group>
        <van-field v-model="name" label="姓名" placeholder="请输入您的姓名" />
        <van-field v-model="tel" label="电话" placeholder="请输入您的电话" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tel: "",
      keyword: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 600px;
}
.address {
  position: fixed;
  width: 80%;
  height: 60px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  left: 36px;
  bottom: 105px;
}
</style>

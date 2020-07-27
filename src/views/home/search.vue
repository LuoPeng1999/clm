<template>
  <div>
    <van-row class="topsearchNav">
      <van-col span="3" @click="$router.go(-1)"
        ><van-icon name="arrow-left" class="icon-goback"
      /></van-col>
      <van-col span="18">
        <van-search
          placeholder="搜索商品名称"
          @search="addSearchList"
          v-model="value"
        />
      </van-col>
      <van-col span="3"><span class="iconfont icon-chaxun"></span></van-col>
    </van-row>
    <div class="search_history">
      <ul>
        <li>
          <h1>历史搜索</h1>
          <span class="iconfont icon-lajitong"></span>
        </li>
        <li>
          <button
            v-for="(val, index) in $store.state.search.lists"
            :key="index"
          >
            {{ val }}
          </button>
        </li>
      </ul>
    </div>
    <div class="search_hot">
      <ul>
        <li><h1>热门搜索</h1></li>
        <li>
          <button>奶茶</button>
          <button>烧烤</button>
          <button>炸鸡</button>
          <button>鸡排</button>
          <button>凉皮</button>
        </li>
        <li>
          <button>水煮</button>
          <button>小龙虾</button>
          <button>木桶饭</button>
          <button>螺蛳粉</button>
        </li>
        <li>
          <button>重庆小面</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    addSearchList(val) {
      console.log(val);
      this.$store.commit("search/add", val);
    }
  },
  created() {
    this.$store.state.vanTabbar = false;
  },
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
.topsearchNav {
  background-color: #f2f2f2;
  .icon-goback {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    color: #4e4e4e;
  }
  .van-search {
    padding: 0px;
    margin: 5px;
    background-color: #fff;
  }
  .van-search__content {
    background-color: #fff;
  }
  .icon-chaxun {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    color: #4e4e4e;
  }
}
.search_history {
  width: 100%;
  height: 110px;
  max-width: 436px;
  min-width: 320px;
  // background-color: #0096ff;
  overflow: hidden;
  margin: 0 auto;
  ul {
    height: 110px;
    li {
      height: 55px;
      // line-height: 45px;
      // border: 1px solid #000;
      // box-sizing: border-box;
      h1 {
        // display: inline-block;
        font-size: 18px;
        color: #333;
        margin-left: 10px;
        margin-top: 10px;
        float: left;
      }
      span {
        float: right;
        margin-top: 10px;
        margin-right: 10px;
      }
      button {
        // width: 60px;
        padding: 0 15px;
        height: 35px;
        font-size: 16px;
        line-height: 35px;
        outline: none;
        border: none;
        background-color: #f0f0f0;
        margin-right: 20px;
        display: inline-block;
        margin-top: 10px;
        &:first-child {
          margin-left: 10px;
        }
      }
    }
  }
}
.search_hot {
  width: 100%;
  // height: 110px;
  max-width: 436px;
  min-width: 320px;
  // background-color: #0096ff;
  overflow: hidden;
  margin: 0 auto;
  ul {
    // height: 110px;
    li {
      height: 55px;
      // line-height: 45px;
      // border: 1px solid #000;
      // box-sizing: border-box;
      h1 {
        // display: inline-block;
        font-size: 18px;
        color: #333;
        margin-left: 10px;
        margin-top: 10px;
        float: left;
      }
      span {
        float: right;
        margin-top: 10px;
        margin-right: 10px;
      }
      button {
        // width: 60px;
        padding: 0 10px;
        height: 35px;
        font-size: 16px;
        line-height: 35px;
        outline: none;
        border: none;
        background-color: #f0f0f0;
        margin-right: 10px;
        display: inline-block;
        margin-top: 10px;
        &:first-child {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>

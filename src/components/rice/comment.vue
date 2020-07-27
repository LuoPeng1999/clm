<template>
  <div>
    <div class="comment">
      <ul>
        <li>4.4</li>
        <li>
          <ul class="clearfix">
            <li>商家评分</li>
            <li>
              <van-rate
                allow-half
                size="10"
                gutter="1"
                v-model="value"
                readonly
              />
            </li>
          </ul>
        </li>
        <li>
          <ul class="clearfix">
            <li>味道</li>
            <li>4.4</li>
          </ul>
        </li>
        <li>
          <ul class="clearfix">
            <li>包装</li>
            <li>4.5</li>
          </ul>
        </li>
        <li>
          <ul class="clearfix">
            <li>配送</li>
            <li>4.8</li>
          </ul>
        </li>
      </ul>
    </div>
    姓名:<input type="text" v-model="name" />
    <br />
    内容:<textarea
      name=""
      id=""
      cols="30"
      rows="2"
      v-model="content"
    ></textarea>
    <br />
    评分:<input type="text" v-model="score" />
    <br />
    <button @click="add({ name: name, content: content, score: score })">
      提交
    </button>
    <br />
    <dl>
      <dt>只看有内容评价:</dt>
      <dd v-for="(item, index) in lists" :key="index">
        <ul>
          <li>
            <img :src="avatar" alt="" />
          </li>
          <li>
            <ul>
              <li>{{ item.name }}</li>
              <li>
                <van-rate
                  allow-half
                  size="10"
                  gutter="1"
                  v-model="item.score"
                  readonly
                />
              </li>
              <li>{{ item.content }}</li>
            </ul>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("comment");
export default {
  data() {
    return {
      name: "",
      content: "",
      score: "",
      value: 4.7,
      avatar: require("../../assets/image/my/avatar.png")
    };
  },
  methods: {
    // 第四种写法
    ...mapMutations(["add"])
    // add() {
    //   this.$store.commit("item4/add", {
    //     name: this.name,
    //     content: this.content
    //   });
    // }
  },
  computed: {
    ...mapState({
      lists: state => state.lists
    })
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 30px;
}
dl {
  font-size: 18px;
}
.comment {
  width: 100%;
  height: 80px;
  // max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  overflow: hidden;
  margin: 0 auto;
  & > ul {
    width: 100%;
    height: 80px;
    display: flex;
    & > li {
      flex: 1;
      height: 80px;
      text-align: center;
      line-height: 80px;
      font-size: 12px;
      color: #666666;
      & > ul {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        // display: flex;
        & > li {
          //   flex: 1;
          height: 25px;
          text-align: center;
          line-height: 25px;
          &:last-child {
            font-size: 18px;
          }
        }
      }
    }
    & > li:first-child {
      font-size: 35px;
      color: #ff6000;
    }
    & > li:last-child {
      border-left: 1px solid #f0f0f0;
      box-sizing: border-box;
    }
  }
}
</style>

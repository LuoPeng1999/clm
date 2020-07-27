<template>
  <div>
    <div class="foot-nav">
      <van-row type="flex" justify="space-between">
        <van-col span="6">
          综合排序
          <span class="iconfont icon-paixu"></span>
        </van-col>
        <van-col span="6">
          距离最近
        </van-col>
        <van-col span="6">
          销量最高
        </van-col>
        <van-col span="6">
          筛选
          <span class="iconfont icon-shaixuan"></span>
        </van-col>
      </van-row>
    </div>
    <!-- 商品列表 -->
    <div class="all-list">
      <ul>
        <li>
          <div class="list-left">
            <img
              src="https://cube.elemecdn.com/3/88/a1cc168c2fe8abc32b2501d4d24ecJPEG.JPEG"
              alt=""
            />
          </div>
          <div class="list-right">
            <ul>
              <li>叫了个炸鸡(地税点)</li>
              <li>
                <div class="left">
                  <van-rate
                    v-model="value"
                    allow-half
                    void-icon="star"
                    void-color="#eee"
                    readonly
                    size="5px"
                    gutter="5px"
                  />
                  <span class="text-left">{{ value }}</span>
                  <span class="text-left">月售75单</span>
                </div>
                <div class="right">
                  <van-tag type="primary">蜂鸟专送</van-tag>
                </div>
              </li>
              <li>
                <div class="left">￥10起送|免费配送</div>
                <div class="right">1.07km|30分钟</div>
              </li>
              <li>
                <div class="left">
                  <van-tag type="danger">减</van-tag>
                  满10元减8元,满30元减16元,满60元...
                </div>
                <div class="right">
                  6个活动
                  <span class="iconfont icon-sanjiaoxing1"></span>
                </div>
              </li>
              <li>
                <van-tag type="success">配</van-tag>
                配送费立减1.5元
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- 商品列表end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4.7
    };
  }
};
</script>

<style lang="scss" scoped>
.foot-nav {
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #999;
}
// 商品列表样式
.all-list {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0px auto;
  overflow: hidden;
  & > ul {
    width: 100%;
    list-style: none;
    & > li {
      width: 100%;
      height: 200px;
      display: flex;
      background-color: #fff;
      .list-left {
        width: 70px;
        & > img {
          display: inline-block;
          width: 50px;
          margin-top: 10px;
          margin-left: 10px;
        }
      }
      .list-right {
        flex: auto;
        & > ul {
          height: 200px;
          width: 100%;
          & > li {
            height: 40px;
            line-height: 40px;
            &:first-child {
              font-size: 16px;
              font-weight: bold;
              color: #333;
            }
            .left {
              float: left;
              .text-left {
                margin-left: 6px;
              }
            }
            .right {
              float: right;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>

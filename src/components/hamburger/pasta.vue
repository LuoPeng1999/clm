<template>
  <div>
    <div class="gruel-list">
      <ul>
        <li>
          <div class="list-left">
            <img
              src="https://cube.elemecdn.com/9/23/06e301c0d6603d02cb6399ea53515jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
              alt=""
            />
          </div>
          <div class="list-right">
            <ul>
              <li>意大利披萨台湾手抓饼</li>
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
                  <span class="text-left">月售76单</span>
                </div>
                <div class="right">
                  <van-tag type="primary">蜂鸟专送</van-tag>
                </div>
              </li>
              <li>
                <div class="left">￥10起送|免配送费</div>
                <div class="right">782m|30分钟</div>
              </li>
              <li>
                <div class="left">
                  <van-tag type="danger">减</van-tag>
                  满30元减2元,满50元减5元,满100元...
                </div>
                <div class="right">
                  5个活动
                  <span class="iconfont icon-sanjiaoxing1"></span>
                </div>
              </li>
              <li>
                <van-tag type="success">配</van-tag>
                配送费立减4元
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4.6
    };
  }
};
</script>

<style lang="scss" scoped>
.gruel-list {
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

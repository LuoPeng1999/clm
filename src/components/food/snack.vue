<template>
  <div>
    <div class="gruel-list">
      <ul>
        <li>
          <div class="list-left">
            <img
              src="https://cube.elemecdn.com/c/7a/56362a651ceb422c54e06142840ecjpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
              alt=""
            />
          </div>
          <div class="list-right">
            <ul>
              <li>徐飞休闲小吃</li>
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
                  <span class="text-left">月售183单</span>
                </div>
                <div class="right">
                  <van-tag type="primary">蜂鸟专送</van-tag>
                </div>
              </li>
              <li>
                <div class="left">￥10起送|配送￥4</div>
                <div class="right">354m|30分钟</div>
              </li>
              <li>
                <div class="left">
                  <van-tag type="danger">减</van-tag>
                  满40元减8元,满55元减12元，满80元...
                </div>
                <div class="right">
                  5个活动
                  <span class="iconfont icon-sanjiaoxing1"></span>
                </div>
              </li>
              <li>
                <van-tag type="success">赠</van-tag>
                满88元赠送雪花纯生啤酒(听装)1份
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
      value: 4.8
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

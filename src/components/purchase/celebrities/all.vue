<template>
  <div>
    <div class="all-nav">
      <ul>
        <li>
          <div class="cele-left">
            <ul>
              <li>麦当劳代购</li>
              <li>月售5608</li>
              <li>9.95km</li>
            </ul>
          </div>
          <div class="cele-right">
            <img
              src="https://cube.elemecdn.com/8/30/9b518cd840fbc68013387a2a92e5epng.png?x-oss-process=image/resize,w_100,h_100"
              alt=""
            />
          </div>
        </li>
        <li>
          <div class="cele-left">
            <ul>
              <li>coco代购</li>
              <li>月售6218</li>
              <li>9.81km</li>
            </ul>
          </div>
          <div class="cele-right">
            <img
              src="https://cube.elemecdn.com/7/f3/624de460d549fd84dcc3e6bb7d0d8png.png?x-oss-process=image/resize,w_100,h_100"
              alt=""
            />
          </div>
        </li>
      </ul>
      <p>
        没找到想要的商家?
        <span class="manual" @click="$store.state.active = 0">
          试试手动下单
          <van-icon name="arrow" />
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getmilk() {}
  }
};
</script>

<style lang="scss" scoped>
.all-nav {
  width: 100%;
  max-width: 436px;
  min-width: 350px;
  margin-top: 10px;
  margin-left: 10px;
  overflow: hidden;
  & > ul {
    width: 100%;
    max-width: 436px;
    min-width: 350px;
    margin: 0 auto;
    margin-top: 20px;
    & > li {
      width: 47%;
      height: 70px;
      float: left;
      margin-right: 3%;
      background-color: #fff;
      border-radius: 5px;
      .cele-left {
        float: left;
        margin-left: 10px;
        margin-top: 5px;
        & > ul {
          & > li {
            &:first-child {
              font-size: 16px;
            }
            &:nth-child(2) {
              font-size: 14px;
            }
            &:last-child {
              font-size: 12px;
            }
          }
        }
      }
      .cele-right {
        float: right;
        margin-right: 10px;
        margin-top: 5px;
        & > img {
          display: inline-block;
          width: 50px;
        }
      }
    }
  }
  & > p {
    width: 100%;
    margin-top: 120px;
    text-align: center;
    height: 16px;
    line-height: 16px;
    color: #999;
    .manual {
      color: #666;
      margin-left: 10px;
    }
  }
}
</style>

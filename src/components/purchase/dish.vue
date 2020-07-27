<template>
  <div>
    <div class="input-content">
      <textarea
        placeholder="疫情时期，减少出门，您可填写想购买的任意菜品,如小青菜、鸡蛋等，跑腿小哥为您代购，如需无接触配送，请提前电话沟通"
      ></textarea>
      <span class="iconfont icon-zhaoxiangji input-icon"></span>
      <p>
        点击标签快捷输入<span class="example"
          >查看填写示例<van-icon name="arrow"
        /></span>
      </p>
      <div class="input-btngroup">
        <button>土豆</button>
        <button>豆腐</button>
        <button>胡萝卜</button>
        <button>小青菜</button>
        <button>鸡蛋</button>
        <button>黄瓜</button>
        <button>西红柿</button>
        <button>茄子</button>
        <button>瘦肉</button>
        <button>五花肉</button>
      </div>
    </div>
    <input type="button" value="去下单" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
  background-color: #018cff;
  color: white;
  width: 80%;
  height: 35px;
  font-size: 18px;
  margin-left: 10%;
  border-radius: 5px;
}
.input-content {
  width: 90%;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  overflow: hidden;
  margin: 10px auto;
  position: relative;
  & > textarea {
    outline: none;
    border: none;
    width: 80%;
    height: 120px;
    font-size: 18px;
    line-height: 70px;
    word-wrap: break-word;
    word-break: normal;
    color: #333;
    overflow: hidden;
    margin-left: 15px;
  }
  .input-icon {
    display: inline-block;
    font-size: 20px;
    color: #999;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  & > p {
    font-size: 14px;
    margin-top: 20px;
    margin-left: 18px;
    .example {
      color: #008cff;
    }
  }
  .input-btngroup {
    width: 80%;
    margin-left: 15px;
    margin-top: 20px;
    & > button {
      padding: 6px 6px;
      margin-right: 5px;
      // margin-left: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
      outline: none;
      border: none;
      background-color: #e5f4ff;
      color: #333;
    }
  }
}
</style>

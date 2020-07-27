<template>
  <div>
    <div class="input-content">
      <textarea
        placeholder="请填写想让小哥帮做的事，如「帮忙打印资料」"
      ></textarea>
      <span class="iconfont icon-zhaoxiangji input-icon"></span>
      <p>
        点击标签快捷输入<span class="example"
          >查看填写示例<van-icon name="arrow"
        /></span>
      </p>
      <div class="input-btngroup">
        <button>帮忙排队</button>
        <button>帮忙向女朋友道歉</button>
        <button>帮忙送洗衣店</button>
        <button>帮忙取蛋糕</button>
        <button>帮忙拿药</button>
        <button>帮忙打印</button>
        <button>帮忙取眼镜</button>
        <button>帮我去医院取下报告</button>
        <button>帮忙自提衣服</button>
        <button>提前和我联系</button>
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

<template>
  <div>
    <div class="input-content">
      <textarea
        placeholder="请填写想帮拿的快递信息，如「拿3个快递,快递柜取件码电联」提醒:请勿直接填写取件码信息"
      ></textarea>
      <span class="iconfont icon-zhaoxiangji input-icon"></span>
      <p>
        点击标签快捷输入<span class="example"
          >查看填写示例<van-icon name="arrow"
        /></span>
      </p>
      <div class="input-btngroup">
        <button>顺丰</button>
        <button>圆通</button>
        <button>中通</button>
        <button>申通</button>
        <button>韵达</button>
        <button>天天</button>
        <button>邮政包裹</button>
        <button>取货码电话沟通</button>
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

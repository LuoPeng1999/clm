<template>
  <div>
    <div class="explanation-header">
      <div class="text-left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div class="text-title">优惠说明</div>
    </div>
    <div class="explanation-title">
      <h3>【红包】</h3>
    </div>
    <div class="explanation-content">
      <ul>
        <li>
          <h3>Q1:为什么不能使用红包？</h3>
          <p>使用红包需同时满足以下条件：</p>
          <ul>
            <li>订单在线支付；</li>
            <li>
              收货人手机号、领取红包时输入的手机号和饿了么账号的注册手机号需为同一手机号；
            </li>
            <li>满足红包对应品类、商家、限制门槛金额要求；</li>
            <li>
              普通用户每日最多可使用3个平台红包与5个商家红包，超级会员用户最多可使用5个平台红包与5个商家红包；不同红包类型是否可同享，具体请以提交订单页面详情展示为准。
            </li>
          </ul>
        </li>
        <li>
          <h3>Q2:为什么不能享受津贴优惠？</h3>
          <p>享受津贴优惠需同时满足以下条件：</p>
          <ul>
            <li>下单的商家有津贴活动（商家列表页中含有津贴标识的商家）；</li>
            <li>
              商品价格（折后价）+餐盒费要满足津贴使用门槛（如商家有满20可用3元的津贴，商品价格（折后价）+餐盒费需要大于等于20元才可使用3元津贴）；
            </li>
            <li>
              部分享受折扣商品优惠的订单，不可同时享受津贴优惠（以提交订单时页面提示信息为准）；
            </li>
            <li>
              单用户单日可使用津贴金额可通过“我的”→“津贴”进行查看，如当前津贴余额为0，则无法享受津贴优惠。（如现津贴余额小于该商户可享受的津贴金额，则以现津贴余额为准，例：津贴余额4元，某店津贴优惠7元，则该订单仅可享受4元津贴优惠。）
            </li>
          </ul>
        </li>
        <li>
          <h3>Q3:为什么不能使用品质联盟红包？</h3>
          <p>品质联盟红包需同时满足以下条件才可使用：</p>
          <ul>
            <li>在品质联盟商家下单（商家列表页中含有品质联盟标识的商家）；</li>
            <li>
              满足品质联盟红包在对应品类、品质联盟商家且满足限制门槛金额要求；
            </li>
            <li>
              普通用户每日最多可使用3个平台红包与5个商家红包，超级会员用户最多可使用5个平台红包与5个商家红包；不同红包类型是否可同享，具体请以提交订单页面详情展示为准。
            </li>
          </ul>
        </li>
        <li>
          <h3>Q4:为什么没有或不能使用超级会员红包？</h3>
          <p>
            超级会员红包需同时满足以下条件才可使用，超级会员全品类红包与超级会员店铺专享红包不同享：
          </p>
          <ul>
            <li>
              购买饿了么超级会员权益，并完成超级会员红包领取或使用奖励金兑换超级会员红包；
            </li>
            <li>
              若每天使用奖励金兑换同一商家的多个超级会员店铺专享红包，在同一商家下单时，每天仅可使用1个商家超级会员店铺专享红包；
            </li>
            <li>
              获得的超级会员红包需在有效期内使用，超过有效期超级会员红包自动过期失效；自领取或奖励金兑换之日起，超级会员全品类红包需在14天内使用有效；超级会员店铺专享红包需在7天内使用有效。
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.explanation-header {
  width: 100%;
  height: 50px;
  max-width: 436px;
  min-width: 320px;
  background-color: #0096ff;
  overflow: hidden;
  margin: 0 auto;
  .text-left {
    height: 50px;
    line-height: 50px;
    float: left;
    font-size: 20px;
    color: white;
    margin-left: 10px;
  }
  .text-title {
    height: 50px;
    line-height: 40px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    float: left;
    text-align: center;
    margin-left: 120px;
  }
}
.explanation-title {
  width: 100%;
  height: 50px;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  & > h3 {
    font-size: 18px;
    line-height: 50px;
    margin-left: 10px;
  }
}
.explanation-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  margin-bottom: 50px;
  & > ul {
    width: 90%;
    margin: 0 auto;
    & > li {
      width: 100%;
      & > h3 {
        font-size: 16px;
      }
      & > p {
        margin-top: 10px;
      }
      & > ul {
        margin-top: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        li {
          position: relative;
          margin-left: 20px;
          &::before {
            content: "";
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: #000;
            position: absolute;
            left: 0;
            top: 50%;
            margin-left: -12.5px;
            margin-top: -2px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>

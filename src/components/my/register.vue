<template>
  <div>
    <!-- 头部返回栏 -->
    <div class="register-header">
      <div class="text-left">
        <van-icon name="arrow-left" @click="$router.push('/my')" />
      </div>
      <div class="text-title">注册账号</div>
    </div>
    <!-- LOGO -->
    <div class="logo">
      <img :src="logoImg" alt="" />
    </div>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="repassword"
        type="password"
        name="repassword"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请再次填写密码' }]"
      />
      <van-field
        v-model="tel"
        type="number"
        name="tel"
        label="电话"
        placeholder="电话"
        :rules="[{ required: true, message: '请填写电话' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <p>
      用户登录以及注册,表示已同意<router-link tag="span" to="/serve"
        >《用户服务协议》</router-link
      >和<router-link tag="span" to="/serve">《隐私权政策》</router-link>
    </p>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      repassword: "",
      tel: "",
      logoImg: require("../../assets/image/my/loginImg.png")
    };
  },
  methods: {
    onSubmit(values) {
      let that = this;
      this.$axios.get("register", { values }).then(res => {
        console.log(res);
        if (res.data == "200") {
          Toast({
            message: "注册成功",
            onOpened() {
              let obj = {
                id: 1,
                username: that.username,
                password: that.password,
                tel: that.tel
              };
              that.$router.push("/login");
              that.$store.commit("login/add", obj);
              console.log(that.$store.state.login);
            }
          });
        } else {
          Toast("注册失败");
        }
      });
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
.register-header {
  width: 100%;
  height: 50px;
  max-width: 436px;
  min-width: 320px;
  background-color: #0096ff;
  overflow: hidden;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
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
.logo {
  width: 40%;
  margin: 0 auto;
  padding: 20px 0;
  margin-top: 50px;
}
p {
  display: block;
  font-size: 14px;
  width: 80%;
  margin: 20px auto;
  & > span {
    color: #0096ff;
  }
}
</style>

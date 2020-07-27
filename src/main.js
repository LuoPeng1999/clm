import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 引入vant框架
import Vant from "vant";
import "vant/lib/index.css";
import { ActionSheet } from "vant";
import { NavBar } from "vant";
import { Col, Row } from "vant";
import { NoticeBar } from "vant";
import { Tab, Tabs } from "vant";
import { Popup } from "vant";
import { CouponCell, CouponList } from "vant";
import { ShareSheet } from "vant";
import { Field } from "vant";
Vue.use(NoticeBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(ActionSheet);
Vue.use(Vant);
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(ShareSheet);
Vue.use(Field);

// 引入阿里矢量图样式
import "./assets/font/iconfont.css";

// 引入全局样式
import "./assets/css/base.css";

// 引入swiper样式
import "swiper/css/swiper.min.css";

// 引入百度地图
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: "YOUR_APP_KEY"
});

// 配置axios
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000/";
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import Echarts from 'echarts'
import "./assets/normalize.css"

// Echarts
Vue.prototype.$echarts = Echarts
// 权限验证
import "./permission"


// ul
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");

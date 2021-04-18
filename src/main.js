import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import flexible from './utils/flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
// import './utils/map'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
  /* <script src="./node_modules/amfe-flexible/index.js"></script> */

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
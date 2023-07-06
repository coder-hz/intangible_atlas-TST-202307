import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// 这里 是使用elementui里面的字体图标库.
import { Icon } from 'element-ui';
Vue.config.productionTip = false
Vue.use(Icon)
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from 'components/common/toast'

// 解决移动端点击事件300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

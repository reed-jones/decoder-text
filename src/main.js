import Vue from 'vue'
import App from './App.vue'

import DecoderText from './components'
Vue.use(DecoderText)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

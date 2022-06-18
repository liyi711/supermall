import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from './store/index.js'
import toast from 'components/common/toast/index'
import Vant from 'vant'
import { Toast } from 'vant'
import FastClick from 'fastclick'

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
Vue.use(toast)
Vue.use(Toast)
Vue.use(Vant)
FastClick.attach(document.body)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')

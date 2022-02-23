import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/axios.js'
import './scss/all.scss'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixin from './mixin.js'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import { formatDistanceToNow } from 'date-fns'
import { zhTW } from 'date-fns/locale'
import parseISO from 'date-fns/fp/parseISO'
import VueScrollReveal from 'vue-scroll-reveal'
import VuePaycard from 'vue-paycard'

Vue.use(VuePaycard)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  scale: 1,
  distance: '100px',
  mobile: false,
  easing: 'ease-out'
})

const options = {
  confirmButtonColor: '#8BC34A'
}

Vue.use(VueSweetalert2, options)
Vue.component('ImgInputer', ImgInputer)

Vue.mixin(mixin)
Vue.config.productionTip = false
Vue.prototype.$date = {
  formatDistanceToNow,
  parseISO,
  locales: { zhTW }
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

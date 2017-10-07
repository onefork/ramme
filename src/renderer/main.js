'use strict'

import electron from 'electron'
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import { install as devtron } from 'devtron'

import './assets/styles/app.less'

import App from './App'
import router from './router'
import store from './store'
import api from '../common/api'

Vue.use(ElementUI)

if (!process.env.IS_WEB) {
  Vue.use(electron)
}

if (process.env.NODE_ENV === 'development') {
  devtron()
}

Vue.electron = Vue.prototype.$electron = electron
Vue.http = Vue.prototype.$http = axios
Vue.api = Vue.prototype.$api = api

Vue.config.productionTip = false

const app = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

export { app, router, store, api }

import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import keywordsMixin from './util/keywords'
import descriptionMixin from './util/description'
import * as filters from './util/filters'
import http from './util/http'
import storage from './util/storage'
import ui from './components'

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import './scss/main.scss'
import './scss/home.styl'

Vue.use(MuseUI)
Vue.use(ui)

// import YunserUI from 'yunser-ui-vue'
// import 'yunser-ui-vue/dist/yunser-ui.css'

// Vue.use(YunserUI)

Vue.prototype.$http = http
Vue.prototype.$storage = storage

// mixin for handling title
Vue.mixin(titleMixin)
// Vue.mixin(keywordsMixin)
Vue.mixin(descriptionMixin)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}

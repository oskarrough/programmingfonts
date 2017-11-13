import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './src/App.vue'
import 'tachyons/css/tachyons.css'
import './fonts/stylesheets/fonts.css'

Vue.use(VueRouter)
const routes = [{ path: '/:id', component: App }]
const router = new VueRouter({ routes })

new Vue({
  router,
  el: '#app',
  components: { App },
  render() {
    return <App />
  }
})

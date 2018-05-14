import Vue from 'vue'
import store from './store'
import app from './components/app.vue'
import {currency} from './currency'

Vue.filter('currency', currency)


new Vue({
  el: '#app',
  components: {
    app,
  },
  template: '<app/>',
  store,
})

new Vue({
  el: '#app',
  store,
  // render: createElement => createElement(app)   // 返回<app/>
  render: h => h(app)
})

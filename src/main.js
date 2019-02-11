import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select, Row } from 'element-ui';

Vue.config.productionTip = false


Vue.use(Button)
Vue.use(Select)
Vue.use(Row)



new Vue({
  render: h => h(App),
  router,
  store,
  // el: "#app",
  // template: "<App/>",
  // components: {
  //   App
  // }
}).$mount('#app')


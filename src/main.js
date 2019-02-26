import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Select,
  Row,
  Col,
  Icon,
  Input,
  Carousel,
  CarouselItem,
  cascader
} from 'element-ui';

Vue.config.productionTip = false


Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(cascader)



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
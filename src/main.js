import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import { routes } from './router/index'



Vue.config.productionTip = false


Vue.use(vueRouter);
export const router = new vueRouter({
  routes,
  mode: "history"
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import myPlugin from 'test-plugin/src/main.js'
import router from './router';
// Vue.config.productionTip = false


Vue.use(myPlugin);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');



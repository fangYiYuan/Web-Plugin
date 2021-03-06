// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import preview from './plugins/preview/index';

Vue.use(preview);

Vue.config.productionTip = false;

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value;
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});

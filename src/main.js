import Vue from 'vue';
import Cube from 'cube-ui';
import qs from 'qs';
import App from './App.vue';
import router from './router';
import store from './store';
// import './registerServiceWorker';
import './assets/iconfont/iconfont.css';
import './assets/static/reset.css';
import Vant from 'vant';
import 'vant/lib/index.css';


// Vue.prototype.$qs = qs;

Vue.config.productionTip = false;

Vue.use(Cube);


Vue.use(Vant);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
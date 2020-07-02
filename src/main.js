import Vue from 'vue';
import App from './App.vue';
import router from '@/app/router';
import * as VueGoogleMaps from 'vue2-google-maps';
import jQuery from 'jquery';


import {store} from '@/app/store';
import '@/scss/app-style.scss';

Vue.config.productionTip = false;

window.$ = window.jQuery = jQuery;

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDLmAV6TLE15qpQH_9UdhwxR0w0LF-Elow',
        libraries: 'places'
    },
    installComponents: false
});
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');

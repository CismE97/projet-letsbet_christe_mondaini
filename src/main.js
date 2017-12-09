// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import 'tether/dist/js/tether.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import Chart from 'chart.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

$(document).ready(() => {
    let ctx = $('#chart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ['#3e95cd', '#FFFFFF'],
                    data: [50, 50]
                }
            ]
        }
    });
});

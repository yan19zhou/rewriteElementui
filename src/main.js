// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './resetElement.css'

Vue.config.productionTip = false
    /* eslint-disable */
    /* eslint-disable no-new */
Vue.use(ElementUi)
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
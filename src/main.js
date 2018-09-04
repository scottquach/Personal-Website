import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueScrollReveal from 'vue-scroll-reveal'


Vue.use(Vuetify, {
  theme: {
    primary: '#3233CC'
  }
})

Vue.use(VueScrollReveal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    products: [],
    manProducts: [],
    womanProducts: []
  },
  mutations: {
    getProducts(state) {
      axios
        .get('https://api.stylen.online/wp-json/wp/v2/news')
        .then(response => state.products = response.data)       
    },
    getCategoryManProducts(state) {
      axios
        .get('https://api.stylen.online/wp-json/wp/v2/news/?categories=1')
        .then(response => state.manProducts = response.data)       
    },
    getCategoryWomanProducts(state) {
      axios
        .get('https://api.stylen.online/wp-json/wp/v2/news/?categories=3')
        .then(response => state.womanProducts = response.data)       
    }
  },
})

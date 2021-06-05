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
    womanProducts: [],
    orderID: [],
    orderProducts: [],
    sendOrderData: [
      {
        name: String,
        surname: String,
        email: String,
        phone: String
      },
      [

      ]
    ]
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
    },
    getOrderProduct(state, id){
      if (state.orderID.indexOf(id) == -1) { 
        state.orderID.push(id)
        axios
          .get('https://api.stylen.online/wp-json/wp/v2/news/' + id)
          .then(response => state.orderProducts.push(response.data))  
      }
    },
    removeOrderProduct(state, id) {
      let i = state.orderID.indexOf(id);
      if (i > -1) {
        state.orderID.splice(i, 1)
      }
      state.orderProducts = state.orderProducts.filter(function(el) {
        return el.id !== id;
      })
    },
    sendOrderData(state, data) {
      if (data) {
        state.sendOrderData[0].name = data.name;
        state.sendOrderData[0].surname = data.surname;
        state.sendOrderData[0].email = data.email;
        state.sendOrderData[0].phone = data.phone;
      }
      
      state.sendOrderData[1] = [];
      for (let i = 0; i < state.orderProducts.length; i++) {
        state.sendOrderData[1].push(state.orderProducts[i]);
      }
      
      console.log(state.sendOrderData);
      axios
        .post(
          "https://api.stylen.online/wp-content/themes/twentytwentyone/shopSender.php", 
          state.sendOrderData,
          { 
            headers: { 
              'Content-type': 'application/x-www-form-urlencoded' 
            }
          }
        )
    }
  },
})

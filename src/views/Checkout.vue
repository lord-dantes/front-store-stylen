<template>
  <main>
    <section class="cart checkout breadcrumbs">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumbs-nav">
              <li class="breadcrumbs-nav-item"><router-link class="breadcrumbs-nav-link" to="/">Головна</router-link></li>
              <li class="breadcrumbs-nav-item">/</li>
              <li class="breadcrumbs-nav-item"><router-link class="breadcrumbs-nav-link" to="/checkout/">Оформлення замовлення</router-link></li>
            </ul>
          </div>
          <div class="col-md-12">
            <h1 class="shops-title">Оформлення замовлення</h1>
            <form class="checkout-form" @submit.prevent="sendForm()">
              <input type="text" placeholder="Iм'я" v-model="clientData.name">
              <input type="text" placeholder="Фамiлiя" v-model="clientData.surname">
              <input type="email" placeholder="Email" v-model="clientData.email">
              <masked-input mask="\+\38 (111) 11-11-111" placeholder="Телефон" v-model="clientData.phone" />
              <button>Вiдправити заявку</button>
              <div class="checkout-attentions" v-if="validation.show">
                <p v-show="!validation.name">Введiть ваше Iм'я</p>
                <p v-show="!validation.surname">Введiть вашу Фамiлiю</p>
                <p v-show="!validation.email">Введiть вашу почту</p>
                <p v-show="!validation.phone">Введiть ваш номер телефону</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import MaskedInput from 'vue-masked-input'

export default {
  components: { 
    MaskedInput 
  },
  data() {
    return {
      clientData: {
        name: '',
        surname: '',
        email: '',
        phone: ''
      },
      validation: {
        show: false,
        name: false,
        surname: false,
        email: false,
        phone: false
      }
    }
  },
  methods: {
     sendForm() {
      if (this.clientData.name.length > 0 && this.clientData.surname.length > 0 && this.clientData.email.length > 0 && this.clientData.phone.length > 0) {
        this.$store.commit('sendOrderData', this.clientData)
        this.$router.push({ path: '/thanks/' })
      } else {
        this.validation.show = true
        this.clientData.name.length > 0 ? this.validation.name = true : this.validation.name = false
        this.clientData.surname.length > 0 ? this.validation.surname = true : this.validation.surname = false
        this.clientData.email.length > 0 ? this.validation.email = true : this.validation.email = false
        this.clientData.phone.length > 0 ? this.validation.phone = true : this.validation.phone = false
      }
    },
    redirect() {
      if (this.$store.state.orderProducts.length <= 0) {
        this.$router.push({ path: '/' })
      }
    }
  },
  mounted() {
    this.redirect();
  }
}
</script>

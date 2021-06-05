<template>
  <main>
    <section class="cart breadcrumbs">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumbs-nav">
              <li class="breadcrumbs-nav-item"><router-link class="breadcrumbs-nav-link" to="/">Головна</router-link></li>
              <li class="breadcrumbs-nav-item">/</li>
              <li class="breadcrumbs-nav-item"><router-link class="breadcrumbs-nav-link" to="/checkout/">Оформление заказа</router-link></li>
            </ul>
          </div>
          <div class="col-md-12">
            <h1 class="shops-title">Оформление заказа</h1>
            <form @submit.prevent="sendForm()">
              <input type="text" v-model="clientData.name">
              <input type="text" v-model="clientData.surname">
              <input type="text" v-model="clientData.email">
              <input type="text" v-model="clientData.phone">
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      clientData: {
        name: '',
        surname: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
     sendForm() {
      this.$store.commit('sendOrderData', this.clientData);
    }
  }
}
</script>

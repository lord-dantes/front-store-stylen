<template>
  <main v-if="this.$store.state.orderProducts">
    <section class="cart breadcrumbs">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumbs-nav">
              <li class="breadcrumbs-nav-item"><router-link class="breadcrumbs-nav-link" to="/">Головна</router-link></li>
              <li class="breadcrumbs-nav-item">/</li>
              <li class="breadcrumbs-nav-item"><router-link class="breadcrumbs-nav-link" to="/cart/">Кошик</router-link></li>
            </ul>
          </div>
          <div class="col-md-12">
            <h1 class="shops-title">Кошик</h1>
            <div class="cart-info">
              <!-- <ul class="cart-items"> -->
                <transition-group class="cart-items list-group" name="cart-list" tag="ul">
                  <li class="cart-item" v-for="item in this.$store.state.orderProducts" :key="item.id">
                    <img :src="item.fimg_url" alt="">
                    <p class="cart-item-title">
                      <router-link :to="'/product/' + item.slug + '/'">
                        {{ item.title.rendered }}
                      </router-link>
                      <br>
                      Артикул: {{ item.id }}
                    </p>
                    <p class="cart-item-price">
                      <s v-if="item.acf.oldPrice">{{ item.acf.oldPrice }} грн</s>
                      {{ item.acf.price }} грн
                    </p>
                    <button @click="removeProductFromCart(item.id)"><i class="el-icon-close"></i></button>
                  </li>
                </transition-group>
              <!-- </ul> -->
              <div class="cart-total">
                <p>Всього: {{ totalPrice() }} грн</p>
                <router-link to="/checkout/">Продолжить оформление</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <button @click="sendForm()">send</button> -->
    </section>
  </main>
</template>

<script>

export default {
  name: "Cart",
  data() {
    return {
      
    }
  },
  methods: {
    totalPrice() {
      let total = 0;
      let productsPrice = this.$store.state.orderProducts;
      for (let i = 0; i < this.$store.state.orderProducts.length; i++) {
        total += parseInt(productsPrice[i].acf.price);
      }
      return total;
    },
    removeProductFromCart(id) {
      this.$store.commit('removeOrderProduct', id)
      this.redirect();
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

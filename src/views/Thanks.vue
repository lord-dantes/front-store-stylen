<template>
  <main>
    <section class="cart checkout thanks breadcrumbs">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
          </div>
          <div class="col-md-12">
            <h1 class="shops-title">Спасибі вам за покупку!</h1>
            <p>Наш менеджер скоро подзвонить вам для уточнення деталей.</p>
            <router-link to="/">Продовжити покупки?</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
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

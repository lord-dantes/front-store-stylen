<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import './assets/css/libs.css'
import './assets/css/main.css'
import Header from './components/header'
import Footer from './components/footer'

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style>
body {
  overflow-y: scroll;
}
/* transition router  */
.fade-enter-active, .fade-leave-active {
  transition: opacity .333s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

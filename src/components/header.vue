<template>
  <div class="header">
    <ul v-loading="searchLoading">
      <li v-for="(item, i) in searchData" :key="i">
        <img width="90px" :src="item.fimg_url" alt="">
        <!-- {{ item.id }} -->
      </li>
    </ul>
    <div class="container-fluid">
      <div class="row">
        <div class="header-box">
          <div class="col-md-4 col-xs-12">
            <form class="header-form" action="#">
              <input
                class="header-form-search"
                placeholder="Пошук"
                type="search"
                v-model="inputSearch"
              />
            </form>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="header-logo">
              <router-link to="/">
                <img src="../assets/img/logo.png" alt="" />
              </router-link>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="header-box-shop">
              <div class="header-textshop">
                <span class="header-text">Безкоштовно по Україні</span>
                <br />
                <span class="header-number">+38 (095) 093 24 33</span>
              </div>
              <div class="header-shop">
                <div class="header-shop-heart">
                  <img src="../assets/img/icon-shop.png" alt="heart" /><span
                    class="header-shop-heart-number"
                    >{{ this.$store.state.orderProducts.length }}</span
                  >
                </div>
                <transition name="fade">
                  <template v-if="this.$store.state.orderProducts.length <= 0">
                    
                  </template>
                  <template v-else>
                    <router-link class="header-shop-basket" to="/cart/">Кошик</router-link>
                  </template>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-navigation">
      <nav>
        <div class="containerss">
          <label for="mobile-button"><i class="fa fa-bars"></i></label>
          <input id="mobile-button" type="checkbox" />
          <ul class="top-menu">
            <li class="link-standart">
              <router-link to="/catalog/" class="dropdown dropdown-standart"
                >Каталог</router-link>
            </li>
            <li><a href="">НОВИНИ</a></li>
            <li><a href="">КОНТАКТИ</a></li>
          </ul>
        </div>
      </nav>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputSearch: '',
      searchId: [],
      searchLoading: false,
      searchData: []
    }
  },
  methods: {
    // getSearchId() {
    //   this.searchId = [];
    //   this.axios
    //     .get("https://api.stylen.online/wp-json/wp/v2/search?subtype=news&search=" + this.inputSearch)
    //     .then((response) => (this.searchId = response.data));
    //   setTimeout(() => this.getSearchData(), 1000);        
    // },
    // getSearchData() {
    //   this.searchData = [];
    //   for (let z = 0; z < this.searchId.length; z++) {
    //     this.axios
    //       .get("https://api.stylen.online/wp-json/wp/v2/news?include[]=" + this.searchId[z].id)
    //       .then((response) => (this.searchData.push(response.data[0])));
    //   }
    //   this.searchLoading = false;
    // }
  },
  mounted() {
    // this.getSearchData();
  },
  watch: {
    // "inputSearch": function() {
    //   this.searchLoading = true;
    //   setTimeout(() => this.getSearchId(), 2000);
    // }
  }
}
</script>

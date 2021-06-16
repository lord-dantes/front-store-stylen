<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="header-box">
          <div class="col-md-4 col-xs-12">
            <form v-loading="searchLoading" class="header-form" @submit.prevent="getSearchId()">
              <input
                class="header-form-search"
                placeholder="Пошук"
                type="text"
                v-model="inputSearch"
              />              
              <button><i :class="searchData.length > 0 ? 'el-icon-circle-close' : 'el-icon-search'"></i></button>
            </form>
            <transition name="fade">
              <ul class="header-search-items" v-show="searchData.length > 0" v-loading="searchLoading">
                <li @click="searchData = []" v-for="(item, i) in searchData" :key="i">
                  <router-link :to="'/product/' + item.slug + '/'">
                    <img :src="item.fimg_url" alt="">
                    <p>{{ item.title.rendered }}</p>  
                    <p>Артикул: {{ item.id }}</p>
                    <p>{{ item.acf.price }} грн</p>
                  </router-link>
                </li>
              </ul>
            </transition>
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
                  <img src="../assets/img/icon-shop.png" alt="heart" />
                  <span
                    class="header-shop-heart-number"
                  >
                    {{ this.$store.state.orderProducts.length }}
                  </span>
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
            <li><router-link to="/news/">Новини</router-link></li>
            <li><router-link to="/contacts/">КОНТАКТИ</router-link></li>
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
    clearData() {
      this.searchData = [];
    },
    getSearchId() {
      this.searchLoading = true;
      this.searchId = [];
      this.axios
        .get("https://api.stylen.online/wp-json/wp/v2/search?subtype=news&search=" + this.inputSearch)
        .then((response) => (this.searchId = response.data));
      setTimeout(() => this.getSearchData(), 1000);        
    },
    getSearchData() {
      this.searchData = [];
      for (let z = 0; z < this.searchId.length; z++) {
        this.axios
          .get("https://api.stylen.online/wp-json/wp/v2/news?include[]=" + this.searchId[z].id)
          .then((response) => (this.searchData.push(response.data[0])));
      }
      this.searchLoading = false;
    }
  },
  mounted() {
    // this.getSearchData();
  },
  created() {
    document.addEventListener('click', () => this.searchData = []);
  },
  watch: {
    
  }
}
</script>

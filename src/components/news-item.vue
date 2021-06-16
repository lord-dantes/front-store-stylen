<template>
  <main v-loading="loading">
    <template v-if="currentNewsItemData.length > 0">
      <section class="breadcrumbs">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <ul class="breadcrumbs-nav">
                <li class="breadcrumbs-nav-item">
                  <router-link class="breadcrumbs-nav-link" to="/"
                    >Головна</router-link
                  >
                </li>
                <li class="breadcrumbs-nav-item">/</li>
                <li class="breadcrumbs-nav-item">
                  <a
                    class="breadcrumbs-nav-link"
                    v-html="currentNewsItemData[0].title.rendered"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="snews">
        <div class="container-fluid">
          <img :src="currentNewsItemData[0].fimg_url" alt="">
          <h1>{{ currentNewsItemData[0].title.rendered }}</h1>
          <div class="snews-item-content" v-html="currentNewsItemData[0].content.rendered"></div>
        </div>
      </section>
    </template>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      currentNewsItemData: []
    };
  },
  methods: {
    getNewsItemData() {
      this.axios
        .get("https://api.stylen.online/wp-json/wp/v2/snews?slug=" + this.$route.params.slug)
        .then((response) => (this.currentNewsItemData = response.data));
    },
  },
  mounted() {
    this.getNewsItemData();
  },
  computed: {
    
  },
  watch: {
    currentNewsItemData: function() {
      this.loading = false;
    }
  },
};
</script>

<style>
main {
  min-height: 33vh;
}
.product {
  padding-bottom: 150px;
}
.media-item img {
  max-width: 386px;
  max-height: 386px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

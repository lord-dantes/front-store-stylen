<template>
  <main v-loading="loading">
    <template v-if="newsData.length > 0">
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
                  >Новини</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="snews">
        <div class="container-fluid">
          <div class="snews-items">
            <router-link :to="'/news/' + item.slug + '/'" class="snews-item" v-for="(item, i) in newsData" :key="i">
                <img :src="item.fimg_url" />
              <div class="snews-info">
                <p class="snews-item-date" v-html="item.formatted_date"></p>
                <p class="snews-item-title" v-html="item.title.rendered"></p>
                <p class="snews-item-contents" v-html="item.content.rendered"></p>
                <p class="snews-item-link">Детальнiше</p>
              </div>
            </router-link>
          </div>
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
      newsData: []
    };
  },
  methods: {
    getNewsData() {
      this.axios
        .get("https://api.stylen.online/wp-json/wp/v2/snews/")
        .then((response) => (this.newsData = response.data));
    },
  },
  mounted() {
    this.getNewsData();
  },
  computed: {
    
  },
  watch: {
    newsData: function() {
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

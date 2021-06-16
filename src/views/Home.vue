<template>
  <main>
    <section class="slider">
      <el-carousel
        height="500px"
        :interval="10000"
        trigger="click"
        arrow="always"
      >
        <el-carousel-item>
          <img src="https://images.ua.prom.st/2721292804_2721292804.jpg" />
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="shop">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12"><h2 class="shop-title">Товари</h2></div>
          <div class="col-md-12">
            <div class="shop-box">
              <ul class="shop-box-menu">
                <li class="shop-box-item">
                  <router-link class="shop-box-link" to="/catalog/man-collection/">ЧОЛОВІЧА КОЛЕКЦІЯ</router-link>
                </li>
                <li class="shop-box-item">
                  <router-link class="shop-box-link" to="/catalog/woman-collection/">ЖІНОЧА КОЛЕКЦІЯ</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="shop-items">
            <div class="shop-items-onecolumn">
              <div
                class="test"
                v-for="(item, i) in this.$store.state.products"
                :key="i"
              >
                <router-link :to="'/product/' + item.slug + '/'">
                  <div class="shop-item">
                    <div class="test-test">
                      <img
                        class="shop-item-productimg"
                        :src="item.fimg_url"
                        alt=""
                      />
                    </div>
                    <div class="shop-item-name">{{ item.title.rendered }}</div>
                    <div class="shop-item-prices">
                      <div class="shop-item-saleprice" v-if="item.acf.oldPrice">
                        {{
                          item.acf.oldPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        }}
                        грн
                      </div>
                      <div class="shop-item-price">
                        {{
                          item.acf.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        }}
                        грн
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="description">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="description-box">
              <div class="description-title">
                <img src="../assets/img/brackets.png" alt="" />
              </div>
              <div class="description-text">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев более менее осмысленого текста
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-wrapper">
      <div class="sm-wrapper">
        <div class="lions">
          <router-link class="lions-img" to="/catalog/man-collection/">
            <div class="lions-info">
              <span class="lions-title">Чоловiча колекцiя</span>
            </div>
          </router-link>
        </div>
        <div class="revived">
          <router-link class="revived-img" to="/catalog/woman-collection/">
            <div class="revived-info">
              <span class="revived-title">Жiноча колекцiя</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="container-fluid">
        <div class="row">
          <h2 class="news-title">Останні новини</h2>
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
      </div>
    </section>
    <section class="features">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="features-box">
              <div class="row">
                <div class="col-md-4 col-sm-4 features-box-icon">
                  <img src="../assets/img/icon-features.png" alt="" />
                  <div class="features-description">Безкоштовна доставка</div>
                </div>
                <div class="col-md-4 col-sm-4 features-box-icon">
                  <img src="../assets/img/icon-features2.png" alt="" />
                  <div class="features-description">Підтримка 24/7</div>
                </div>
                <div class="col-md-4 col-sm-4 features-box-icon">
                  <img src="../assets/img/icon-features3.png" alt="" />
                  <div class="features-description">ТОП продавець</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
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
    if (this.$store.state.products.length === 0) {
      this.$store.commit("getProducts");
    }
  },
};
</script>

<style>
.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/*  */
.shop-item-name {
  text-overflow: ellipsis;
  word-wrap: break-word;
  -o-text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  -webkit-line-clamp: 1;
  -moz-line-clamp: 1;
  -ms-line-clamp: 1;
  max-height: 25px;
  overflow: hidden;
}
</style>
<template>
  <main v-loading="currentProductDataLoading">
    <template v-if="currentProductData.length > 0">
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
                    v-html="currentProductData[0].title.rendered"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="product">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h1
                class="product-title"
                v-html="currentProductData[0].title.rendered"
              ></h1>
              <h4 class="product-subtitle">
                Артикул {{ currentProductData[0].id }}
              </h4>
            </div>
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-9">
                  <div class="row">
                    <div
                      class="col-md-6 col-md-offset-5"
                      v-if="currentProductData.length !== 0"
                    >
                      <VueGallerySlideshow
                        :images="mediaUrls"
                        :index="media.index"
                        @close="media.index = null"
                      />
                      <div class="media-item" :key="0" @click="media.index = 0">
                        <img :src="currentProductData[0].fimg_url" />
                      </div>
                    </div>
                  </div>
                  <div class="row products-img">
                    <div class="col-md-12 col-xs-12 col-sm-12">
                      <Carousel :items="3">
                        <img
                          v-for="(src, idx) in mediaUrls"
                          :src="src"
                          :key="idx"
                          @click="media.index = idx"
                        />
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="box-info-product">
                    <div class="pay-product">
                      {{
                        currentProductData[0].acf.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                      }}<span class="pay-currency">грн</span>
                    </div>
                    <form action="#">
                      <input
                        class="button-for-buy-product"
                        type="button"
                        value="Придбати"
                      />
                    </form>
                    <div class="info-product">
                      Матерiал: <span class="info-text-product">{{ currentProductData[0].acf.sostav }}</span>
                    </div>
                    <div class="info-product">
                      Колiр: <span class="info-text-product">{{ currentProductData[0].acf.color }}</span>
                    </div>
                    <div class="info-product">
                      Розмiри: <span class="info-text-product">{{ currentProductData[0].acf.size }}</span>
                    </div>
                    <div class="share-social-links">Подiлитися:</div>
                    <div class="box-social-links">
                      <a class="social-links" href="#"
                        ><img src="../assets/img/facebook.png" alt=""
                      /></a>
                      <a class="social-links" href="#"
                        ><img src="../assets/img/instagramm.png" alt="instagramm"
                      /></a>
                    </div>
                    <div class="box-discounts">
                      <div class="name-discounts">Працюють знижки</div>
                      <div class="discount">-10% при покупцi однієї пари</div>
                      <div class="discount">-15% при покупцi двух пар</div>
                      <div class="discount">-20% при покупцi пяти пар</div>
                      <div class="discount">-30% при индивiдуальному замовленнi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="features-delivery">
                <div class="features-boximg">
                  <p>
                    <img
                      class="features-img"
                      src="../assets/img/delivery.png"
                      alt=""
                    />
                  </p>
                </div>
                <div class="features-title">
                  <p class="features-title">Доставка</p>
                </div>
                <div class="features-pg">
                  Новая Почта (отделение)
                  <p class="features-pg-info">
                    <span class="features-pg-info-word">Бесплатно.</span> Вы
                    оплачиваете только стоимость товара.
                  </p>
                </div>
                <div class="features-pg">
                  Курьером (по Украине)
                  <p class="features-pg-info">Более 1000 грн.: Бесплатно</p>
                </div>
                <div class="features-pg">
                  Самовывоз из магазина
                  <p class="features-pg-info">г. Киев, Дримтаун</p>
                </div>
              </div>
              <div class="features-pay">
                <div class="features-boximg">
                  <p><img src="../assets/img/features-pay.png" alt="" /></p>
                </div>
                <div class="features-title">
                  <p class="features-title">Оплата</p>
                </div>
                <div>
                  <p class="features-pg">Наличными при получении</p>
                  <p class="features-pg">
                    Оплата платежной картой Visa/Mastercard
                  </p>
                </div>
              </div>
              <div class="features-exchange">
                <div class="features-title">
                  <p><img src="../assets/img/features-exchange.png" alt="" /></p>
                </div>
                <div class="features-title">
                  <p class="features-title">Обмен 14 дней</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </main>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
import Carousel from "vue-owl-carousel";

export default {
  components: {
    VueGallerySlideshow,
    Carousel,
  },
  data() {
    return {
      currentProductDataLoading: true,
      currentProductData: [],
      media: {
        readyURLs: [],
        index: null,
      },
    };
  },
  methods: {
    getProductData() {
      this.axios
        .get("https://api.stylen.online/wp-json/wp/v2/news?slug=" + this.$route.params.slug)
        .then((response) => (this.currentProductData = response.data));
    },
  },
  created() {
    this.getProductData();
  },
  computed: {
    mediaUrls: function () {
      return this.currentProductData[0].acf.photos.map((el) => el.photo);
    },
  },
  watch: {
    currentProductData: function () {
      this.currentProductDataLoading = false;
    },
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
.owl-carousel.owl-drag .owl-item {
  padding: 20px;
}
</style>

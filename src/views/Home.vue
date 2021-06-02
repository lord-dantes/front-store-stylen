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
                  <router-link class="shop-box-link" to="/catalog/man-collection/">ЧОЛОВІЧА КОЛЛЕКЦІЯ</router-link>
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
              <span class="lions-title">ЧОЛОВІЧА КОЛЛЕКЦІЯ</span>
            </div>
          </router-link>
        </div>
        <div class="revived">
          <router-link class="revived-img" to="/catalog/woman-collection/">
            <div class="revived-info">
              <span class="revived-title">ЖІНОЧА КОЛЕКЦІЯ</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="container-fluid">
        <div class="row">
          <h2 class="news-title">Останні новини</h2>
          <div class="col-md-2">
            <a href="#"
              ><img
                class="news-img-discont"
                src="../assets/img/img-news-1.png"
                alt=""
            /></a>
          </div>
          <div class="col-md-7">
            <div class="news-one-post">
              <div class="row">
                <div class="col-md-3">
                  <a href="#"
                    ><img
                      class="news-one-post-img"
                      src="../assets/img/img-news-2.png"
                      alt=""
                  /></a>
                </div>
                <div class="col-md-9 col-xs-12">
                  <div class="news-one-post-data">
                    <a class="news-one-post-data-link" href="#">01.01.17</a>
                  </div>
                  <div class="news-one-post-counter">
                    <a class="news-one-post-counter-link" href="#">55</a>
                  </div>
                  <div class="news-one-post-title">
                    <a class="news-one-post-title-link" href="#"
                      >Сайт рыбатекст поможет дизайнеру,верстальщику,
                      вебмастеру</a
                    >
                  </div>
                  <div class="news-one-post-description">
                    <a class="news-one-post-description-link" href="#"
                      >С другой стороны дальнейшее развитие различных форм
                      деятельности играет важную роль в формировании системы
                      обучения кадров, соответствует насущным потребностям.</a
                    >
                  </div>
                  <a class="news-one-post-link" href="#">Читать</a>
                </div>
              </div>
            </div>
            <div class="news-two-post">
              <div class="row">
                <div class="col-md-3">
                  <a href="#"
                    ><img
                      class="news-two-post-img"
                      src="../assets/img/img-news-3.png"
                      alt=""
                  /></a>
                </div>
                <div class="col-md-9 col-xs-12">
                  <div class="news-two-post-data">
                    <a class="news-two-post-data-link" href="#">01.01.17</a>
                  </div>
                  <div class="news-two-post-counter">
                    <a class="news-two-post-counter-link" href="#">55</a>
                  </div>
                  <div class="news-two-post-title">
                    <a class="news-two-post-title-link" href="#"
                      >Сайт рыбатекст поможет дизайнеру,верстальщику,
                      вебмастеру</a
                    >
                  </div>
                  <div class="news-two-post-description">
                    <a class="news-two-post-description-link" href="#"
                      >С другой стороны дальнейшее развитие различных форм
                      деятельности играет важную роль в формировании системы
                      обучения кадров, соответствует насущным потребностям.</a
                    >
                  </div>
                  <a class="news-two-post-link" href="#">Читать</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="item-sale">
              <div class="item-sale-title">
                <a class="item-sale-title-link" href="#">Рыба текст</a>
              </div>
              <a href="#"
                ><img
                  class="item-sale-img"
                  src="../assets/img/item-salecounter.png"
                  alt=""
              /></a>
              <div class="item-sale-description">
                <a class="item-sale-description-link" href="#"
                  >Рыбатекст поможет дизайнеру , верстальщику, вебмастеру
                  сгенерировать</a
                >
              </div>
            </div>
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
    return {};
  },
  methods: {},
  mounted() {
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
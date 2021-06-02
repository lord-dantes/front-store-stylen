<template>
  <main>
    <section class="breadcrumbs">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumbs-nav">
              <li class="breadcrumbs-nav-item">
                <router-link class="breadcrumbs-nav-link" to="/">Головна</router-link>
              </li>
              <li class="breadcrumbs-nav-item">/</li>
              <li class="breadcrumbs-nav-item">
                <p class="breadcrumbs-nav-link" href="#">Каталог</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="shops">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h1 class="shops-title">Каталог</h1>
          </div>
          <div class="col-md-3">
            <ul class="shops-items">
              <p :class="manCategory ? '' : 'active'" @click="manCategory = !manCategory">Чоловiча коллекцiя</p>
              <p :class="womanCategory ? '' : 'active'" @click="womanCategory = !womanCategory">Жiноча коллекцiя</p>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="shops-items">
              <template v-if="manCategory && womanCategory">
                <div
                  class="test"
                  v-for="(item, i) in this.$store.state.products"
                  :key="i"
                >
                  <router-link
                    class="test-link"
                    :to="'/product/' + item.slug + '/'"
                  >
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
                        <div class="shop-item-saleprice">
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
              </template>
              <template v-else-if="manCategory">
                <div
                  class="test"
                  v-for="(item, i) in this.$store.state.manProducts"
                  :key="i"
                >
                  <router-link
                    class="test-link"
                    :to="'/product/' + item.slug + '/'"
                  >
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
                        <div class="shop-item-saleprice">
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
              </template>
              <template v-else-if="womanCategory">
                <div
                  class="test"
                  v-for="(item, i) in this.$store.state.womanProducts"
                  :key="i"
                >
                  <router-link
                    class="test-link"
                    :to="'/product/' + item.slug + '/'"
                  >
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
                        <div class="shop-item-saleprice">
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
              </template>
              <template v-else>
                <p>На жаль, товару не знайдено :c</p>
              </template>
            </div>
            <div class="clearfix"></div>
            <div class="shops-footer">
              <div class="shops-footer-prev">
                <a class="shops-footer-prev-link" href="javascript:void(0);">
                  <img
                    class="shops-footer-prev-img"
                    src="../assets/img/arrow-left.png"
                    alt=""
                  />
                  Назад
                </a>
              </div>
              <div class="shops-footer-counter">
                <ul class="shops-footer-counter-items">
                  <!-- shops-footer-counter-item-active -->
                  <li class="shops-footer-counter-item">
                    <!-- shops-footer-counter-link-active -->
                    <a
                      class="shops-footer-counter-link"
                      >1</a
                    >
                  </li>
                </ul>
              </div>
              <!-- shops-footer-next-link-active -->
              <div class="shops-footer-next">
                <a
                  class="shops-footer-next-link"
                  href="javascript:void(0);"
                  >Вперед
                  <img
                    class="shops-footer-next-img"
                    src="../assets/img/arrow-right.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="shops-footer-nav">
                <div class="shops-footer-prev shops-footer-prev-2">
                  <a class="shops-footer-prev-link" href="#">
                    <img
                      class="shops-footer-prev-img"
                      src="../assets/img/arrow-left.png"
                      alt=""
                    />
                    Назад
                  </a>
                </div>
                <div class="shops-footer-next shops-footer-next-2">
                  <a
                    class="shops-footer-next-link shops-footer-next-link-active"
                    href="#"
                    >Вперед
                    <img
                      class="shops-footer-next-img"
                      src="../assets/img/arrow-right.png"
                      alt=""
                    />
                  </a>
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
  name: "Catalog",
  data() {
    return {
      manCategory: true,
      womanCategory: true,
      routeCategory: this.$route.params.category
    };
  },
  mounted() {
    if (this.$store.state.products.length === 0) {
      this.$store.commit("getProducts");
    } 
    if (this.$store.state.manProducts.length === 0) {
      this.$store.commit("getCategoryManProducts");
    } 
    if (this.$store.state.womanProducts.length === 0) {
      this.$store.commit("getCategoryWomanProducts");
    }
    if (this.routeCategory === 'man-collection') {
      this.manCategory = true;
      this.womanCategory = false;
    } else if (this.routeCategory === 'woman-collection') {
      this.womanCategory = true;
      this.manCategory = false;
    }
  },
};
</script>

<style scoped>
.shops-items {
  min-height: 33vh;
}
.shops-items p {
  font-family: "FuturaDemic";
  font-size: 18px;
  cursor: pointer;
  text-align: center;
}
.shops-items p.active {
  opacity: .5;
}
</style>
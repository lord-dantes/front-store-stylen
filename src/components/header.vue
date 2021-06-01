<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="header-box">
          <div class="col-md-4 col-xs-12">
            <form class="header-form" action="#">
              <input
                class="header-form-search"
                placeholder="Поиск"
                type="search"
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
                <span class="header-text">Бесплатно по Украине</span>
                <br />
                <span class="header-number">+38 (063) 666 66 66</span>
              </div>
              <div class="header-shop">
                <div class="header-shop-heart">
                  <img src="../assets/img/icon-shop.png" alt="heart" /><span
                    class="header-shop-heart-number"
                    >0</span
                  >
                </div>
                <a class="header-shop-basket" href="#Корзина">Корзина</a>
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
            <li class="link-standart">
              <a href="" class="dropdown dropdown-standart">О компании</a>
            </li>
            <li><a href="">Наши услуги</a></li>
            <li><a href="">Новости</a></li>
            <li><a href="">Контакты</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
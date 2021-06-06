<template>
  <footer>
    <div class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 col-sm-3">
            <div class="footer-logo">
              <a href="#"><img src="../assets/img/logo.png" alt="" /></a>
              <div class="footer-number">+38 (095) 093 24 33</div>
            </div>
          </div>
          <div class="col-md-2 col-sm-3 col-xs-6">
            <div class="footer-name-nav">Каталог</div>
            <ul class="footer-nav">
                <li class="footer-item">
                  <router-link class="footer-link" to="/catalog/woman-collection/">Жiноча колекцiя</router-link>
                </li>
                <li class="footer-item">
                  <router-link class="footer-link" to="/catalog/man-collection/">Чоловiча колекцiя</router-link>
                </li>
              </ul>
          </div>
          <div class="col-md-2 col-sm-3 footer-box-item col-xs-6">
           
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <!-- <div class="footer-box-nav-collection footer-box-nav-collection-sm">
              <ul class="footer-nav">
                <li class="footer-item">
                  <router-link class="footer-link" to="/catalog/mans-collection/">Жiноча коллекцiя</router-link>
                </li>
                <li class="footer-item">
                  <router-link class="footer-link" to="/catalog/woman-collection/">Чоловiча коллекцiя</router-link>
                </li>
              </ul>
            </div> -->
          </div>
          <div class="col-md-2 col-sm-3 col-xs-6">
            <div class="footer-name-info">Информацiя</div>
            <ul class="footer-nav">
              <li class="footer-item">
                <a class="footer-link" href="#">Новини</a>
              </li>
              <li class="footer-item">
                <a class="footer-link" href="#">Контакти</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="certificate">
      <div class="certificate-boxvisa">
        <div class="certificate-visa">Можна розраховуватися</div>
        <img src="../assets/img/visa-mastercard.png" alt="" />
      </div>
      <div class="certificate-boxliqpay">
        <div class="certificate-liqpay">Безпечні платежі</div>
        <img src="../assets/img/liqpay.png" alt="" />
      </div>
      <div class="certificate-boxsmm">
        <div class="certificate-smm">Приєднуйся до нас</div>
        <a href="#"><img src="../assets/img/facebook.png" alt="facebook" /></a>
        <a class="certificate-linkinstagramm" href="#"
          ><img src="../assets/img/instagramm.png" alt="instagramm"
        /></a>
        <a href="#"><img src="../assets/img/youtube.png" alt="youtube" /></a>
      </div>
    </div>
  </footer>
</template>

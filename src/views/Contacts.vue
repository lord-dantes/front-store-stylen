<template>
  <main>
    <section class="cart breadcrumbs">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumbs-nav">
              <li class="breadcrumbs-nav-item"><router-link class="breadcrumbs-nav-link" to="/">Головна</router-link></li>
              <li class="breadcrumbs-nav-item">/</li>
              <li class="breadcrumbs-nav-item"><router-link class="breadcrumbs-nav-link" to="/contacts/">Контакти</router-link></li>
            </ul>
          </div>
          <div class="col-md-12">
            <h1 class="shops-title">Контакти</h1>
            <p class="contacts-paragraph">Телефон - +38 (095) 093 24 33</p>
            <p class="contacts-paragraph">Пошта - manager@stylen.online</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d81297.80157658606!2d30.57512012617187!3d50.44936477194942!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1623663123516!5m2!1sru!2sua" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

export default {
 
}
</script>

<style scoped>
.contacts-paragraph {
  text-align: center;
  font-family: 'Futurademic';
  font-size: 24px;
}
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import ProductItem from '../components/product-item'
import Catalog from '../views/Catalog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:slug/',
    name: 'Product Item',
    component: ProductItem
  },
  {
    path: '/catalog/',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/catalog/:category',
    name: 'CatalogCategory',
    component: Catalog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

export default router

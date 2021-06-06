import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import ProductItem from '../components/product-item'
import Catalog from '../views/Catalog'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout'
import Thanks from '../views/Thanks'

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
  },
  {
    path: '/cart/',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout/',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/thanks/',
    name: 'Thanks',
    component: Thanks
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '../views/Front.vue'
import store from '../store'
import swal from 'sweetalert2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Front,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Front/Home.vue'),
        meta: {
          title: '無疑農 | 首頁'
        }
      },
      {
        path: 'brand',
        name: 'Brand',
        component: () => import(/* webpackChunkName: "brand" */ '../views/Front/Brand.vue'),
        meta: {
          title: '無疑農 | 品牌故事'
        }
      },
      {
        path: 'news',
        // name: 'News',
        component: () => import(/* webpackChunkName: "news" */ '../views/Front/News/News.vue'),
        children: [
          {
            path: '',
            name: 'NewsHome',
            component: () => import(/* webpackChunkName: "news" */ '../views/Front/News/NewsHome.vue'),
            meta: {
              title: '無疑農 | 最新消息'
            }
          },
          {
            path: 'singlenews/:id',
            name: 'NewsPages',
            component: () => import(/* webpackChunkName: "news" */ '../views/Front/News/NewsPage.vue'),
            meta: {
              title: '無疑農 | title'
            }
          }
        ]
      },
      {
        path: 'products',
        // name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '../views/Front/Products/Products.vue'),
        children: [
          {
            path: '',
            name: 'ProductsHome',
            component: () => import(/* webpackChunkName: "products" */ '../views/Front/Products/ProductsHome.vue'),
            meta: {
              title: '無疑農 | 小農產品'
            }
          }, {
            path: 'productintroduction/:id',
            name: 'ProductIntroduction',
            component: () => import(/* webpackChunkName: "product" */ '../views/Front/Products/ProductIntroduction.vue'),
            meta: {
              title: '無疑農 | 商品介紹'
            }
          }
        ]
      },
      {
        path: 'cart',
        // name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/Front/Cart/Cart.vue'),
        children: [
          {
            path: '',
            // name: 'CartCheck',
            component: () => import(/* webpackChunkName: "cart" */ '../views/Front/Cart/CartCheck.vue'),
            meta: {
              login: true,
              title: '無疑農 | 購物車'
            }
          }, {
            path: 'cartcheckout',
            // name: 'CartCheckout',
            component: () => import(/* webpackChunkName: "cart" */ '../views/Front/Cart/CartCheckout.vue'),
            meta: {
              login: true,
              title: '無疑農 | 結帳'
            }
          }
        ]
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "orders" */ '../views/Front/Orders.vue'),
        meta: {
          login: true,
          title: '無疑農 | 訂單頁面'
        }
      },
      {
        path: 'privacyterm',
        name: 'PrivacyTerm',
        component: () => import(/* webpackChunkName: "privacypolicy" */ '../views/Front/PrivacyTerm.vue'),
        meta: {
          title: '無疑農 | 隱私權政策'
        }
      },
      {
        path: 'termofservice',
        name: 'TermOfService',
        component: () => import(/* webpackChunkName: "termofservice" */ '../views/Front/TermOfService.vue'),
        meta: {
          title: '無疑農 | 使用者條款'
        }
      },
      {
        path: 'comstomerfaq',
        name: 'Comstomerfaq',
        component: () => import(/* webpackChunkName: "comstomerfaq" */ '../views/Front/Comstomerfaq.vue'),
        meta: {
          title: '無疑農 | 常見問題'
        }
      },
      {
        path: 'shipping',
        name: 'Shipping',
        component: () => import(/* webpackChunkName: "shipping" */ '../views/Front/Shipping.vue'),
        meta: {
          title: '無疑農 | 運送服務方式'
        }
      },
      {
        path: 'payment',
        name: 'Payment',
        component: () => import(/* webpackChunkName: "payment" */ '../views/Front/Payment.vue'),
        meta: {
          title: '無疑農 | 付款服務方式'
        }
      }
    ]
  },
  {
    path: '/adminlogin',
    // name: 'AdminLogin',
    component: () => import(/* webpackChunkName: "adminlogin" */ '../views/Back/Admin/AdminLogin.vue'),
    meta: {
      title: '無疑農 | 管理員登入'
    }
  },
  {
    path: '/admin',
    // name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Back/Admin/Admin.vue'),
    children: [
      {
        path: '',
        // name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Back/Admin/AdminProducts.vue'),
        meta: {
          title: '無疑農 | 商品管理',
          admin: true
        }
      },
      {
        path: 'news',
        // name: 'AdminNews',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Back/Admin/AdminNews.vue'),
        meta: {
          title: '無疑農 | 最新消息',
          admin: true
        }
      },
      {
        path: 'swipers',
        // name: 'AdminSwipers',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Back/Admin/AdminSwipers.vue'),
        meta: {
          title: '無疑農 | 輪播圖管理',
          admin: true
        }
      },
      {
        path: 'members',
        name: 'AdminMembers',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Back/Admin/AdminMembers.vue'),
        meta: {
          title: '無疑農 | 會員管理',
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Back/Admin/AdminOrders.vue'),
        meta: {
          title: '無疑農 | 訂單管理',
          admin: true
        }
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    redirect: '/'
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  const admin = store.getters['admin/admin']
  if (to.meta.login && !user.isLogin && !to.path.includes('admin')) {
    // 如果使用者要登入但沒登入的話執行以下程式碼
    swal.fire({
      icon: 'error',
      title: '請先登入',
      confirmButtonColor: '#8BC34A'
    })
    next('/')
  } else if (to.meta.admin && !admin.isAdmin && !to.path.includes('admin')) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
  window.scrollTo(0, 0)
})

export default router

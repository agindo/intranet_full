import Vue from 'vue';
import Router from 'vue-router';
import AuthLayout from '../views/Pages/AuthLayout.vue';
import DashboardLayout from '../views/Starter/SampleLayout.vue';
import Starter from '../views/Starter/SamplePage.vue';
import store from '../store.js'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'home',
      redirect: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          components: { default: Starter },
          meta: { 
            requiresAuth: true
          }
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue'),
          meta: { 
            requiresAuth: true
          }
        },
        {
          path: '/change_password',
          name: 'change_password',
          component: () => import(/* webpackChunkName: "demo" */ '../views/Sheets/Change_password.vue'),
          meta: { 
            requiresAuth: true
          }
        },
        {
          path: '/layanan_surat',
          // name: 'layanan_surat',
          component: () => import(/* webpackChunkName: "demo" */ '../views/Sheets/Layanan_surat.vue'),
          children: [
            {
              path: '/',
              name: 'surat_masuk',
              component: () => import(/* webpackChunkName: "demo" */ '../views/Sheets/Surat_masuk.vue'),
              meta: { 
                requiresAuth: true
              }
            },
            {
              path: '/layanan_surat/surat_masuk/detail',
              name: 'surat_masuk_detail',
              component: () => import(/* webpackChunkName: "demo" */ '../views/Sheets/Surat_masuk_detail.vue'),
              meta: { 
                requiresAuth: true
              }
            },
            {
              path: '/layanan_surat/surat_keluar',
              name: 'surat_keluar',
              component: () => import(/* webpackChunkName: "demo" */ '../views/Sheets/Surat_keluar.vue'),
              meta: { 
                requiresAuth: true
              }
            },
            {
              path: '/layanan_surat/disposisi_masuk',
              name: 'disposisi_masuk',
              component: () => import(/* webpackChunkName: "demo" */ '../views/Sheets/Disposisi_masuk.vue'),
              meta: { 
                requiresAuth: true
              }
            },
            {
              path: '/layanan_surat/tanda_tangan_digital',
              name: 'tanda_tangan_digital',
              component: () => import(/* webpackChunkName: "demo" */ '../views/Sheets/Tanda_tangan_digital.vue'),
              meta: { 
                requiresAuth: true
              }
            }
          ]
        },
        {
          path: '/absen',
          name: 'absen',
          component: () => import(/* webpackChunkName: "demo" */ '../views/Sheets/Absen.vue'),
          meta: { 
            requiresAuth: true
          }
        },
      ]
    },
    {
      path: '/login',
      component: AuthLayout,
      // name: 'Authentication',
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import(/* webpackChunkName: "pages" */ '../views/Pages/Login.vue'),
          meta: {
            requiresVisitor: true,
          }
        }
      ]
    }
  ],
  // scrollBehavior: (to, from ,savedPosition) => {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   if (to.hash) {
  //     return { selector: to.hash };
  //   }
  //   return { x: 0, y: 0 };
  // }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({ name: 'login' })
    }
    next()
  }else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLoggedIn) {
      next({ name: 'dashboard' });
    } else {
      next()
    }

    // if (this.$store.staff.length == 0) {
    //   this.$store.dispatch('getStaff')
    // }
  }
})

export default router

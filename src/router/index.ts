import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/dashboard/Dashboard'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/booking/:id',
    component: () => import ('../views/booking/TabBar.vue'),
    children: [
      {
        path: '',
        component: () => import ('../views/booking/BookingPage.vue'),
      },
    ]
  },
  {
    path: '/view-booking/',
    component: () => import ('../views/booking/ViewBooking.vue')
  },
  {
    path: '/user/:id/',
    component: () => import ('../views/user/TabBar.vue'),
    children: [
      {
        path: '',
        component: () => import ('../views/user/UserPage.vue'),
      },
    ]
  },
  {
    path: '/add-user/',
    component: () => import ('../views/user/AddUser.vue')
  },
  {
    path: '/quotation/:id',
    component: () => import ('../views/quote/QuotePage.vue')
  },
  {
    path: '/view-quotes/',
    component: () => import ('../views/quote/ViewQuote.vue')
  },
  {
    path: '/login/',
    component: () => import ('../views/auth/LoginPage.vue')
  },
  {
    path: '/dashboard/:id',
    component: () => import ('../views/dashboard/DashboardPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

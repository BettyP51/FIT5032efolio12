import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AccessDeniedView from '../views/AccessDeniedView.vue';
import ContactView from '../views/ContactView.vue';
import ServiceView from '../views/ServiceView.vue';
import ResourceView from '../views/ResourceView.vue';
import { store } from '../store.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { requiresAuth: true },
  },
  {
    path: '/service',
    name: 'Service',
    component: ServiceView,
    meta: { requiresAuth: true }, 
  },
  {
    path: '/resources',
    name: 'Resources',
    component: ResourceView,
    meta: { requiresAuth: true }, 
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

  router.beforeEach((to, from, next) => {
    const isAuthenticated = store.isAuthenticated;
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: 'AccessDenied' });
    } else {
      next();
    }
  });

export default router;

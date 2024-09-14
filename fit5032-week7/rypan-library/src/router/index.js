import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import RegisterView from '../views/RegisterView.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/signin',
    name: 'FireSignin',
    component: FirebaseSigninView
  },
  {
    path: '/register',
    name: 'Fireregister',
    component: FirebaseRegisterView
  },
  {
    path: '/register2',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
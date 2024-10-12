<template>
  <div class="container">
    <header class="py-3">
      <!-- Bootstrap Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- Logo on the Left -->
          <a class="navbar-brand" href="#">
            <Logo />
          </a>
          <!-- Hamburger Button for Small Screens -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Navbar Links -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link" active-class="active" aria-current="page">
                  Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/service" class="nav-link" active-class="active">
                  Service
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/resources" class="nav-link" active-class="active">
                  Resource Center
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" active-class="active">
                  About Us
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" active-class="active">
                  Contact Us
                </router-link>
              </li>
              <li class="nav-item" v-if="!store.isAuthenticated">
                <router-link to="/login" class="nav-link" active-class="active">
                  Login
                </router-link>
              </li>
              <li class="nav-item" v-if="!store.isAuthenticated">
                <router-link to="/register" class="nav-link" active-class="active">
                  Sign Up
                </router-link>
              </li>
              <li class="nav-item" v-if="store.isAuthenticated">
                <a href="#" @click="logout" class="nav-link">
                  Logout
                </a>
              </li>
            </ul>
            <!-- Right Side: Language Select and Search Bar -->
            <LanguageSearchBar />
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { store } from '@/store.js'; 
import Logo from '@/components/Logo.vue';
import LanguageSearchBar from './LanguageSearchBar.vue';

export default {
  components: {
    Logo,
    LanguageSearchBar,
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      store.logout(); // Call the logout method from the store
      router.push('/login'); // Redirect to the login page
    };

    return { store, logout };
  }
};
</script>

<style scoped>
/* General Nav-Link Styles */
.nav-link {
  color: #007bff; 
  border: none; 
  background-color: transparent; 
  padding: 0.5rem 1rem; 
  border-radius: 0.25rem; 
}

.nav-link.active {
  background-color: transparent;
  color: #007bff;
  border: none; 
}

.nav-link:hover, .nav-link:focus {
  color: #0056b3;
  text-decoration: underline;
}

/* Logo size adjustment */
.logo img {
  width: 60px;
  height: auto;
}
</style>

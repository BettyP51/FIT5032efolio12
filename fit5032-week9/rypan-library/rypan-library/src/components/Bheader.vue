<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page" active-class="active">
            Home (Week9)
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">
            Add Book
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">
            Get Book Count
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">
            Get Weather
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">
            Count Book API
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetAllBookAPI" class="nav-link" active-class="active">
            Get All Book API
          </router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/signin" class="nav-link" active-class="active">
            Firebase Login
          </router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/register" class="nav-link" active-class="active">
            Firebase Register
          </router-link>
        </li>
        <!-- Show logout if authenticated -->
        <li v-if="isAuthenticated" class="nav-item">
          <button @click="logout" class="nav-link">Logout</button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from 'vue-router'

const isAuthenticated = ref(false)
const auth = getAuth()
const router = useRouter()

// Check the authentication state
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isAuthenticated.value = !!user  // true if a user is authenticated, false otherwise
  })
})

// Logout function
const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out successfully")
      isAuthenticated.value = false
      router.push("/signin")
    })
    .catch((error) => {
      console.log("Error logging out:", error)
    })
}
</script>

<style scoped>
</style>

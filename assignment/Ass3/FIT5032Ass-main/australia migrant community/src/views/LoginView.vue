<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input v-model="username" type="text" id="username" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" class="form-control" />
        </div>
        <div v-if="errorMessage" class="text-danger text-center mb-3">{{ errorMessage }}</div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
      <div class="register-link text-center mt-3">
        <p>Don't have an account?</p>
        <button class="btn btn-secondary" @click="goToRegister">Register Here</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store.js';

export default {
  name: 'LoginView',
  setup() {
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const handleLogin = () => {
      if (store.login(username.value, password.value)) {
        errorMessage.value = '';
        router.push({ name: 'Home' });
      } else {
        errorMessage.value = 'Can not login(Please check your username or password correctly input)';
      }
    };

    const goToRegister = () => {
      router.push({ name: 'Register' });
    };

    return {
      username,
      password,
      errorMessage,
      handleLogin,
      goToRegister,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7faff;
  padding-top: 0px;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-120px);
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  box-sizing: border-box;
}

.btn-block {
  width: 100%;
  padding: 10px;
}

.register-link {
  margin-top: 20px;
}

.register-link button {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.register-link button:hover {
  background-color: #5a6268;
}
</style>
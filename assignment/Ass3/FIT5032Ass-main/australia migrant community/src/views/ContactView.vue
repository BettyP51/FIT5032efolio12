<template>
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p v-if="store.isUser()">
        If you have any questions or inquiries, please feel free to contact us using the form below.
      </p>
      <p v-if="store.isAdmin()">
        As an admin, you can use this form to receive queries and manage communications with users.
      </p>
      
      <!-- Form visible to all users -->
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="formData.name" type="text" id="name" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="formData.email" type="email" id="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea v-model="formData.message" id="message" rows="5" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  
      <!-- Additional admin-specific options -->
      <div v-if="store.isAdmin()" class="admin-options">
        <h2>Admin Tools</h2>
        <p>As an administrator, you can manage the received messages here.</p>
        <button class="btn btn-secondary" @click="viewMessages">View All Messages</button>
        <button class="btn btn-secondary" @click="exportMessages">Export Messages</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { store } from '../store.js';
  
  const formData = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    alert(`Thank you, ${formData.value.name}. We have received your message.`);
    clearForm();
  };
  
  const clearForm = () => {
    formData.value.name = '';
    formData.value.email = '';
    formData.value.message = '';
  };
  
  // Admin-specific methods
  const viewMessages = () => {
    alert('Viewing all messages (Admin function).');
  };
  
  const exportMessages = () => {
    alert('Exporting messages (Admin function).');
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #275fda;
    margin-bottom: 20px;
    text-align: center;
  }
  
  p {
    margin-bottom: 20px;
    text-align: center;
    color: #333;
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
  
  .btn {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .admin-options {
    margin-top: 30px;
    background-color: #f7faff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .admin-options h2 {
    color: #275fda;
    margin-bottom: 15px;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
  }
  </style>
  
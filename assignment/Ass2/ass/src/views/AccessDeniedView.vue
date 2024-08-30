<template>
    <div class="access-denied-container">
      <div class="access-denied-box">
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
        <router-link to="/login" class="login-link">Please login</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccessDeniedView',
  };
  </script>
  
  <style scoped>
  .access-denied-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
  }
  
  .access-denied-box {
    text-align: center;
    padding: 30px;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #dc3545; /* Bootstrap's red color */
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .login-link {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .login-link:hover {
    background-color: #0056b3;
  }
  </style>
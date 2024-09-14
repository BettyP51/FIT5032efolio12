<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">
              Home (Week7)
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addbook" class="nav-link">
              Add Book
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signin" class="nav-link">
              Firebase Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              Firebase Register
            </router-link>
          </li>
          <!-- Show logout if authenticated -->
          <li class="nav-item">
            <button @click="logout" class="nav-link">Logout</button>
          </li>
        </ul>
      </header>
    </div>
  </template>
  
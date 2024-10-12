<template>
    <div class="d-flex align-items-center">
      <!-- Language Selector -->
      <div class="dropdown me-3">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="languageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ selectedLanguage }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('English')"
              >English</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('简体中文')"
              >简体中文</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('繁體中文')"
              >繁體中文</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('العربية')"
              >العربية</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('Español')"
              >Español</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('Français')"
              >Français</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('Deutsch')"
              >Deutsch</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('हिन्दी')"
              >हिन्दी</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('日本語')"
              >日本語</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('한국어')"
              >한국어</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('Русский')"
              >Русский</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('Italiano')"
              >Italiano</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('Português')"
              >Português</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('Türkçe')"
              >Türkçe</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('ภาษาไทย')"
              >ภาษาไทย</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="changeLanguage('Tiếng Việt')"
              >Tiếng Việt</a
            >
          </li>
        </ul>
      </div>
  
      <!-- Search Bar -->
      <form class="d-flex" @submit.prevent="search">
        <input
          class="form-control me-2 border-primary"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchQuery"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { locale } = useI18n();
  
  // Initial selected language, default is 'English'
  const selectedLanguage = ref('English');
  const searchQuery = ref('');
  
  // Language mapping
  const LanguageMapping = {
  'English': 'en',
  '简体中文': 'zh',
  '繁體中文': 'zhTW',
  'العربية': 'ar',
  'Español': 'es',
  'Français': 'fr',
  'Deutsch': 'de',
  'हिन्दी': 'hi',
  '日本語': 'ja',
  '한국어': 'ko',
  'Русский': 'ru',
  'Italiano': 'it',
  'Português': 'pt',
  'Türkçe': 'tr',
  'ภาษาไทย': 'th',
  'Tiếng Việt': 'vi',
};
  
  // Method to change language
  const changeLanguage = (language) => {
    selectedLanguage.value = language;
    locale.value = languageMapping[language] || 'en';
    console.log('Language changed to:', locale.value);
  };
  
  const search = () => {
    console.log('Search query:', searchQuery.value);
  };
  </script>
  
  <style scoped>
  /* Language Select */
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: white;
  }
  
  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  
  /* General Button */
  .btn {
    color: #007bff;
  }
  
  /* Search Button */
  .btn-outline-success {
    color: white;
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-outline-success:hover {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
  
  /* Dropdown Menu */
  .dropdown-menu {
    background-color: #f8f9fa;
    border-color: #007bff;
  }
  
  .dropdown-item {
    color: #007bff;
  }
  
  .dropdown-item:hover,
  .dropdown-item:focus {
    background-color: #e9ecef;
    color: #0056b3;
  }
  
  /* Search Bar Input */
  .form-control {
    border-radius: 0.25rem;
    border-color: #007bff;
    color: #007bff;
  }
  
  .form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  </style>
  

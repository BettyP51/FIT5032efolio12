
<template>
    <div>
      <h1>Book Count</h1>
      <pre>{{ jsondata }}</pre> 
      <div v-if="error">
        <p>Error fetching data: {{ error.message }}</p> 
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        jsondata: null, 
        error: null, 
      };
    },
    mounted() {
      this.getBookCountAPI();
    },
    methods: {
      async getBookCountAPI() {
        try {
          const response = await axios.get('https://countbooks-rydvbursha-uc.a.run.app');
          this.jsondata = response.data;
          this.error = null; 
        } catch (error) {
          console.error('Error fetching book count:', error);
          this.error = error;
          this.jsondata = null; 
        }
      }
    }
  };
  </script>
  
<template>
    <div>
      <h1>All Books</h1>
      <pre>{{ booksJson }}</pre>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        booksJson: '',
      };
    },
    async created() {
    try {
        const response = await axios.get('https://getallbooks-rydvbursha-uc.a.run.app');
        this.booksJson = JSON.stringify(response.data, null, 2);
    } catch (error) {
        console.error("Error fetching books:", error);
        this.booksJson = `Error fetching books data: ${error.message}`;
        if (error.response) {
            this.booksJson += `\nStatus: ${error.response.status}\nData: ${JSON.stringify(error.response.data)}`;
        }
    }
}
}
</script>
  
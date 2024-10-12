<template>
    <div>
      <h3>Rating</h3>
      <div class="star-rating">
        <span
          v-for="star in 5"
          :key="star"
          :class="{ 'active': rating >= star }"
          @click="setRating(star)"
        >&#9733;</span>
      </div>
      <p>Average Rating: {{ averageRating.toFixed(1) }} / 5</p>
      <button @click="resetRating" class="btn btn-secondary">Reset Rating</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rating: 0,
        ratings: [] // Local array to store ratings
      };
    },
    computed: {
      averageRating() {
        const sum = this.ratings.reduce((a, b) => a + b, 0);
        return this.ratings.length ? sum / this.ratings.length : 0;
      }
    },
    methods: {
      setRating(star) {
        if (!this.hasRated()) {
          this.rating = star;
          this.ratings.push(this.rating);
          this.saveRatings();
          alert('Thank you for your rating!');
        } else {
          alert('You have already rated.');
        }
      },
      hasRated() {
        return this.ratings.includes(this.rating);
      },
      resetRating() {
        this.rating = 0;
        this.ratings = [];
        this.saveRatings();
      },
      saveRatings() {
        localStorage.setItem('ratings', JSON.stringify(this.ratings));
      },
      loadRatings() {
        const savedRatings = localStorage.getItem('ratings');
        if (savedRatings) {
          this.ratings = JSON.parse(savedRatings);
        }
      }
    },
    mounted() {
      this.loadRatings();
    }
  };
  </script>
  
  <style scoped>
  .star-rating {
    display: flex;
    font-size: 24px;
  }
  
  .star-rating span {
    cursor: pointer;
    color: lightgray;
  }
  
  .star-rating span.active {
    color: gold;
  }
  
  .btn {
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  .btn-secondary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-secondary:hover {
    background-color: #0056b3; 
  }
  </style>
  
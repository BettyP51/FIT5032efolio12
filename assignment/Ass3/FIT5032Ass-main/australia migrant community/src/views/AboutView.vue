<template>
  <div class="about-container">
    <h1 class="text-center">About Our Community</h1>
    <p class="text-center">
      Welcome to the Australia Migrant Community! We are dedicated to supporting and empowering migrants as they integrate into Australian society.
    </p>

    <section class="intro-section">
      <h2>Our Mission</h2>
      <p>
        We aim to provide a platform that offers migrants the resources, tools, and connections they need to thrive in Australia.
      </p>
    </section>

    <section class="history-section">
      <h2>Our History</h2>
      <p>
        Founded in 2024, we have grown to support thousands of migrants across Australia, offering essential services and resources.
      </p>
    </section>

    <section class="values-section">
      <h2>Our Core Values</h2>
      <ul>
        <li>Inclusivity</li>
        <li>Empowerment</li>
        <li>Collaboration</li>
        <li>Innovation</li>
      </ul>
    </section>

    <!-- Section for all users -->
    <section class="team-section">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="member">
          <!-- <img src="path-to-image" alt="Team Member Name"> -->
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <!-- More team members -->
      </div>
    </section>

    <!-- Section only visible to admins -->
    <section v-if="store.isAdmin()" class="admin-partners-section">
      <h2>Our Partners</h2>
      <p>We collaborate with various organizations to offer comprehensive support.</p>
      <ul class="partners-list">
        <li>Organization A</li>
        <li>Organization B</li>
        <!-- More partners -->
      </ul>
    </section>

    <!-- Section for all users -->
    <section class="achievements-section">
      <h2>Our Achievements</h2>
      <ul>
        <li>Supported over 10,000 migrants</li>
        <li>Hosted 200+ workshops</li>
        <!-- More achievements -->
      </ul>
    </section>

    <!-- Section for admins with additional contact details -->
    <section class="contact-section">
      <h2>Get in Touch</h2>
      <p>Contact us for more information or to get involved!</p>
      <p v-if="store.isAdmin()">Admin Support: admin_support@example.com</p>
    </section>
  </div>
</template>

<script setup>
import { store } from '../store.js'; 
</script>

<style scoped>
.about-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.text-center {
  text-align: center;
}

section {
  margin: 20px 0;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
}

.team-members .member {
  flex: 1;
  margin: 10px;
}

.partners-list {
  list-style-type: none;
  padding: 0;
}

.partners-list li {
  margin-bottom: 10px;
}
</style>

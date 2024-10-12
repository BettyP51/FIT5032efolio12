<template>
  <div class="resource-container">
    <h1 class="text-center">Resource Center</h1>
    <p class="text-center">
      Here you will find a variety of resources to help you integrate into the Australian community.
    </p>

    <!-- User perspective -->
    <div class="resource-cards" v-if="store.isUser()">
      <section class="resource-card">
        <h2>Legal Resources</h2>
        <h3>Information</h3>
        <ul>
          <li>Immigration Law Guidelines</li>
          <li>Family Law Overview</li>
          <li>Employment Rights Manuals</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Visa Eligibility Checker</li>
          <li>Legal Document Templates</li>
          <li>Online Legal Consultation Booking</li>
        </ul>
      </section>
      <section class="resource-card">
        <h2>Employment Resources</h2>
        <h3>Information</h3>
        <ul>
          <li>Career Development Guides</li>
          <li>Resume and Cover Letter Writing Tips</li>
          <li>Interview Preparation Resources</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Job Search Engines</li>
          <li>Online Career Counseling Services</li>
          <li>Resume Builder Tools</li>
        </ul>
      </section>
      <section class="resource-card">
        <h2>Health Resources</h2>
        <h3>Information</h3>
        <ul>
          <li>Local Clinics and Hospitals Directory</li>
          <li>Mental Health Support Groups</li>
          <li>Insurance Information and Guidelines</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Health Services Locator</li>
          <li>Online Mental Health Assessments</li>
          <li>Insurance Plan Comparison Tool</li>
        </ul>
      </section>
      <section class="resource-card">
        <h2>Education Resources</h2>
        <h3>Information</h3>
        <ul>
          <li>Language Learning Program Overviews</li>
          <li>Guide to Adult Education Options</li>
          <li>Higher Education Institutions Directory</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Language Learning Apps</li>
          <li>Online Course Platforms</li>
          <li>Education Pathway Planning Tool</li>
        </ul>
      </section>
      <section class="resource-card">
        <h2>Social Welfare Resources</h2>
        <h3>Information</h3>
        <ul>
          <li>Housing Assistance Programs Overview</li>
          <li>Financial Aid and Budgeting Advice</li>
          <li>Access to Social Services and Benefits</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Housing Support Services Locator</li>
          <li>Financial Aid Calculators</li>
          <li>Social Services Access Portal</li>
        </ul>
      </section>
    </div>

    <!-- Admin perspective -->
    <div class="admin-resource-management" v-if="store.isAdmin()">
      <h2>Admin Management</h2>
      <p>As an administrator, you can manage and oversee the resources available to users.</p>
      <div class="admin-service-cards">
        <div class="admin-service-card" v-for="service in adminServices" :key="service.title">
          <h3>{{ service.title }}</h3>
          <button class="btn btn-primary">{{ service.action }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store.js';

const adminServices = ref([
  { title: 'Manage Legal Resources', action: 'Edit Services' },
  { title: 'Manage Employment Resources', action: 'Edit Services' },
  { title: 'Manage Health Resources', action: 'Edit Services' },
  { title: 'Manage Education Resources', action: 'Edit Services' },
  { title: 'Manage Social Welfare Resources', action: 'Edit Services' }
]);
</script>

<style scoped>
.resource-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.text-center {
  text-align: center;
}

.resource-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
}

.resource-card {
  background-color: #f7faff;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  flex: 1;
  min-width: 270px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.resource-card h2 {
  font-size: 1.5rem;
  color: #275fda;
  margin-bottom: 10px;
}

.resource-card h3 {
  font-size: 1.25rem;
  color: #333;
  margin-top: 15px;
}

.resource-card ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.resource-card ul li {
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
}

/* Admin section styles */
.admin-resource-management {
  background-color: #f1f7ff;
  border-radius: 8px;
  padding: 30px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.admin-service-cards {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adds space between each card */
}

.admin-service-card {
  background-color: #e7f0ff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-service-card h3 {
  font-size: 1.4rem;
  color: #275fda;
  margin: 0;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>

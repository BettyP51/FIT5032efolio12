<template>
  <div class="service-container">
    <h2 class="text-center">Our Services</h2>
    
    <!-- Services visible to regular users -->
    <div class="service-grid" v-if="store.isUser()">
      <div class="service-card" v-for="(service, index) in services" :key="index">
        <h3>{{ service.title }}</h3>
        <ul>
          <li v-for="(item, index) in service.items" :key="index">{{ item }}</li>
        </ul>
        <RatingComponent />
      </div>
    </div>

    <!-- Services visible to administrators -->
    <div class="admin-service-grid" v-if="store.isAdmin()">
      <h3>Admin Services Management</h3>
      <p>As an admin, you have access to manage and oversee the services provided to users.</p>
      <div class="admin-service-card">
        <h4>Manage Legal Advice Services</h4>
        <button class="btn btn-primary">Edit Services</button>
      </div>
      <div class="admin-service-card">
        <h4>Manage Employment Assistance Services</h4>
        <button class="btn btn-primary">Edit Services</button>
      </div>
      <div class="admin-service-card">
        <h4>Manage Healthcare Resources</h4>
        <button class="btn btn-primary">Edit Services</button>
      </div>
      <div class="admin-service-card">
        <h4>Manage Educational Support Services</h4>
        <button class="btn btn-primary">Edit Services</button>
      </div>
      <div class="admin-service-card">
        <h4>Manage Social Welfare Services</h4>
        <button class="btn btn-primary">Edit Services</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store.js';
import RatingComponent from '@/components/Rating.vue'; 

const services = ref([
  {
      title: 'Legal Advice',
      items: [
      'Personal Legal Consultation',
      'Assistance with Asylum Applications',
      'Representation in Family Law Matters',
      'Employment Rights Protection',
      'Visa Application Support Services',
      'Legal Workshops and Seminars'
      ]
  },
  {
      title: 'Employment Assistance',
      items: [
      'Career Coaching Sessions',
      'Job Placement and Matching Services',
      'Interview Preparation Workshops',
      'Resume and Cover Letter Assistance',
      'Workplace Integration Programs',
      'Employment Rights Advocacy'
      ]
  },
  {
      title: 'Healthcare Resources',
      items: [
      'Access to Health Services',
      'Mental Health Counseling',
      'Chronic Disease Management Programs',
      'Insurance Enrollment Assistance',
      'Health Awareness Workshops',
      'Support Groups for Specific Health Issues'
      ]
  },
  {
      title: 'Educational Support',
      items: [
      'Personalized Language Tutoring',
      'Adult Education Programs',
      'Higher Education Counseling',
      'Scholarship Application Assistance',
      'Vocational Training Enrollment',
      'Mentorship Programs'
      ]
  },
  {
      title: 'Social Welfare',
      items: [
      'Housing Support Services',
      'Financial Aid Counseling',
      'Access to Social Services',
      'Family Support Programs',
      'Community Integration Services',
      'Legal Aid for Welfare Issues'
      ]
  }
]);
</script>

<style scoped>
.service-card {
  background-color: #f7faff; 
  border: none; 
  border-radius: 12px; 
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.service-card h3 {
  font-size: 1.5rem; 
  color: #275fda; 
}

.service-card ul {
  list-style: none;
  padding: 0;
}

.service-card ul li {
  font-size: 1.1rem; 
  color: #555;
  margin-bottom: 8px;
}

.admin-service-grid {
  margin-top: 20px;
}

.admin-service-card {
  background-color: #e7f0ff; 
  border: none; 
  border-radius: 12px; 
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.admin-service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.admin-service-card h4 {
  font-size: 1.4rem; 
  color: #275fda; 
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>

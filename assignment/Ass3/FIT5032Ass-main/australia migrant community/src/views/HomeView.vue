<template>
  <div class="welcome-container">
    <h1 class="text-center">{{ $t('Welcome to the Australia Migrant Community') }}</h1>
    <p class="text-center">
      {{ $t('We respect and celebrate diversity, and are committed to supporting migrants from all over the world. We strive to create a user-friendly online platform that supports multiple languages and is suitable for users with varying levels of digital literacy. By providing a centralized information hub that covers health, legal services, language learning, and more, we help everyone better integrate into their new environment in Australia and build an inclusive and thriving community.') }}
    </p>
    <video controls class="homepage-video">
      <source :src="videoUrl" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="services-section">
      <h2 class="section-title">Our Services</h2>
      <div class="service-card">
        <h3><i class="icon-legal"></i> Legal Advice</h3>
        <p>Legal advice services offer comprehensive support for migrants, including assistance with asylum applications, family law matters, labor rights, and other immigration-related legal issues. Whether you're navigating complex legal systems or seeking guidance on your rights, our experienced legal professionals are here to help you every step of the way.</p>
        <button class="learn-more-button">Find More</button>
      </div>
      <div class="service-card">
        <h3><i class="icon-employment"></i> Employment Assistance</h3>
        <p>Employment assistance programs provide essential resources for job seekers, including career counseling, resume building, interview preparation, and access to job listings. We work closely with local businesses and organizations to connect you with employment opportunities that match your skills and qualifications, helping you build a successful career in Australia.</p>
        <button class="learn-more-button">Find More</button>
      </div>
      <div class="service-card">
        <h3><i class="icon-healthcare"></i> Healthcare Resources</h3>
        <p>Healthcare resources include information on local clinics and hospitals, mental health support services, and comprehensive insurance guidance. Our aim is to ensure that all migrants have the information and support they need to access quality healthcare and maintain their well-being during their transition to life in Australia.</p>
        <button class="learn-more-button">Find More</button>
      </div>
      <div class="service-card">
        <h3><i class="icon-education"></i> Educational Support</h3>
        <p>Educational support services provide migrants with access to a wide range of learning opportunities, including language courses, vocational training, and higher education programs. Whether you're looking to improve your language skills, gain new qualifications, or pursue further education, we are here to support your academic and professional growth.</p>
        <button class="learn-more-button">Find More</button>
      </div>
      <div class="service-card">
        <h3><i class="icon-social"></i> Social Welfare</h3>
        <p>Social welfare services are designed to support the well-being of migrants and their families by providing access to essential resources such as housing assistance, financial aid, and social services. We work to ensure that every member of the migrant community has the support they need to thrive and integrate into their new environment.</p>
        <button class="learn-more-button">Find More</button>
      </div>
    </div>

    <div class="success-stories">
      <h2 class="section-title">Success Stories</h2>
      <div class="story-card">
        <img src="../assets/success1.jpg" alt="Success Story 1">
        <p>John Doe started his own business after receiving our support.</p>
      </div>
      <div class="story-card">
        <img src="../assets/success2.jpg" alt="Success Story 2">
        <p>Maria successfully integrated into the community through our programs.</p>
      </div>
    </div>

    <div class="news-announcements">
      <h2 class="sectin-title">Latest News & Announcements</h2>
      <ul>
        <li><a href="link_to_article">New immigration policy update...</a></li>
        <li><a href="link_to_article">Upcoming community events...</a></li>
      </ul>
    </div>
  
  </div>
</template>

<script setup>
import { ref } from 'vue';
import videoFile from '@/assets/welcome_video.mp4';

const videoUrl = ref(videoFile);
</script>

<style scoped>
/* General Styles */
.welcome-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  margin-top: -20px;
  padding: 20px;
  background-color: transparent;
  box-shadow: none;
}

h1 {
  color: #275fda;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 30px;
}

.homepage-video {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.services-section, .success-stories, .news-announcements {
  margin: 40px 0;
  text-align: left;
}

.section-title {
  font-size: 1.8rem;
  color: #275fda;
  margin-bottom: 20px;
}

.service-card, .story-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
}

.learn-more-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #275fda;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.learn-more-button:hover {
  background-color: #194b9a;
}

.success-stories .story-card img {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.news-announcements ul {
  list-style: none;
  padding: 0;
}

.news-announcements ul li {
  margin-bottom: 10px;
}

.news-announcements ul li a {
  color: #275fda;
  text-decoration: none;
}

.news-announcements ul li a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .service-card, .story-card {
    padding: 15px;
  }

  .learn-more-button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .homepage-video {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .homepage-video {
    max-width: 100%;
    height: auto;
  }

  .service-card, .story-card {
    margin-bottom: 15px;
  }

  .success-stories .story-card img {
    width: 100%;
  }

  .services-section {
    display: flex;
    flex-direction: column;
  }
}
</style>

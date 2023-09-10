<template>
    <div class="card">
      <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
        <img :src="empPersonalStore ? empPersonalStore.imageUrl : ''"
        
        width="120" alt="Profile" class="img-thumbnail">
  
        <h2>{{ empPersonalStore ? empPersonalStore.fullName : 'Loading...' }}</h2>
        <h3>{{ empPersonalStore ? empPersonalStore.designation : 'Loading...' }}</h3>
        <h3>{{ empPersonalStore ? empPersonalStore.id : 'Loading...' }}</h3>
        <!-- <div class="social-links mt-2">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div> -->
      </div>
    </div>
  </template>
  
  <script>

  import { useUserStore } from '../stores/user'
  export default {
    name: 'HrEmpIndProfileCard',
    setup() {
            const empPersonalStore = useUserStore();
            return { empPersonalStore };
        },
  }
  </script>
  
  <style scoped></style>
  
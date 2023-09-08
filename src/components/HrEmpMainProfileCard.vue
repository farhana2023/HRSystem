<template>
  <div class="card">
    <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
      <img
        :src="employeeData ? employeeData.image : ''"
        width="120"
        alt="Profile"
        class="rounded-circle"
      />

      <h2>{{ employeeData ? employeeData.fullName : 'Loading...' }}</h2>
      <h3>{{ employeeData ? employeeData.designation : 'Loading...' }}</h3>
      <h3>{{ employeeData ? employeeData.id : 'Loading...' }}</h3>
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
import { computed } from 'vue'
import { useEmpStore } from '../stores/empStore'
export default {
  name: 'HrEmpMainProfileCard',

  
  setup() {
    const empStore = useEmpStore()
    const employeeData = computed(() => empStore.getEmp)
    console.log('emstore', employeeData)
    return {
      employeeData
    }
  }
}
</script>

<style scoped></style>

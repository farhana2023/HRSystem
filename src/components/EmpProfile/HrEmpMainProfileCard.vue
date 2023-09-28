<template>
  <div class="card Color">
    <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
      <img :src="employeeData ? employeeData.imageUrl : ''"
        
        width="120" alt="Profile" class="img-thumbnail">

      <h2>{{ employeeData ? employeeData.fullName : 'Loading...' }}</h2>
      <h3>{{ employeeData ? employeeData.designation : 'Loading...' }}</h3>
      <h3>{{ employeeData ? employeeData.id : 'Loading...' }}</h3>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useEmpStore } from '@/stores/empStore'
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

<style scoped>
.Color {
  background-color:  #6082B6;
  color: white;
  font-weight: bold;
}
</style>

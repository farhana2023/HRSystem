<template>
  <div class="card Color">
    <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
      <img :src="employeeData ? employeeData.imageUrl : ''"
        
        width="120" alt="Profile" class="img-thumbnail">

      <h2>{{ employeeData ? employeeData.fullName : 'Loading...' }}</h2>
      <h3>{{ employeeData ? employeeData.designation : 'Loading...' }}</h3>
      <h3>{{ employeeData ? employeeData.id : 'Loading...' }}</h3>
      <div class="d-flex justify-content-center mb-2">
              <button  @click.prevent="SendMessage(employeeData)" type="button" class="btn btn-outline-info ms-1">Message</button>
            </div>
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
  },

  methods:{
    SendMessage(employee) {
      console.log('employee', employee)

      this.$router.push({
        name: 'emp_SendMessage',
        query: {
          id:  employee.userId,
          email: employee.email,
          fullname: employee.fullName
        }
      })
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

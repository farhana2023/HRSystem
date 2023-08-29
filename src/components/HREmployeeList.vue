<template>
<div class="card">
    <div class="card-body">
        <h5 class="card-title">List of the Employee</h5>
       
        <!-- Bordered Table -->
        <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    
                    <th scope="col">Start Date</th>
                    <th scope="col">Department</th>
                  </tr>
                </thead>



                <tbody>
                    <tr v-for="employee in employees" :key="employee.EmpID">
                    <th scope="row">{{ employee.EmpID  }}</th>

                    <td><RouterLink :to="{name:'employeeDetails', params: { EmpID:employee.EmpID}}">{{ employee.preferredFullName }}</RouterLink></td>
                    <td>{{ employee.jobTitleName }}</td>
                    <td>{{ employee.joiningDate }}</td>
                    <td>{{ employee.department }}</td>
        
                  </tr>
                
                </tbody>
        </table>
              <!-- End Bordered Table -->

   
           
   
               </div>
             </div>
   </template>

<script>

import { RouterLink } from 'vue-router'
export default {
  name: 'HREmployeeList',
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>








<style  scoped>

</style>
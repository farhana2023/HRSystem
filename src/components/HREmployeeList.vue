<template>
<div class="card">
    <div class="card-body">
        <h5 class="card-title">List of the Employee</h5>
        <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
        <!-- Bordered Table -->
        <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Age</th>
                    <th scope="col">Start Date</th>
                  </tr>
                </thead>



                <tbody>
                    <tr v-for="employee in employees" :key="employee.EmpID">
                    <th scope="row">{{ employee.EmpID  }}</th>
                
                    <td>{{ employee.preferredFullName }}</td>
                    <td>{{ employee.jobTitleName }}</td>
                    <td>28</td>
                    <td>2016-05-25</td>
                  </tr>
                
                </tbody>
        </table>
              <!-- End Bordered Table -->

   
           
   
               </div>
             </div>
   </template>

<script>
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
<template>
 <div class="card">
            <div class="card-body">
              <h5 class="card-title">List of the Employee</h5>

              <!-- Bordered Table -->

           
              <table  class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Start Date</th>

                  </tr>
                </thead>
                <tbody>
                  <tr  v-for="lstEmp in  empstore.emplist">
                    
                    <td>{{ lstEmp.EmpID }} </td>
                    <td>{{ lstEmp.FullName }} </td>
                    <td>{{ lstEmp.Position }}</td>
                    <td>{{ lstEmp.Startdate }}</td>
                  </tr>

           
            
                </tbody>
              </table>
              <!-- End Bordered Table -->

        

            </div>
          </div>
</template>

<script>
 
import { useEmpStore } from '../stores/ListEmp';

    export default {

      setup() {
      const empstore = useEmpStore();
      return { empstore };
    }
  }

</script>

<style scoped>

</style>
<!-- <template>
 <div class="card">
    <div class="card-body">
      <h5 class="card-title">List of the Employee</h5>

       
           
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

                    <HrEmpList: lstEmp="lstEmp"/>

                    <td>{{ lstEmp.FullName }} </td>
                    <td>{{ lstEmp.FullName }} </td>
                    <td>{{ lstEmp.Position }}</td>
                    <td>{{ lstEmp.Startdate }}</td>
                  </tr>

           
            
                </tbody>
              </table> 


        

            </div>
          </div>
</template>

<script>
// HrEmpList from '@/components/HrEmpList.vue'

import { useEmpStore } from '../stores/ListEmp';

    export default {
    //  components: { HrEmpList },
      setup() {
      const empstore = useEmpStore();
      return { empstore };
    }
  }

</script>

<style scoped>

</style> -->
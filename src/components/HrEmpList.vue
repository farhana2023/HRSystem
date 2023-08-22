<template>
 <div class="card">
    <div class="card-body">
    

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
                <tr>
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
    export default {
        props:['lstEmp']
    }
</script>

<style  scoped>

</style>
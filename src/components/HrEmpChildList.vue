<template>  
<section class="section">
       <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">List of the Employee</h5>
                <div class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns search-results"><div class="datatable-top">
                    <div class="datatable-dropdown">
                    <label>
                    <select class="datatable-selector"><option value="5">5</option><option value="10" selected="">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option></select> entries per page
                    </label>
                </div>
            <div class="datatable-search">
                <input class="datatable-input" placeholder="Search..." type="search" title="Search within table">
            </div>
            </div>
            <div class="datatable-container">

            <table  class="table table-bordered">
             <thead>
               <tr>
                 <th scope="col">#</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">Start Date</th>
                   <th scope="col">Degisnation</th>
                   <th scope="col">Deparment</th>
                   <th scope="col">UserRole</th>
               </tr>
               </thead>
                <tbody>
                    <tr v-for="(employee, index) in lstEmployees" :key="index">
                        <td>{{ employee.id }} </td>
                        <td>{{ employee.data.fullName }} </td>
                        <td>{{ employee.data.email }} </td>
                        <td>{{ employee.data.joiningDate }} </td>
                        <td>{{ employee.data.designation }} </td>
                        <td>{{ employee.data.department }} </td>
                        <td>{{ employee.data.userRole }} </td>
                        <td style="width: 40px" class="text-center">
                            <button
                              @click.prevent="editEmp(index)"
                              type="button"
                              class="btn btn-secondary btn-sm"
                            >
                              <i class="bi bi-pen"></i>
                            </button>
                        </td>

                        <td class="text-center" style="width: 40px">
                            <button
                              @click.prevent="DeleteEmp(index)"
                              type="button"
                              class="btn btn-secondary btn-sm"
                            >
                              <i class="bi bi-trash3"></i>
                            </button>
                          </td>
                       <!-- <td>{{ lstEmployees.email }}</td>
                       <td>{{ lstEmployees.joiningDate }}</td>
                       <td>{{ lstEmployees.selecteddesignation }}</td> -->
                     </tr>
                   </tbody>
                 </table>
                
                </div>
                <div class="datatable-bottom">
                <div class="datatable-info">Showing 1 to 1 of 1 entries</div>
                <nav class="datatable-pagination"><ul class="datatable-pagination-list"></ul></nav>
            </div>
            </div>
              <!-- End Table with stripped rows -->

            </div>
          </div>

        </div>
      </div>
    </section>


   
   </template>



<script>

    export default {
        name:'HrEmpChildList',
        props:['lstEmployees'],




    }


    
</script>

<style  scoped>

</style>
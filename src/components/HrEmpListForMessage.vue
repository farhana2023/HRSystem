<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">List of the Employee</h5>
              <div
                class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns search-results"
              >
                <div class="datatable-top">
                  <div class="datatable-dropdown">
                    <label>
                      <select class="datatable-selector">
                        <option value="5">5</option>
                        <option value="10" selected="">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                      </select>
                      entries per page
                    </label>
                  </div>
                  <div class="datatable-search">
                    <input
                      v-model="search"
                      class="datatable-input"
                      placeholder="Search..."
                      type="search"
                      title="Search within table"
                    />
                  </div>
                </div>
                <div class="datatable-container">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <!-- <th scope="col">#</th> -->
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Degisnation</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Deparment</th>
                        <th scope="col">UserRole</th>
                        <!-- <th scope="col">Edit</th> -->
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(employee, index) in filteredEmployee" :key="index">
                        <!-- <th scope="row">{{ employee.id  }}</th> -->
                        <td >{{ employee.data.fullName }}</td>
                        <!-- <td class="linkEmp"><RouterLink :to="{ name:'employeeProfileDetails', params: {empId: employee.id}}">
                          
                         
                          <span class="blue-text">{{ employee.data.fullName }}</span>
                        
                        </RouterLink></td> -->
                        <td >{{ employee.data.email }}</td>
                        <td>{{ employee.data.designation }}</td>
                 
                        <td>{{ employee.data.joiningDate }}</td>
                        <td>{{ employee.data.department }}</td>
                        <td>{{ employee.data.userRole }}</td>
                        <!-- <td style="width: 40px" class="text-center">
                          <button
                            @click.prevent="editEmp(index)"
                            type="button"
                            class="btn btn-secondary btn-sm"
                          >
                            <i class="bi bi-pen"></i>
                          </button>
                        </td>  -->
  
                        <td class="text-center" style="width: 40px">
  <button
    @click.prevent="SendMessage(employee)"
    type="button"
    class="btn btn-primary btn-sm"
  >
    <i class="bi bi-envelope"></i> <!-- Envelope icon -->
  </button>
</td>
                    
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
  name: 'HrEmpListForMessage',
  props: ['lstEmployees'],
  data() {
    return {
      search: '',
    };
  },
  computed: {
    filteredEmployee: function () {
      return this.lstEmployees.filter((employee) => {
        const searchTerm = this.search.toLowerCase()
        const fullNameMatch = employee.data.fullName
          ? employee.data.fullName.toLowerCase().includes(searchTerm)
          : false

        const emailMatch = employee.data.email
          ? employee.data.email.toLowerCase().includes(searchTerm)
          : false
        const designationMatch = employee.data.designation
          ? employee.data.designation.toLowerCase().includes(searchTerm)
          : false
        const departmentMatch = employee.data.department
          ? employee.data.department.toLowerCase().includes(searchTerm)
          : false

        const userRoleMatch = employee.data.userRole
          ? employee.data.userRole.toLowerCase().includes(searchTerm)
          : false

        // Combine the conditions using logical OR (||) to find a match in any field
        return fullNameMatch || emailMatch || designationMatch || departmentMatch || userRoleMatch
      })
  },},
  methods: {
    SendMessage(employee) {
      console.log('employee', employee);
     
      this.$router.push({
            name: 'emp_SendMessage',
            query: {
              id: employee.id,
              email: employee.data.email,
              fullname: employee.data.fullName
            }
          })
    },
  },
};
</script>





<style scoped>
.linkEmp .blue-text {
  color: blue;
}
</style>

<style scoped>

</style>
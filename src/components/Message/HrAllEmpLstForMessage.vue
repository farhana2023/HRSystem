<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">List of the Employee</h5>


              <div class="datatable-top">
                <div class="datatable-dropdown">
                    <label>
                        Show
                        <select v-model="perPage">
                        <option v-for="option in perPageOptions" :key="option" :value="option">{{ option }}</option>
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
         
              <div class="datatable-container pt-2">
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
                      <th scope="col">Mail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(employee, index) in paginatedEmployees" :key="index">
                      <!-- <th scope="row">{{ employee.id  }}</th> -->
                      <td>{{ employee.data.fullName }}</td>
                      <!-- <td class="linkEmp"><RouterLink :to="{ name:'employeeProfileDetails', params: {empId: employee.id}}">
                          
                         
                          <span class="blue-text">{{ employee.data.fullName }}</span>
                        
                        </RouterLink></td> -->
                      <td>{{ employee.data.email }}</td>
                      <td>{{ employee.data.designation }}</td>

                      <td>{{ employee.data.joiningDate }}</td>
                      <td>{{ employee.data.department }}</td>
                      <td>{{ employee.data.userRole }}</td>
                 

                      <td class="text-center" style="width: 40px">
                        <button
                          @click.prevent="SendMessage(employee)"
                          type="button"
                          class="btn btn-primary btn-sm"
                        >
                          <i class="bi bi-envelope"></i>
                          <!-- Envelope icon -->
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a  @click="previousPage" :disabled="currentPage === 1" class="page-link" href="#">Previous</a></li>
              
                  <li class="page-item"><a  @click="nextPage" :disabled="currentPage === totalPages" class="page-link" href="#">Next</a></li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </section>
  </template>



  
  <script>
  export default {
    name: 'HrAllEmpLstForMessage',
    props: {
  lstEmployees: Array,
},
    data() {
      return {
        perPageOptions: [5, 10, 15, 20, 25],
        perPage: 10,
        currentPage: 1,
        search: '',
        sortKey: '',
        sortOrder: 1,
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

          const joiningDate = employee.data.joiningDate
          ? employee.data.joiningDate.toLowerCase().includes(searchTerm)
          : false

   
        return fullNameMatch || emailMatch || designationMatch || departmentMatch || userRoleMatch||joiningDate
      })
    },

    paginatedEmployees() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.filteredEmployee.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.filteredEmployee.length / this.perPage);
      },
  },

    methods: {
      sortBy(key) {
        if (key === this.sortKey) {
          this.sortOrder *= -1;
        } else {
          this.sortKey = key;
          this.sortOrder = 1;
        }
      },
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
  
      

        SendMessage(employee) {
      console.log('employee', employee)

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
  /* Add your custom styles here */
  </style>
  
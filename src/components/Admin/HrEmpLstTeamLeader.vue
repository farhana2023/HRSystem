<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
        
              <h5 class="card-title">List of the Team Leader</h5>

              <div class="datatable-top">
                <div class="datatable-dropdown">
                  <label>
                    Show
                    <select v-model="perPage">
                      <option v-for="option in perPageOptions" :key="option" :value="option">
                        {{ option }}
                      </option>
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
                      <th scope="col">Joining Date</th>
                      <th scope="col">Degisnation</th>
                      <th scope="col">Deparment</th>
                      <!-- <th scope="col">Add</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(employee, index) in paginatedEmployees" :key="index">
                      <td class="linkEmp">
                        <RouterLink
                          :to="{ name: 'employeeProfileDetails', params: { empId: employee.id } }"
                        >
                          <span class="blue-text">{{ employee.fullName }}</span>
                        </RouterLink>
                      </td>
                      <td>{{ employee.email }}</td>
                      <td>{{ employee.joiningDate }}</td>
                      <td>{{ employee.designation }}</td>
                      <td>{{ employee.department }}</td>

                      <td class="text-center" style="width: 40px">
                        <button
                          @click.prevent="DeleteEmp(index)"
                          type="button"
                          class="btn btn-danger btn-sm"
                        >
                          <i class="bi bi-trash3"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="datatable-bottom">
         
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
import { getAllTeamLeader, deleteEmpData } from '@/services/empData'

export default {
  name: 'HrEmpLstTeamLeader',
  props: ['lstEmployees'],

  data() {
    return {
      search: '',
      LstTeamLeader: [],
      perPageOptions: [5, 10, 15, 20, 25],
        perPage: 10,
        currentPage: 1,
     
        sortKey: '',
        sortOrder: 1,
    }
  },

  created() {
    this.lstAllTeamLeader()
  },



  computed: {
    filteredEmployee: function () {
      return this.LstTeamLeader.filter((employee) => {
        const searchTerm = this.search.toLowerCase()
        const fullNameMatch = employee.fullName
          ? employee.fullName.toLowerCase().includes(searchTerm)
          : false

        const emailMatch = employee.email
          ? employee.email.toLowerCase().includes(searchTerm)
          : false

        const designationMatch = employee.designation
          ? employee.designation.toLowerCase().includes(searchTerm)
          : false
          
        const departmentMatch = employee.department
          ? employee.department.toLowerCase().includes(searchTerm)
          : false

          const joiningDate = employee.joiningDate
          ? employee.joiningDate.toLowerCase().includes(searchTerm)
          : false

        // Combine the conditions using logical OR (||) to find a match in any field
        return fullNameMatch || emailMatch || designationMatch || departmentMatch ||joiningDate
      })
    },
    paginatedEmployees() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return this.filteredEmployee.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredEmployee.length / this.perPage)
    }
  },

  methods: {
    async lstAllTeamLeader() {
      const lstTL = await getAllTeamLeader()
      console.log('LstTeamLeader', lstTL)
      this.LstTeamLeader = lstTL
      return this.LstTeamLeader
    },

    async sendTLData(employee) {
      this.$emit('send-TL-Data', employee)
    },



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

    async DeleteEmp(index) {
      const TLToDelete = this.LstTeamLeader[index]

      const confirmDelete = window.confirm(
        'Are you sure you want to permanently delete this employee?'
      )

      if (confirmDelete) {
        // const CurrentUserID = employeeToDelete.data.uid;

        try {
          //await deleteUser(CurrentUserID);

          // Delete the employee data

          console.log('TLToDelete', TLToDelete)
          await deleteEmpData(TLToDelete)
          // TLToDelete.splice(index,1);
          this.LstTeamLeader.splice(index, 1)
        } catch (error) {
          console.error('Error deleting employee:', error)
        }
      } else {
        // User canceled deletion
        // No action needed if the user cancels; the employee won't be deleted.
      }
    }
  },

}
</script>

<style scoped>
.linkEmp .blue-text {
  color: blue;
}
</style>

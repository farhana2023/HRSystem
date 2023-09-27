<template>
  <section class="section dashboard">
    <div class="row">
      <!-- Left side columns -->
      <div class="col-lg-8">
        <div class="row">
          <div class="col-xxl-4 col-xl-12 rounded success">
            <div class="card info-card customers-card">
              <div class="card-body">
                <RouterLink :to="{ name: 'emp_AssignTeamLeader' }">
                  <h5 class="card-title" style="color: blue">Admins<span></span></h5>
                </RouterLink>

                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-people"></i>
                  </div>
                  <div class="ps-3">
                    <h6>{{ AdminCount }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xxl-4 col-xl-12 rounded">
            <div class="card info-card customers-card">
              <div class="card-body">
                <RouterLink :to="{ name: 'emp_AssignTeamLeader' }">
                  <h5 class="card-title" style="color: blue">Team Leaders<span></span></h5>
                </RouterLink>

                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-people"></i>
                  </div>
                  <div class="ps-3">
                    <h6>{{ TeamLeaderCount }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-xxl-4 col-xl-12 rounded">
            <div class="card info-card customers-card">
              <div class="card-body">
                <RouterLink :to="{ name: 'emp_AllLstView' }">
                  <h5 class="card-title" style="color: blue">Employees<span></span></h5>
                </RouterLink>

                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-people"></i>
                  </div>
                  <div class="ps-3">
                    <h6>{{ EmployeeCount }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
              <div class="card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Reports <span>/Today</span></h5>

                  <!-- Line Chart -->
                  
           
                  <!-- End Line Chart -->

                </div>

              </div>
            </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAllTeamLeader, getAllLstEmployee, getAllAdmin } from '@/services/empData'

export default {
  name: 'EmpAdminDashboardView',

  data() {
    return {
      AdminCount: 0,
      TeamLeaderCount: 0,
      EmployeeCount: 0
    }
  },

  created() {
    this.getTeamLeader()
    this.getAdmin()
    this.getEmployees()
  },

  methods: {
    async getTeamLeader() {
      const lstTL = await getAllTeamLeader()
      console.log('AllTL:', lstTL)
      this.TeamLeaderCount = lstTL.length
      console.log('TeamLeaderCount:', this.TeamLeaderCount)

      return this.TeamLeaderCount
    },

    async getAdmin() {
      const lstAdmin = await getAllAdmin()
      console.log('AllEmp:', lstAdmin)
      this.AdminCount = lstAdmin.length
      console.log('Admin:', this.AdminCount)

      return this.AdminCount
    },

    async getEmployees() {
      const lstEmp = await getAllLstEmployee()
      console.log('AllEmp:', lstEmp)
      this.EmployeeCount = lstEmp.length
      console.log('EmployeeCount:', this.EmployeeCount)

      return this.EmployeeCount
    }
  }

  // const AllEmployee = await getAllEmp();
  // console.log('unReadMsg:', AllEmployee);
}
</script>

<style scoped>
.Color {
  background-color: #6082b6;
  color: white;
  font-weight: bold;
}
</style>

<template>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/">
          <i class="bi bi-house"></i>
          <span>Home</span>
        </RouterLink>
      </li>
      <!-- End Home Nav -->

      <!-- End Dashboard Nav -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/EmpAdminDashboard">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </RouterLink>
      </li>


      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/profile">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </RouterLink>
      </li>

      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/EmpPersonalMessage">
          <i class="bi bi-mailbox"></i>
          <span>My Inbox Message</span>
        </RouterLink>
      </li>

      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/empListForSendMessage">
          <i class="bi bi-envelope"></i>
          <span>Send Message</span>
        </RouterLink>
      </li>

      <li v-if="isEmployee" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/EmpMyTasksList">
          <i class="bi bi-card-checklist"></i>
          <span>My Tasks</span>
        </RouterLink>
      </li>

      <li v-if="isTeamLeader" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/empLstMyTeamMembers">
          <i class="bi bi-people"></i>
          <span>My Team Members</span>
        </RouterLink>
      </li>
      <li v-if="isTeamLeader" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/LstProjectByTL">
          <i class="bi bi-list-check"></i>
          <span>My Projects</span>
        </RouterLink>
      </li>


      <li v-if="isAdmin" class="nav-item">
        <!-- <li  class="nav-item"> -->
      
        <a
          class="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-people"></i><span>Employee</span
          ><i class="bi bi-chevron-down ms-auto-"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink class="nav-link collapsed" to="/empCreateAccount">
              <i class="bi bi-circle-fill"></i>
              <span>Create Employee Account</span>
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link collapsed" to="/EmpAdmin">
              <i class="bi bi-circle-fill"></i>
              <span>View Admin</span>
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link collapsed" to="/empAssignTeamLeader">
              <i class="bi bi-circle-fill"></i>
              <span>View Team Leader</span>
            </RouterLink>
          </li>

          <li>
            <RouterLink class="nav-link collapsed" to="/EmployeeAllList">
              <i class="bi bi-circle-fill"></i>
              <span>View Employees-</span>
            </RouterLink>
          </li>

     
        </ul>
      </li>

      <li v-if="isAdmin" class="nav-item">

        <a
          class="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-card-list"></i><span>Projects</span
          ><i class="bi bi-chevron-down ms-auto-"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link collapsed" to="/AddProjectView">
              <i class="bi bi-circle-fill"></i>
              <span>Projects</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link collapsed" to="/ListProject">
              <i class="bi bi-circle-fill"></i>
              <span>View Projects</span>
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- <li v-if="isTeamLeader" class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-people"></i><span>Team Leader</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink class="nav-link collapsed" to="/empLstMyTeamMembers">
              <i class="bi bi-circle"></i>
              <span>My Team Members</span>
            </RouterLink>
          </li>

          <li>
            <RouterLink class="nav-link collapsed" to="/LstProjectByTL">
              <i class="bi bi-circle"></i>
              <span>My Projects</span>
            </RouterLink>
          </li>

          <li>
            <RouterLink class="nav-link collapsed" to="/CreateTasksByProject">
              <i class="bi bi-circle"></i>
              <span>Create Tasks</span>
            </RouterLink>
          </li> 
        </ul>
      </li> -->

      <!-- <li v-if="!isLogin" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/register">
          <i class="bi bi-card-list"></i>
          <span>Register</span>
        </RouterLink>
      </li> -->
      <!-- End Register Page Nav -->

      <li v-if="!isLogin" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/login">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </RouterLink>
      </li>
      <!-- End login Page Nav -->

      <li v-if="!isLogin" class="nav-item">
        <a class="nav-link" href="pages-blank.html">
          <i class="bi bi-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li>
      <!-- End Blank Page Nav -->

      <!-- <li v-if="isLogin" class="nav-item">
        <a class="nav-link collapsed" href="pages-contact.html">
          <i class="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </li> -->
      <!-- End Contact Page Nav -->
    </ul>
  </aside>
  <!-- End Sidebar-->
</template>

<script>
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'

export default {
  name: 'HrNavigation',

  data() {
    return {
      isAdmin: false,
      isEmployee: false,
      isTeamLeader: false
    }
  },
  components: {
    RouterLink
  },
  computed: {
    isLogin() {
      return this.userStore.isAuthenticated
    },

    userRole() {
      return this.userStore.userRole
    }
  },
  mounted() {
    const role = this.userRole
    this.isAdmin = role === 'Admin'
    this.isEmployee = role === 'Employee'
    this.isTeamLeader = role === 'Team leader'
  },
  setup() {
    const userStore = useUserStore()
    return { userStore }
  }
}
</script>

<style scoped></style>

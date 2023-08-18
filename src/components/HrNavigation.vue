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

      <li v-if="isLogin" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/dashboard">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </RouterLink>
      </li>
      <!-- End Dashboard Nav -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/profile">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </RouterLink>
      </li>
      <!-- End Profile Page Nav -->

      <li  class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-journal-text"></i><span>Empoyee</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink class="nav-link collapsed" to="/personal">
              <i class="bi bi-circle"></i>
              <span>Personal</span>
            </RouterLink>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i class="bi bi-circle"></i><span>Edit Employee</span>
            </a>
          </li>
          <li>

            <RouterLink class="nav-link collapsed" to="/employeeList">
              <i class="bi bi-circle"></i>
              <span>View Employees</span>
            </RouterLink>
          
          </li>
        </ul>
      </li>
      <!-- End Forms Nav -->

      <li v-if="!isLogin" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/register">
          <i class="bi bi-card-list"></i>
          <span>Register</span>
        </RouterLink>
      </li>
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

      <li v-if="isLogin" class="nav-item">
        <a class="nav-link collapsed" href="pages-contact.html">
          <i class="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </li>
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
  components: {
    RouterLink
  },
  computed: {
    isLogin() {
  
      return this.userStore.isAuthenticated
    }
  },  setup(){
const userStore=useUserStore();
return { userStore };
  }

}
</script>

<style scoped></style>

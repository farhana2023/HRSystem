import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import DashboardView  from '../views/DashboardView.vue';
import PayrollView  from '../views/PayrollView.vue';
import { useUserStore } from '../stores/user';
import PersonalView from '../views/PersonalView.vue';

import EmployeesView from '../views/EmployeesView.vue';
import EmployeeDetailsView from '../views/EmployeeDetailsView.vue';
import EditEmployee from '../views/EditEmployee.vue';

import EmployeeListView from '../views/EmpParentListView.vue';
import EmpParentCreateProfileView from '../views/EmpParentCreateProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        auth:false,
        frame:false,
      }
    },

    {
      path: '/profile',
      name: 'profile',
      component: AboutView,
      meta:{
        auth:true,
        frame: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        auth:false,
        frame: false,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta:{
        auth:false,
        frame: false,
      }
    },

    {
      path: '/Dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta:{
        auth:false,
        frame: false,
      }
    },


    {
  
      path: '/employee/:EmpID/detail',
      name: 'employeeDetails',
      component: EmployeeDetailsView,
      meta:{
        auth:true,
        frame: true,
          }
    },

    {
      path: '/Employees',
      name: 'employees',
      component: EmployeesView,
      meta:{
        auth:true,
        frame: true,
          }
    },

 
    {
      path: '/Payroll',
      name: 'payroll',
      component: PayrollView,
      meta:{
        auth:false,
        frame: false,
      }
    },

    {
      path: '/Personal',
      name: 'personal',
      component: PersonalView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/empPersonalProfile',
      name: 'empPersonalProfile',
      component:EmpParentCreateProfileView,
      meta:{
        auth:true,
        frame: true,
      }
    },


    {
      path: '/EmployeeList',
      name: 'employeeList',
      component: EmployeeListView,
      meta:{
        auth:true,
        frame: true,
      }
    },
    {
      path: '/EditEmployee',
      name: 'editEmployee',
      component: EditEmployee,
      meta:{
        auth:true,
        frame: true,
      }
    },

    
  ]
});

router.beforeEach(async (to) => {

  const userStore = useUserStore();

  if(to.meta.auth && !userStore.isAuthenticated) {
    return { name: 'login' };
  }

});

export default router

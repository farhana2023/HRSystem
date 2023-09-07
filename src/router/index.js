import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import DashboardView  from '../views/DashboardView.vue';
import PayrollView  from '../views/PayrollView.vue';

import EmpParentCreateProfileView from '../views/EmpParentCreateProfileView.vue';

import { useUserStore } from '../stores/user';
import PersonalView from '../views/PersonalView.vue';

import EmployeesView from '../views/EmployeesView.vue';

import EditEmployee from '../views/EditEmployee.vue';

import EmployeeListView from '../views/EmpParentListView.vue';

import EmpCreateAccountView from '../views/EmpCreateAccountView.vue';
import EmpCreateProfileView from '../views/EmpCreateProfileView.vue';
import EmployeeProfileDetailsView    from '../views/EmployeeProfileDetailsView.vue';

import EmpEditPersonalDataView from '../views/EmpDetailsView/EmpEditPersonalDataView.vue';
import EmpAdditionalDataView from '../views/EmpDetailsView/EmpAdditionalDataView.vue';
import EmpChangePasswordView from '../views/EmpDetailsView/EmpChangePasswordView.vue';
import EmpTeamDataView from '../views/EmpDetailsView/EmpTeamDataView.vue';
import EmpOverView from '../views/EmpDetailsView/EmpOverView.vue';

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

    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: AboutView,
    //   meta:{
    //     auth:true,
    //     frame: true,
    //   }
    // },
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
      path: '/empCreateAccount',
      name: 'empCreateAccount',
      component: EmpCreateAccountView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/EmpCreateProfile',
      name: 'emp-Create-Profile',
      component: EmpCreateProfileView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/employeeList/:empId/detail',
      name: 'employeeProfileDetails',
      component: EmployeeProfileDetailsView,
      meta:{
        auth:true,
        frame: true,
      },

      children: [

        {
          path: 'EmpOverView',
          name: 'emp_OverView',
          component: EmpOverView,
        },
        {
          path: 'EmpEditPersonalData',
          name: 'emp_EditPersonalData',
          component: EmpEditPersonalDataView,
        },
        {
          path: 'EmpAdditionalData',
          name: 'emp_AdditionalData',
          component: EmpAdditionalDataView,
        },
        {
          path: 'EmpChangePassword',
          name: 'emp_ChangePasswordView',
          component: EmpChangePasswordView,
        },
        {
          path: 'EmpTeamData',
          name: 'emp_TeamDataView',
          component: EmpTeamDataView,
        },
      ],
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

  ]
});

router.beforeEach(async (to) => {

  const userStore = useUserStore();

  if(to.meta.auth && !userStore.isAuthenticated) {
    return { name: 'login' };
  }

});

export default router

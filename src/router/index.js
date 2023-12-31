import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';


import EmpParentCreateProfileView from '../views/EmpParentCreateProfileView.vue';

import { useUserStore } from '../stores/user';
import PersonalView from '../views/PersonalView.vue';

import EmployeesView from '../views/EmployeesView.vue';

import EditEmployee from '../views/EditEmployee.vue';

import EmpAllLstView from '../views/Admin/EmpAllLstView.vue';

import EmpCreateAccountView from '../views/EmpCreateAccountView.vue';
import EmpCreateProfileView from '../views/EmpCreateProfileView.vue';
import EmployeeProfileDetailsView    from '../views/EmployeeProfileDetailsView.vue';
//EmpDetailsView
import EmpEditAddititionalParticularView from '../views/EmpDetailsView/EmpEditAddititionalParticularView.vue';
import EmpAdditionalDataView from '../views/EmpDetailsView/EmpAdditionalDataView.vue';
import EmpChangePasswordView from '../views/EmpDetailsView/EmpChangePasswordView.vue';
import EmpTeamDataView from '../views/EmpDetailsView/EmpTeamDataView.vue';
import EmpOverView from '../views/EmpDetailsView/EmpOverView.vue';
//EmpPersonalProfile
import EmpIndOverView from '../views/EmpPersonalProfileView/EmpIndOverView.vue';
import EmpIndEditPersonalView from '../views/EmpPersonalProfileView/EmpIndEditPersonalView.vue';
import EmpIndChangePasswordView from '../views/EmpPersonalProfileView/EmpIndChangePasswordView.vue';
//SMS
import EmpListForSendMessageView from '../views/EmpSendMessage/EmpListForSendMessageView.vue';

import EmpSendMessageView from '../views/EmpSendMessage/EmpSendMessageView.vue';
import EmpPersonalMessageView from '../views/EmpSendMessage/EmpPersonalMessageView.vue';
//Admin
import EmpAssignTeamLeaderView from '../views/Admin/EmpAssignTeamLeaderView.vue';

import EmpAdminDashboardView from '../views/Admin/EmpAdminDashboardView.vue';
import EmpAdminView from '../views/Admin/EmpAdminView.vue';


//Project
import AddProjectView from '../views/Projects/AddProjectView.vue';
import ListProjectView from '../views/Projects/ListProjectView.vue';
import EditProjectView from '../views/Projects/EditProjectView.vue';
import CreateTasksByProjectView from '../views/Projects/CreateTasksByProjectView.vue';
import LstProjectByTLView from '../views/Projects/LstProjectByTLView.vue';
import EmpMyTasksListView from '../views/Projects/EmpMyTasksListView.vue';
import TaskStatusView from '../views/Projects/TaskStatusView.vue';
import UpdateProjectStatusView from '../views/Projects/UpdateProjectStatusView.vue';

//Team Leader
import EmpLstMyTeamMembersView from '../views/TeamLeader/EmpLstMyTeamMembersView.vue';
import EmpViewTeamMemberProfileView from '../views/TeamLeader/EmpViewTeamMemberProfileView.vue';
import EmpLstTeamColleagueView from '../views/TeamLeader/EmpLstTeamColleagueView.vue';



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
      path: '/EmpAdminDashboard',
      name: 'emp-AdminDashboard',
      component: EmpAdminDashboardView,
      meta:{
        auth:true,
        frame:true,
      }
    },

    {
      path: '/profile',
      name: 'profile',
      component: AboutView,
      meta:{
        auth:true,
        frame: true,
      },

      children: [

        {
          path: 'EmpIndOverView',
          name: 'emp_IndOverView',
          component: EmpIndOverView,
        },

        {
          path: 'EmpIndEditPersonal',
          name: 'emp_IndEditPersonal',
          component: EmpIndEditPersonalView,
        },
     
        {
          path: 'EmpIndChangePassword',
          name: 'emp_IndChangePassword',
          component: EmpIndChangePasswordView,
        }
   
      ],

    },


    {
      path: '/empAssignTeamLeader',
      name: 'emp_AssignTeamLeader',
      component: EmpAssignTeamLeaderView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/empListForSendMessage',
      name: 'emp_ListForSendMessageView',
      component: EmpListForSendMessageView,
      meta:{
        auth:true,
        frame: true,
      }
    },


    {
      path: '/EmpPersonalMessage',
      name: 'emp_PersonalMessage',
      component: EmpPersonalMessageView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    
    {
      path: '/EmpSendMessage',
      name: 'emp_SendMessage',
      component: EmpSendMessageView,
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
      path: '/empLstMyTeamMembers',
      name: 'emp-LstMyTeamMembers',
      component: EmpLstMyTeamMembersView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/EmpViewTeamMemberProfile',
      name: 'emp-ViewTeamMemberProfile',
      component: EmpViewTeamMemberProfileView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/EmpLstTeamColleague',
      name: 'emp-LstTeamColleague',
      component: EmpLstTeamColleagueView,
      meta:{
        auth:true,
        frame: true,
      }
    },


    {
      path: '/EmpAdmin',
      name: 'emp-AdminView',
      component: EmpAdminView,
      meta:{
        auth:true,
        frame: true,
      }
    },


//----------------------Project---------------------------//
    
    {
      path: '/AddProjectView',
      name: 'add-ProjectView',
      component: AddProjectView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/ListProject',
      name: 'list-Project',
      component: ListProjectView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/LstProjectByTL',
      name: 'Lst-ProjectByTL',
      component: LstProjectByTLView,
      meta:{
        auth:true,
        frame: true,
      }
    },


    
    {
      path: '/EditProject',
      name: 'edit-Project',
      component: EditProjectView,
      meta:{
        auth:true,
        frame: true,
      }
    },


    {
      path: '/CreateTasksByProject',
      name: 'create-TasksByProject',
      component: CreateTasksByProjectView,
      meta:{
        auth:true,
        frame: true,
      }
    },


    
    {
      path: '/EmpMyTasksList',
      name: 'emp-MyTasksListView',
      component: EmpMyTasksListView,
      meta:{
        auth:true,
        frame: true,
      }
    },
    {
      path: '/UpdateProjectStatus',
      name: 'update-ProjectStatus',
      component: UpdateProjectStatusView,
      meta:{
        auth:true,
        frame: true,
      }
    },

    {
      path: '/TaskStatus',
      name: 'task-Status',
      component: TaskStatusView,
      meta:{
        auth:true,
        frame: true,
      }
    },
//------------------------EmpDetails---------------------------//
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
          path: 'EmpEditAddititionalParticular',
          name: 'emp_EditAddititionalParticular',
          component: EmpEditAddititionalParticularView,
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
      path: '/EmployeeAllList',
      name: 'emp_AllLstView',
      component: EmpAllLstView,
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

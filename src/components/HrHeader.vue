<template>
  <!-- ======= Header ======= -->
  
  <header id="header" class="header fixed-top d-flex align-items-center">
   
    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/favicon.png" alt="" />
        <span class="d-none d-lg-block">StaffSphere</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div>
    <!-- End Logo -->

    <div class="search-bar">
      <form class="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
      </form>
    </div>
    <!-- End Search Bar -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle" href="#">
            <i class="bi bi-search"></i>
          </a>
        </li>
        <!-- End Search Icon-->

    

        <li v-if="isLogin" class="nav-item dropdown">
          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-chat-left-text"></i>
            <span class="badge bg-success badge-number">{{ unreadMessageCount }}</span> </a
          ><!-- End Messages Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li class="dropdown-header">  
              <span>
  <p>You have {{ unreadMessageCount }} new messages</p>
</span>
              <a  @click.prevent='ShowAllMsgs()' href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>



            <li>
              <hr class="dropdown-divider" />
            </li>

          </ul>
          <!-- End Messages Dropdown Items -->
        </li>
        <!-- End Messages Nav -->

        <li v-if="isLogin" class="nav-item dropdown pe-3">
          <a
            class="nav-link nav-profile d-flex align-items-center pe-0"
            href="#"
            data-bs-toggle="dropdown"
          >
            <!-- <img src="imageUrl" alt="Profile" class="rounded-circle" /> -->
            <!-- <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle"> -->

            <img :src="imageUrl || ''" class="rounded-circle"  alt="Profile">

            <span class="d-none d-md-block dropdown-toggle ps-2">{{ fullName }}</span> </a

          ><!-- End Profile Iamge Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>{{ fullName}}</h6>
              <span>{{ designation }}</span>

            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html" @click.prevent="onProfileClicked()">
                <i class="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>

            
            <li>
              <hr class="dropdown-divider" />
            </li>

            <!-- <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li> -->

            <!-- <li>
              <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i class="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li> -->

            
            <li>
                <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="onLogoutClicked()">
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                </a>
                </li>
          </ul>
          <!-- End Profile Dropdown Items -->
        </li>
        <!-- End Profile Nav -->

        <li v-if="!isLogin" class="nav-item dropdown pe-3">
          <i  @click="OnLoginClicked()" class="bi bi-box-arrow-in-right" style="color:white"></i>
          <!-- <button  @click="OnLoginClicked()" type="button" class="btn btn-info btn-sm">
           
          </button> -->

          <!-- End Profile Dropdown Items -->
        </li>
        <li v-if="!isLogin" class="nav-item dropdown pe-3">
          <i  @click="OnRegisterClicked()" class="bi bi-card-list" style="color:white"></i>
          <!-- <button  @click="OnRegisterClicked()" type="button" class="btn btn-info btn-sm">
           
          </button> -->

          <!-- End Profile Dropdown Items -->
        </li>
      </ul>
    </nav>
    <!-- End Icons Navigation -->
  </header>


  <!-- End Header -->
</template>
<!-- 
<script>
import {getAllUnreadMsg } from '../services/empData'; 
import { useUserStore } from '../stores/user';
export default {
  name: 'HrHeader',

  computed: {
            isLogin() {
        
                return this.userStore.isAuthenticated;
            },
            fullName(){
              return this.userStore.fullName;
            },
            designation(){
              return this.userStore.designation;
            },

            imageUrl(){
              return this.userStore.imageUrl;
            },
            userId(){
              return this.userStore.userId;
            }

        
        },
  methods:{

    OnLoginClicked(){
       this.$router.push('/login')
   
    },
    OnRegisterClicked(){
        this.$router.push({name:'register'});

    },

    onProfileClicked(){
        this.$router.push({name:'profile'});

    },

    onLogoutClicked() {
                this.userStore.logoutUser();
                this.$router.push({name:'login'});
            }

  },
  setup(){
const userStore=useUserStore();
return { userStore };
  },


  created(){
      const unReadMsg= await getAllUnreadMsg(userId)
          console.log('unReadMsg:',unReadMsg)
          const unreadMessageCount = unReadMsg.length;
          console.log('Unread Message Count:', unreadMessageCount);
          return unreadMessageCount;

  }
}


</script> -->


<script>
import { getAllUnreadMsg } from '../services/empData';
import { useUserStore } from '../stores/user';

export default {
  name: 'HrHeader',

  data() {
  return {
    unreadMessageCount: 0, // Initialize with a default value
  };
},


  computed: {
    isLogin() {
      return this.userStore.isAuthenticated;
    },
    fullName() {
      return this.userStore.fullName;
    },
    designation() {
      return this.userStore.designation;
    },
    imageUrl() {
      return this.userStore.imageUrl;
    },
    userId() {
      return this.userStore.userId;
    },
    // unreadMessageCount() {
    //   return this.unreadMessageCount;
    // },
  },
  methods: {
    OnLoginClicked() {
      this.$router.push('/login');
    },
    OnRegisterClicked() {
      this.$router.push({ name: 'register' });
    },
    onProfileClicked() {
      this.$router.push({ name: 'profile' });
    },
    onLogoutClicked() {
      this.userStore.logoutUser();
      this.$router.push({ name: 'login' });
    },

    ShowAllMsgs(){
      this.$router.push({ name: 'emp_PersonalMessage' });

    }
  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  async created() {
  const unReadMsg = await getAllUnreadMsg(this.userId);
  console.log('unReadMsg:', unReadMsg);
  const unreadMessageCount = unReadMsg.length;
  console.log('Unread Message Count:', unreadMessageCount);

  // Set the data property
  this.unreadMessageCount = unreadMessageCount;

  // Debugging
  console.log('unreadMessageCount in data:', this.unreadMessageCount);
},
};
</script>


<style scoped></style>

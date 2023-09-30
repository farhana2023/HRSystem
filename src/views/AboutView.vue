
<template>
  <section class="section profile">

    <div class="row" >
      <div class="col"  >
        <nav aria-label="breadcrumb" class="rounded-3 p-1 mb-4 header">
            <h5 style="color:#ffff;font-weight: bold; margin-left: 10px;margin-top: 5px; ">  Personal Profile</h5>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <HrEmpIndProfileCard />
        <!-- <p>{{ empPersonalStore.fullName }}</p>
        <p>{{ empPersonalStore.about }}</p>
        <p>{{ empPersonalStore.joiningDate }}</p>


        <p>{{ empPersonalStore.designation }}</p>
        <p>{{ empPersonalStore.displayName }}</p> -->
      </div>
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body pt-3">
            <!-- Bordered Tabs -->
            <ul class="nav nav-tabs nav-tabs-bordered">

              <li class="nav-item">
                <button
                  class="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-overview"
                  @click.prevent="overviewClicked()"
                >
                  OverView 
                </button>
              </li>
    

              <li class="nav-item">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-additional"
                  @click.prevent="updatePersonalClicked()"
                >
                  Edit Personal Particulars
                </button>
              </li>


              
              <li class="nav-item">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-additional"
                  @click.prevent="updatePassword()"
                >
                 Change Password
                </button>
              </li>
            </ul>
            <div class="tab-content pt-2">
              <div class="tab-pane fade show active profile-overview" id="profile-overview">
                <RouterView />
              </div>

            
              <div class="tab-pane fade pt-3" id="profile-additional">
                <RouterView />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { ref, computed } from 'vue';

import { useUserStore } from '../stores/user'
import HrEmpIndProfileCard from '@/components/HrEmpIndProfileCard.vue'

export default {
  name: 'AboutView',

  data() {
    return {
      empID: null,
      employeeIndData: null
    }
  },
  components: {
   HrEmpIndProfileCard

  },
  
  setup() {
            const empPersonalStore = useUserStore();
            console.log('empPersonalStore',empPersonalStore);
            return { empPersonalStore };
        },

        mounted(){
          this.$router.push({name: 'emp_IndOverView'});
        }, 


        methods: {
          overviewClicked() {
            this.$router.push({name: 'emp_IndOverView'});
          },
    
          updatePersonalClicked() {
            this.$router.push({name: 'emp_IndEditPersonal'});
          },
          updatePassword() {
            this.$router.push({name: 'emp_IndChangePassword'});
          }
         
        },
}
</script>



<style scoped>

.header{
      background-color: #6082B6;
      font-weight: bold;
      color:white 
    }
</style>

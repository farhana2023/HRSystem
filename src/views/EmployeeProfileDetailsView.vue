
<template>
  <section class="section profile">

    <div class="row" >
      <div class="col"  >
        <nav aria-label="breadcrumb" class="rounded-3 p-2 mb-4"   style="background-color: #6082B6 ">
            <h5 style="color:#ffff">Profile</h5>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <HrEmpMainProfileCard />
      </div>
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body pt-3">
            <!-- Bordered Tabs -->
            <ul class="nav nav-tabs nav-tabs-bordered">


              <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview" @click.prevent="overviewClicked()">Profile OverView</button>
                </li>

              <!-- <li class="nav-item">
                <button
                  class="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-overview"
                  @click.prevent="overviewClicked()"
                >
                  OverView 
                </button>
              </li> -->
    

              <li class="nav-item">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-Additional-Particulars"
                  @click.prevent="TestAdditionalClicked()"
                >
                Edit Addititonal Particulars
                </button>
              </li>
            </ul>
            <div class="tab-content pt-2">
             
              
              <div class="tab-pane fade show active profile-overview" id="profile-overview">
                  <RouterView />
                </div>

            
              <!-- <div class="tab-pane fade pt-3" id="profile-additional">
                <RouterView />
              </div> -->


              <div class="tab-pane fade pt-3" id="profile-Additional-Particulars">
                <RouterView />
              </div>

              <!-- <div class="tab-pane fade pt-3" id="profile-change-password">
                <RouterView />
              </div> -->
            </div>
            <!-- End Bordered Tabs -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { ref, computed } from 'vue';
import { doc, getDoc } from 'firebase/firestore'
import db from '../firebase/db'
import HrEmpMainProfileCard from '@/components/EmpProfile/HrEmpMainProfileCard.vue'
import { useEmpStore } from '@/stores/empStore'

export default {
  name: 'EmployeeProfileDetailsView',
  data() {
    return {
      empID: null,
      employeeData: null
    }
  },
  components: {
    HrEmpMainProfileCard
  },
  async mounted() {
    this.empID = this.$route.params.empId
    console.log('Employee ID:', this.empID)
    this.$router.push({name: 'emp_OverView', params: {id: this.empID}});

    const docSnap = await getDoc(doc(db, 'EmployeeProfile', this.empID))
    if (docSnap.exists()) {
      console.log('EmpData', docSnap.data())
      this.employeeData = docSnap.data()
      useEmpStore().setEmployeeData(docSnap.data())
      useEmpStore().setEmpID(this.empID);
    } else {
      console.log('No data found')
    }
  },



  methods: {
          overviewClicked() {
            this.$router.push({name: 'emp_OverView', params: {id: this.empID}});
          },
    
      
          TestAdditionalClicked() {
            this.$router.push({name: 'emp_EditAddititionalParticular', params: {id: this.empID}});
          }
         
        },
  computed: {
    fullName() {
      return this.employeeData ? this.employeeData.fullName : ''
    },

    designation() {
      return this.employeeData ? this.employeeData.designation : ''
    }
  }
}
</script>



<style scoped></style>

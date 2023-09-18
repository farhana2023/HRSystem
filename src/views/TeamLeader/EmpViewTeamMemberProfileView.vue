<template>


<section>
  <div class="container py-2">


    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img
            :src="employeeData ? employeeData.imageUrl : ''"
            width="120"
            alt="Profile"
            class="rounded-circle"
          />
            <h5 class="my-3">{{ employeeData ? employeeData.fullName : 'Loading...' }}</h5>
            <p class="text-muted mb-1">{{ employeeData ? employeeData.designation : 'Loading...' }}</p>
            <p class="text-muted mb-4">{{ employeeData ? employeeData.department : 'Loading...' }}</p>
            <div class="d-flex justify-content-center mb-2">
              <button  @click.prevent="SendMessage(employeeData)" type="button" class="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
    
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            
            <div class="row pt-2">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.fullName : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">About</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.about : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.email : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Date of Birth</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.dateOfBirth : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Gender</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.gender : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.phone : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.address : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
    

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">joining Date</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.joiningDate : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Employement Status</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ employeeData ? employeeData.empStatus : 'Loading...' }}</p>
              </div>
            </div>
       
       
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                <div class="progress rounded mb-2" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                <div class="progress rounded mb-2" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</section>

  </template>
  
<script>


import { doc, getDoc } from 'firebase/firestore'
import db from '@/firebase/db'

import { useEmpStore } from '@/stores/empStore'

export default {
  name: 'EmpViewTeamMemberProfileView',
  data() {
    return {
      empID: null,
      employeeData: null
      
    }
  },

  async mounted() {
    this.empID = this.$route.query.empId
    console.log('Employee ID:', this.empID)

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

methods:
{
    SendMessage(employee) {
      console.log('employee', employee)

      this.$router.push({
        name: 'emp_SendMessage',
        query: {
          id: employee.id,
          email: employee.email,
          fullname: employee.fullName
        }
      })
    }
  }
  
  }

</script>
    
    

    
    <style lang="scss" scoped>
    
    </style>
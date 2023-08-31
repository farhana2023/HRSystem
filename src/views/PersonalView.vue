<template>
      <div class="col-xl-8">

<div class="card">
  <div class="card-body pt-3">
    <!-- Bordered Tabs -->
    <ul class="nav nav-tabs nav-tabs-bordered">

      <li class="nav-item">
        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
      </li>

      <li class="nav-item">
        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
      </li>



      <li class="nav-item">
        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
      </li>

    </ul>
    <div class="tab-content pt-2">

      <div class="tab-pane fade show active profile-overview" id="profile-overview">
        <h5 class="card-title">About</h5>
        <p class="small fst-italic"></p>

        <h5 class="card-title">Profile Details</h5>

        <div class="row">
          <div class="col-lg-3 col-md-4 label ">Full Name</div>
          <div class="col-lg-9 col-md-8">{{ personalstore.EmpName }}</div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-4 label">Company</div>
          <div class="col-lg-9 col-md-8">{{ personalstore.Company }}</div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-4 label">Job</div>
          <div class="col-lg-9 col-md-8">{{ personalstore.Job }} </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-4 label">Country</div>
          <div class="col-lg-9 col-md-8">{{ personalstore.Country }}</div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-4 label">Address</div>
          <div class="col-lg-9 col-md-8">{{ personalstore.Address }}</div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-4 label">Phone</div>
          <div class="col-lg-9 col-md-8">{{ personalstore.Phone }}</div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-4 label">Email</div>
          <div class="col-lg-9 col-md-8">{{ personalstore.Email }}</div>
        </div>

      </div>

      <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

        <!-- Profile Edit Form -->
        <form>
                <div class="row mb-3">
                  <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                  <div class="col-md-8 col-lg-9">
                    <img src="assets/img/profile-img.jpg" alt="Profile">
                    <div class="pt-2">
                      <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                      <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="fullName" type="text" class="form-control" id="fullName" value="Kevin Anderson">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                  <div class="col-md-8 col-lg-9">
                    <textarea name="about" class="form-control" id="about" style="height: 100px">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="company" class="col-md-4 col-lg-3 col-form-label">Company</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="company" type="text" class="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Job" class="col-md-4 col-lg-3 col-form-label">Job</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="job" type="text" class="form-control" id="Job" value="Web Designer">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Country" class="col-md-4 col-lg-3 col-form-label">Country</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="country" type="text" class="form-control" id="Country" value="USA">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="address" type="text" class="form-control" id="Address" value="A108 Adam Street, New York, NY 535022">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="phone" type="text" class="form-control" id="Phone" value="(436) 486-3538 x29071">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="email" type="email" class="form-control" id="Email" value="k.anderson@example.com">
                  </div>
                </div>

        

           

           

              

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </form>
          <!-- <div>
            <form @submit.prevent="saveEmployee">
              <input v-model="name" placeholder="Name" />
              <input type="file" ref="imageInput" @change="handleImageUpload" />
              <input type="file" ref="documentInput" @change="handleDocumentUpload" />
             <button type="submit">Save</button>
            </form>

            <div>
              <h2>Employee List</h2>
              <ul>
                <li v-for="employee in employees" :key="employee.id">
                  {{ employee.name }} - {{ employee.image }}
               </li>
              </ul>
            </div>
          </div> -->

    
      </div>



      <div class="tab-pane fade pt-3" id="profile-change-password">
        <!-- Change Password Form -->
        <form>

          <div class="row mb-3">
            <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
            <div class="col-md-8 col-lg-9">
              <input name="password" type="password" class="form-control" id="currentPassword">
            </div>
          </div>

          <div class="row mb-3">
            <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
            <div class="col-md-8 col-lg-9">
              <input name="newpassword" type="password" class="form-control" id="newPassword">
            </div>
          </div>

          <div class="row mb-3">
            <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
            <div class="col-md-8 col-lg-9">
              <input name="renewpassword" type="password" class="form-control" id="renewPassword">
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary">Change Password</button>
          </div>
        </form><!-- End Change Password Form -->

      </div>

    </div><!-- End Bordered Tabs -->

  </div>
</div>

</div>
</template>
<script>
import { useEmployeeStore } from '../stores/Employee';
import { usePersonalStore } from '../stores/Personal';

import db from '../firebase/db';
import { doc ,setDoc } from 'firebase/firestore'


import { collection ,addDoc } from 'firebase/firestore';
export default {

  setup() {
    const personalstore = usePersonalStore();
    const employeeStore = useEmployeeStore();

    // Load employees' data from local storage when component is created


    return { personalstore, employeeStore };
  },
  
  data() {
    return {
      name: '',
      imageFile: null,
      documentFile: null,
    };
  },

  methods: {
    saveEmployee() {
      const employee = {
        id: Date.now(),
        name: this.name,
        image: this.imageFile,
        document: this.documentFile,
      };
      this.employeeStore.addEmployee(employee);
      this.employeeStore.persistEmployees(); // Persist the data after adding
      this.clearForm();
    },
    handleImageUpload(event) {
      this.imageFile = event.target.files[0];
    },
    handleDocumentUpload(event) {
      this.documentFile = event.target.files[0];
    },
    clearForm() {
      this.name = '';
      this.imageFile = null;
      this.documentFile = null;
      this.$refs.imageInput.value = '';
      this.$refs.documentInput.value = '';
    },



  
  //   async CreateEmployee() {
  //     try {
  //       await setDoc(doc(db, 'EmployeeProfile', '1dXZ8VfnUSQazhtmasYO'), {
  //       fisrtName :'Eliza',
  //       lastName:'Tazmeen',
  //       dob:'10/8/2012'
       
  //       },{merge :true});
  //       console.log('User profile created successfully');
  //     } catch (error) {
  //       console.error('Error creating user profile:', error);
  //     }
  //   }
  

    async CreateEmployee(){
      //user collection reference

      const colRef = collection(db,'EmployeeProfile')
      //data to send
      const dataObj ={

        fisrtName :'Gazi',
        lastName:'Salahuddin',
        dob:'10/8/2018'
        
      }
      //create document and return reference to it

      const docRef=await addDoc(colRef,dataObj)
      //access auto-generate ID with '.id'

      console.log('Document was create with ID',docRef.id)
    } 
  },

  created() {
     this.CreateEmployee();
   },


}
</script>

<style scoped>
/* ... your style rules ... */
</style>


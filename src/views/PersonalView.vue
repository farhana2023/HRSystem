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


          <div>
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
          </div>

    
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
  },

 
};
</script>

<style scoped>
/* ... your style rules ... */
</style>


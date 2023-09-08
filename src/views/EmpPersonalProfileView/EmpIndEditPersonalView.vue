<template>
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
      <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
      <div class="col-md-8 col-lg-9">
        <textarea name="about" class="form-control" id="about" style="height: 100px" v-model="about"></textarea>
      </div>
    </div>
    <div class="row mb-3">
      <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
      <div class="col-md-8 col-lg-9">
        <input readonly name="email" type="email" class="form-control readonly-input" id="email" v-model="email" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
      <div class="col-md-8 col-lg-9">
        <input name="fullName" type="text" class="form-control" id="fullName" v-model="fullName" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="displayName" class="col-md-4 col-lg-3 col-form-label">User Name</label>
      <div class="col-md-8 col-lg-9">
        <input name="displayName" type="text" class="form-control" id="displayName" v-model="displayName" />
      </div>
    </div>



    <div class="row mb-3">
      <label for="Email" class="col-md-4 col-lg-3 col-form-label">Date of Birth</label>
      <div class="col-md-8 col-lg-9">
        <input type="date" class="form-control" v-model="dateOfBirth" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
      <div class="col-md-8 col-lg-9">
        <input name="address" type="text" class="form-control" id="Address" v-model="address" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="Country" class="col-md-4 col-lg-3 col-form-label">Country</label>
      <div class="col-md-8 col-lg-9">
        <input name="country" type="text" class="form-control" id="Country" v-model="country" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
      <div class="col-md-8 col-lg-9">
        <input name="phone" type="text" class="form-control" id="Phone" v-model="phone" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Gender</label>
      <div class="col-md-8 col-lg-9">
        <input name="phone" type="text" class="form-control" id="Phone" v-model="gender" />
      </div>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary" @click.prevent="updatePersonalchanges()">Update Changes</button>
    </div>


    <div class="message-container" :style="{ backgroundColor: message ? '#d9f7d9' : errorMessage ? '#fde2e2' : '' }">
      <div v-if="message" class="success-message">{{ message }}</div>
      <!-- Add an error message div -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </form><!-- End Profile Edit Form -->
</template>

<script>

import { useUserStore } from '@/stores/user';
import { updateEmpPersonalData, getEmpUserData } from '@/services/empData'




export default {
  name: 'EmpIndEditPersonalView',

  data() {
    return {

      userId: '',
      email: '',
      fullName: '',
      displayName: '',
      about: '',
      address: '',
      country: '',
      phone: '',
      selectedGender: '',
      dataSaved: false,
      message: '',
      errorMessage: ''
    }

  },


  computed: {
    empData() {
      return useUserStore.user;
    }
  },


  setup() {
    const empPersonalStore = useUserStore();
    return { empPersonalStore };

  },

  mounted() {
    // console.log('empIndStoreData:', empPersonalStore);

    this.about = this.empPersonalStore.about;
    this.fullName = this.empPersonalStore.fullName;
    this.displayName = this.empPersonalStore.displayName;
    this.email = this.empPersonalStore.email;
    this.phone = this.empPersonalStore.phone;
    this.address = this.empPersonalStore.address;
    this.dateOfBirth = this.empPersonalStore.dateOfBirth;
    this.gender = this.empPersonalStore.gender;
    this.country = this.empPersonalStore.country;
    this.userId = this.empPersonalStore.userId;
  },


  methods: {
    async updatePersonalchanges() {

      const empData = {
        gender: this.gender,
        fullName: this.fullName,
        about: this.about,
        displayName: this.displayName,
        email: this.email,
        phone: this.phone,
        address: this.address,
        country: this.country,
        dateOfBirth: this.dateOfBirth,
        userId: this.userId,
      }
      console.log('empdata', empData);

      try {
        await updateEmpPersonalData(empData, this.userId);
        const updatedUserData = await getEmpUserData(this.userId);
        useUserStore().user = updatedUserData; // Update the user property with the retrieved data

        this.message = 'Employee data updated successfully';
        this.errorMessage = '';
      } catch (error) {
        console.error('Error updating employee data:', error);
        this.message = '';
        this.errorMessage = 'Error updating employee data. Please try again.';
      }


    }
  },
};


</script>

<style  scoped>
.message-container {
  margin-top: 10px;
}

.success-message {
  color: green;
}

.error-message {
  color: red;
}
</style>
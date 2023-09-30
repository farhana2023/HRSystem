<template>
<section>
<form>

<div class="row mb-3">
  <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
  <div class="col-md-8 col-lg-9">
    <input name="currentPassword" type="password" class="form-control" id="currentPassword">
  </div>
</div>

<div class="row mb-3">
  <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
  <div class="col-md-8 col-lg-9">
    <input name="passOne" type="password" class="form-control" id="passOne" v-model="passOne">

  </div>
</div>

<div class="row mb-3">
  <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
  <div class="col-md-8 col-lg-9">
    <input name="passTwo" type="password" class="form-control" id="passTwo" v-model="passTwo">


  </div>
</div>



<div class="card-footer">

  <div class="text-center">
  <button type="submit" class="btn btn-primary" @click.prevent="UpdateUserPassword()">Change Password</button>
</div>
  <div v-if="dataSaved" class="alert alert-success mt-3">
    <strong>Password  changed successfully!</strong>
  </div>

  <div v-if="dataError" class="alert alert-danger mt-3">
    <strong>Error:</strong> {{ message }}
  </div>
</div>


</form>
</section>



    

</template>


<script>
import { getAuth, updatePassword as updateFirebasePassword } from "firebase/auth";

import { useUserStore } from '@/stores/user';

export default {
  name: 'EmpIndChangePasswordView',
  data() {
    return {
      userName: null,
      email: null,
      currentPassword: null,
      passOne: null,
      passTwo: null,
      error: null,
      message: null,
      dataSaved: false,
      dataError: false,
    };
  },
  watch: {
  passTwo: function () {
    console.log('passOne:', this.passOne);
    console.log('passTwo:', this.passTwo);
    if (this.passOne !== "" && this.passTwo !== "" && this.passTwo !== this.passOne) {
      this.error = 'Passwords must match';
      // this.message =    this.error ; // Set custom error message
      // this.dataError = true;

     // alert('Passwords must match');

    } else {
      this.error = null;
    }
  },
},

  methods: {
    async UpdateUserPassword() {
      console.log('update in else');
  if (!this.error) {
    if (this.passOne === this.passTwo) {
      try {
        console.log('came in else');
        const auth = getAuth();
        const user = auth.currentUser;

        await updateFirebasePassword(user, this.passOne);

        this.dataSaved = true;
      } catch (error) {
        this.dataError = true;
        this.message = error.message; // Set the error message
        console.error(error); // Log the error for debugging purposes
      }
    } else {
      console.log('came in else');
      this.error = 'Passwords must match';
      this.message =    this.error ; 
      this.dataError = true;
      // return message
      // alert('Passwords must match');
    }
  }
  else{
    this.error = 'Passwords must match';
      this.message =    this.error ; 
      this.dataError = true;
      // return message
  }
},


  },
  setup() {
    const empUser = useUserStore();
    return { empUser };
  },
};
</script>


<style  scoped>

</style>
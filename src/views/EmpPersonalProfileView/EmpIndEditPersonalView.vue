<template>
  <form>
    <div class="row mb-3">

      <div class="row mb-3">
            <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
            <div class="col-md-8 col-lg-9">
            <img :src="imageUrl" width="120" alt="Profile" class="img-thumbnail">
            <div class="pt-2">
                <a href="#" class="btn btn-primary btn-sm" title="Upload Hero Image" @click.prevent="uploadClicked()"><i class="bi bi-upload"></i></a>
                <a href="#" class="btn btn-danger btn-sm" title="Remove Hero Image" @click.prevent="removeClicked()"><i class="bi bi-trash"></i></a>
            </div>
            </div>
        </div></div>

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
import { updateEmpPersonalData, getEmpUserData, uploadProfileImage } from '@/services/empData'
import { useFileDialog } from '@vueuse/core'




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
      errorMessage: '',
      imageUrl:''
      
    }

  },


  computed: {
    empData() {
      return useUserStore.user;
    },
    // currentImageUrl() {
    //   return  useUserStore.user.image.url;
    //         }

    
  },


  setup() {
    const empPersonalStore = useUserStore();

    const { open, onChange } = useFileDialog();
    return { empPersonalStore ,open,onChange};

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
    this.imageUrl = this.empPersonalStore.imageUrl;

    this.onChange((files) => {
        this.uploadImage(files[0]);
    });

  },


  methods: {



 uploadClicked() {
    this.open({ accept: 'image/*', multiple: false });
  },
  async removeClicked() {
   // const url = await this.heroStore.resetHeroImage();
  //  this.imageUrl = url;
  },

  // async uploadImage(image) {
  //       this.imageUrl = await this.user.uploadProfileImage(image,this.userId);
  //           },
  async uploadImage(image) {
    console.log('image',image);
    console.log('image',this.userId);
    this.imageUrl = await uploadProfileImage(image,this.userId);

    console.log(' this.imageUrl', this.imageUrl);
  },

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
        imageUrl :this.imageUrl

        
      }
      console.log('empdata', empData);

      

      try {
        await updateEmpPersonalData(empData, this.userId);
        const updatedUserData = await getEmpUserData(this.userId);
        useUserStore().user = updatedUserData;

        

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
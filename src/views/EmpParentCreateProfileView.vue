<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">Employee Profile</div>
          <div class="card-body">
            <h5 class="card-title">Personal Information</h5>
            <HrEmpChildProfile @EmployeeProfile="saveEmpPersonalToFirebase"></HrEmpChildProfile>
          </div>

          <div class="card-footer">
            <div v-if="dataSaved" class="alert alert-success mt-3"><Strong>Data saved successfully!</Strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HrEmpChildProfile from '@/components/HrEmpChildProfile.vue'

import db from '../firebase/db'

import { collection, addDoc } from 'firebase/firestore'

export default {
  name: 'EmpParentCreateProfileView',
  components: 
  {
    HrEmpChildProfile
  },
  data() {
    return {
      dataSaved: false,
    }
  },

  methods: {
    async saveEmpPersonalToFirebase(empPersonalData) {
      const colRef = collection(db, 'EmployeeProfile')
      const dataObj = empPersonalData

      try {
        const docRef = await addDoc(colRef, dataObj)
        console.log('User data saved to Firebase')

        // Show success message and reset the flag after a delay
        this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false
        }, 3000) // Display success message for 3 seconds

        console.log('Document was created with ID', docRef.id)
      } catch (error) {
        console.error('Error saving user data:', error)
      }
    }
  }
}
</script>

<style scoped></style>

<template>
<div class="tab-content pt-2">

<div class="tab-pane fade show active profile-overview" id="profile-overview">
  <h5 class="card-title">About</h5>
  <p class="small fst-italic">{{ employeeData ? employeeData.about : 'Loading...' }}</p>

  <h5 class="card-title">Profile Details</h5>

  <div class="row">
    <div class="col-lg-3 col-md-4 label ">Full Name</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.fullName : 'Loading...' }}</div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-md-4 label">Email</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.email : 'Loading...' }}</div>
  </div>

  <div class="row">
    <div class="col-lg-3 col-md-4 label">Phone</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.phone : 'Loading...' }}</div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-md-4 label">Address</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.address : 'Loading...' }}</div>
  </div>

  <div class="row">
    <div class="col-lg-3 col-md-4 label">Country</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.country : 'Loading...' }}</div>
  </div>

  <div class="row">
    <div class="col-lg-3 col-md-4 label">Joining Date</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.joiningDate : 'Loading...' }}</div>
  </div>

  <div class="row">
    <div class="col-lg-3 col-md-4 label">Designation</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.designation : 'Loading...' }}</div>
  </div>

  <div class="row">
    <div class="col-lg-3 col-md-4 label">Department</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.department : 'Loading...' }}</div>
  </div>

  <div class="row">
    <div class="col-lg-3 col-md-4 label">User Role</div>
    <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.userRole : 'Loading...' }}</div>
  </div>

</div></div>
</template>
<script>
import { computed } from 'vue';
import { useEmpStore } from '@/stores/empStore';


    export default {
        name:'EmpOverView',
        setup() {
            const empStore = useEmpStore();
            const employeeData = computed(() => empStore.getEmp);
            console.log('emstore', employeeData);
            return {
      employeeData,
    };
        },

    };


</script>

<style lang="scss" scoped>

</style>
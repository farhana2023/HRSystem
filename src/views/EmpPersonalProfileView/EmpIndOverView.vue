<template>
    <div class="tab-content pt-2">
    
    <div class="tab-pane fade show active profile-overview" id="profile-overview">
      <h5 class="card-title">About</h5>
      <p class="small fst-italic">{{ empPersonalStore ? empPersonalStore.about : 'Loading...' }}</p>
    
      <h5 class="card-title">Profile Details</h5>
    
      <div class="row">
        <div class="col-lg-3 col-md-4 label ">Full Name</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.fullName : 'Loading...' }}</div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Email</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.email : 'Loading...' }}</div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Date of Birth</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.dateOfBirth : 'Loading...' }}</div>
      </div>
    
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Phone</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.phone : 'Loading...' }}</div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Address</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.address : 'Loading...' }}</div>
      </div>
    
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Country</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.country : 'Loading...' }}</div>
      </div>
    
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Joining Date</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.joiningDate : 'Loading...' }}</div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Department</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.department : 'Loading...' }}</div>
      </div>
    
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Designation</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.designation : 'Loading...' }}</div>
      </div>
    
      <div class="row">
        <div class="col-lg-3 col-md-4 label">Salary</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.salary : 'Loading...' }}</div>
      </div>
    
      <div class="row">
      <div class="col-lg-3 col-md-4 label">Employment Status</div>
      <div class="col-lg-9 col-md-8">{{ employeeData ? employeeData.empStatus : 'Loading...' }}</div>
      </div>
      
      <div class="row">
        <div class="col-lg-3 col-md-4 label">User Role</div>
        <div class="col-lg-9 col-md-8">{{ empPersonalStore ? empPersonalStore.userRole : 'Loading...' }}</div>
      </div>
    
    </div></div>
    </template>
    <script>

    import { useUserStore } from '@/stores/user';
    
    
        export default {
            name:'EmpOverView',
            setup() {
            const empPersonalStore = useUserStore();
            return { empPersonalStore };

        },
    
        };
    
    
    </script>
    
    <style lang="scss" scoped>
    
    </style>
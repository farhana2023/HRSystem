<template>
  <section>
    <form>
      <div class="row mb-3">
        <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
        <div class="col-md-8 col-lg-9">
          <label class="form-label" for="customFile">Profile Image</label>
          <input type="file" class="form-control" id="customFile" />

          <!-- <div class="pt-2">
            <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"
              ><i class="bi bi-upload"></i
            ></a>
            <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"
              ><i class="bi bi-trash"></i
            ></a>
          </div> -->
        </div>
      </div>

      <div class="row mb-3">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
        <div class="col-md-8 col-lg-9">
          <input
            name="fullName"
            type="text"
            class="form-control"
            id="fullName"
            v-model="fullName"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
        <div class="col-md-8 col-lg-9">
          <textarea
            name="about"
            class="form-control"
            id="about"
            style="height: 100px"
            v-model="about"
          ></textarea>
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
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
        <div class="col-md-8 col-lg-9">
          <input name="email" type="email" class="form-control" id="Email" v-model="email" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="company" class="col-md-4 col-lg-3 col-form-label">Gender</label>
        <div class="col-md-8 col-lg-9">
          <select v-model="selectedGender" class="form-select" aria-label="Default select example">
            <option selected>Select Gender</option>
            <option v-for="(label, value) in genderOptions" :value="value" :key="value">
              {{ label }}
            </option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Joining Date</label>
        <div class="col-md-8 col-lg-9">
          <input type="date" class="form-control" v-model="joiningDate" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="company" class="col-md-4 col-lg-3 col-form-label">Designation</label>
        <div class="col-md-8 col-lg-9">
          <select
            v-model="selecteddesignation"
            class="form-select"
            aria-label="Default select example"
          >
            <option v-for="(label, value) in designationOptions" :value="value" :key="value">
              {{ label }}
            </option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <label for="company" class="col-md-4 col-lg-3 col-form-label">Department</label>
        <div class="col-md-8 col-lg-9">
          <select
            v-model="selectedDepartment"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Department</option>
            <option v-for="(label, value) in departmentOptions" :value="value" :key="value">
              {{ label }}
            </option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <label for="company" class="col-md-4 col-lg-3 col-form-label">UserRole</label>
        <div class="col-md-8 col-lg-9">
          <select v-model="selectedRole" class="form-select" aria-label="Default select example">
            <option selected>Select Role</option>
            <option v-for="(label, value) in userRoleOptions" :value="value" :key="value">
              {{ label }}
            </option>
          </select>
        </div>
      </div>

      <div class="text-center">
        <button @click.prevent="sendEmpPersonalData" type="submit" class="btn btn-secondary">
        Save Data
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'HrEmpChildProfile',
  data() {
    return {
      fullName: '',
      about: '',
      address: '',
      country: '',
      phone: '',
      email: '',
      selectedGender: '',
      joiningDate:'',
      selecteddesignation: '',
      selectedDepartment:'',
      selectedRole:'',
   
    }
  },
  computed: {
    genderOptions() {
      return {
        1: 'Male',
        2: 'female'
      }
    },

    designationOptions() {
      return {
        1: 'Junior Developer',
        2: 'Technical Support Specialist',
        3: 'QA Tester',
        4: 'Developer / Programmer',
        5: 'Network Engineer',
        6: 'Database Administrator',
        7: 'IT Support Engineer',
        8: 'DevOps Engineer',
        9: 'Senior Developer / Senior Programmer',
        10: 'Systems Architect'
      }
    },

    departmentOptions() {
      return {
        1: 'Software Development',
        2: 'Quality Assurance (QA)',
        3: 'QA Tester',
        4: 'Product Management',
        5: 'Product Management',
        6: 'Cybersecurity',
        7: 'Project Management',
        8: 'DevOps',
        9: 'Database Administration',
        10: 'Technical Writing / Documentation',
        11: 'Infrastructure Management'
      }
    },

    userRoleOptions() {
      return {
        1: 'Admin',
        2: 'Team leader',
        3: 'Employee',
      }
    },

  },

  methods: {
    sendEmpPersonalData() {
      const empPersonalData = {
        fullName: this.fullName,
        about: this.about,
        address: this.address,
        country: this.country,
        phone: this.phone,
        email: this.email,
        gender: this.genderOptions[this.selectedGender],
        joiningDate:this.joiningDate,
        designation: this.designationOptions[this.selecteddesignation],
        department: this.departmentOptions[this.selectedDepartment],
        userRole: this.userRoleOptions[this.selectedRole]
      }
      this.$emit('EmployeeProfile', empPersonalData)
    }
  }
}
</script>

<style scoped></style>

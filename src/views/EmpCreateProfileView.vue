<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">Create Employee Profile</div>
          <div class="card-body">
            <h5 class="card-title">Personal Information</h5>
            <section>
              <form>
                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      readonly
                      name="email"
                      type="email"
                      class="form-control readonly-input"
                      id="email"
                      v-model="email"
                    />
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
                  <label for="displayName" class="col-md-4 col-lg-3 col-form-label"
                    >User Name</label
                  >
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="displayName"
                      type="text"
                      class="form-control"
                      id="displayName"
                      v-model="displayName"
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
                  <label for="dateofBirth" class="col-md-4 col-lg-3 col-form-label"
                    >Date of Birth</label
                  >
                  <div class="col-md-8 col-lg-9">
                    <input type="date" class="form-control" v-model="dateOfBirth" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="address"
                      type="text"
                      class="form-control"
                      id="Address"
                      v-model="address"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="Country" class="col-md-4 col-lg-3 col-form-label">Country</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="country"
                      type="text"
                      class="form-control"
                      id="Country"
                      v-model="country"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="phone"
                      type="text"
                      class="form-control"
                      id="Phone"
                      v-model="phone"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="company" class="col-md-4 col-lg-3 col-form-label">Gender</label>
                  <div class="col-md-8 col-lg-9">
                    <select
                      v-model="selectedGender"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Gender</option>
                      <option v-for="(label, value) in genderOptions" :value="value" :key="value">
                        {{ label }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="joiningDate" class="col-md-4 col-lg-3 col-form-label"
                    >Joining Date</label
                  >
                  <div class="col-md-8 col-lg-9">
                    <input type="date" class="form-control" v-model="joiningDate" />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="salary" class="col-md-4 col-lg-3 col-form-label">Salary</label>
                  <div class="col-md-8 col-lg-9">
                    <input type="number" class="form-control" v-model="salary" />
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
                      <option
                        v-for="(label, value) in designationOptions"
                        :value="value"
                        :key="value"
                      >
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
                      <option
                        v-for="(label, value) in departmentOptions"
                        :value="value"
                        :key="value"
                      >
                        {{ label }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="Country" class="col-md-4 col-lg-3 col-form-label"
                    >Employment Status</label
                  >
                  <div class="col-md-8 col-lg-9">
                    <select
                      v-model="selectedEmpStatus"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Status</option>
                      <option
                        v-for="(label, value) in empStatusOptions"
                        :value="value"
                        :key="value"
                      >
                        {{ label }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="company" class="col-md-4 col-lg-3 col-form-label">User Role</label>
                  <div class="col-md-8 col-lg-9">
                    <select
                      v-model="selectedRole"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Role</option>
                      <option v-for="(label, value) in userRoleOptions" :value="value" :key="value">
                        {{ label }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3" style="display: none">
                  <label for="TLUserID" class="col-md-4 col-lg-3 col-form-label">Assign TL</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="TLUserID"
                      type="text"
                      class="form-control"
                      id="TLUserID"
                      v-model="TLUserID"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="TLfullName" class="col-md-4 col-lg-3 col-form-label">Assign TL</label>
                  <div class="col-md-8 col-lg-9">
                    <span style="display: flex; align-items: center"
                      ><input
                        name="TLfullName"
                        type="text"
                        class="form-control readonly-input"
                        id="TLfullName"
                        v-model="TLfullName"
                        style="width: 80%" />

                      <button
                        style="padding: left:20px;"
                        @click.prevent="AddTLEmp()"
                        data-bs-toggle="modal"
                        data-bs-target="#ExtralargeModal"
                        type="button"
                        class="btn btn-primary btn-sm"
                      >
                        <i class="bi bi-person-plus"></i></button
                    ></span>
                  </div>
                </div>

                <div class="text-center">
                  <button
                    @click.prevent="sendEmpPersonalData"
                    type="submit"
                    class="btn btn-secondary"
                  >
                    Create Profile
                  </button>
                </div>
              </form>
            </section>
          </div>

          <div class="card-footer">
            <div v-if="dataSaved" class="alert alert-success mt-3">
              <Strong>Data saved successfully!</Strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div
    v-if="isPopupVisible"
    class="modal fade"
    id="ExtralargeModal"
    tabindex="-1"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Team leader</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="datatable-top">
            <div class="datatable-search">
              <input
                v-model="search"
                class="datatable-input"
                placeholder="Search..."
                type="search"
                title="Search within table"
              />
            </div>
          </div>
          <div class="datatable-container">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <th scope="col">Name</th>
                  <th scope="col">Degisnation</th>
                  <th scope="col">Deparment</th>
                  <!-- <th scope="col">Add</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(employee, index) in LstTeamLeader" :key="index">
                  <td>{{ employee.fullName }}</td>
                  <td>{{ employee.designation }}</td>
                  <td>{{ employee.department }}</td>

                  <td class="text-center" style="width: 40px">
                    <button
                      @click.prevent="sendTLData(employee)"
                      type="button"
                      class="btn btn-primary btn-sm"
                    >
                      <i class="bi bi-person-plus"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <!-- <button
            @click.prevent=""
            type="button"
            data-bs-dismiss="modal"
            class="btn btn-primary"
          >
            Add
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebase/db'

import { doc, setDoc } from 'firebase/firestore'
import { getAllTeamLeader } from '@/services/empData'

export default {
  name: 'EmpCreateProfileView',
  data() {
    return {
      userId: this.$route.params.id,
      email: this.$route.query.email,
      fullName: '',
      displayName: '',
      about: '',
      dateOfBirth: '',
      address: '',
      country: '',
      phone: '',
      selectedGender: '',
      joiningDate: '',
      salary: 0,
      selecteddesignation: '',
      selectedDepartment: '',
      selectedRole: '',
      selectedEmpStatus: '',
      TLfullName: '',
      TLUserID: '',
      isPopupVisible: false,
      LstTeamLeader: [],

      dataSaved: false
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
        3: 'Employee'
      }
    },

    empStatusOptions() {
      return {
        1: 'Full Time',
        2: 'Part Time',
        3: 'Contract',
        4: 'Internship'
      }
    }
  },

  mounted() {
    const getuserID = this.$route.query.id
    console.log('getUserID:', getuserID)
    console.log('getemail:', this.$route.query.email)
  },

  // created(){
  //           this.lstAllTeamLeader()
  //       },
  methods: {
    async AddTLEmp() {
      this.isPopupVisible = true
      console.log('isPopupVisible', this.isPopupVisible)

      const lstTL = await getAllTeamLeader()
      console.log('LstTeamLeader', lstTL)
      this.LstTeamLeader = lstTL
      return this.LstTeamLeader
    },

    sendTLData(employee) {
      ;(this.TLfullName = employee.fullName), (this.TLUserID = employee.id)
    },

    // async lstAllTeamLeader(){
    //         const lstTL = await getAllTeamLeader()
    //         console.log('LstTeamLeader', lstTL)
    //         this.LstTeamLeader = lstTL ;
    //             return this.LstTeamLeader;
    //     },

    async sendEmpPersonalData() {
      const empPersonalData = {
        userId: this.$route.query.id,
        fullName: this.fullName,
        displayName: this.displayName,
        about: this.about,
        dateOfBirth: this.dateOfBirth,
        address: this.address,
        country: this.country,
        phone: this.phone,
        email: this.$route.query.email,
        gender: this.genderOptions[this.selectedGender],
        joiningDate: this.joiningDate,
        salary: this.salary,
        designation: this.designationOptions[this.selecteddesignation],
        department: this.departmentOptions[this.selectedDepartment],
        userRole: this.userRoleOptions[this.selectedRole],
        empStatus: this.empStatusOptions[this.selectedEmpStatus],
        TLUserID: this.TLUserID,
        TLfullName: this.TLfullName
      }
      const getEmpUserID = this.$route.query.id
      console.log('foruserID:', getEmpUserID)
      const colRef = doc(db, 'EmployeeProfile', getEmpUserID)
      const dataObj = empPersonalData

      try {
        // await setDoc(userRef, user);
        const docRef = await setDoc(colRef, dataObj)
        console.log('User data saved to Firebase')

        // Show success message and reset the flag after a delay
        this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false
        }, 3000) // Display success message for 3 seconds

        // console.log('Document was created with ID', docRef.id)
        this.$router.push({ name: 'employeeList' })
      } catch (error) {
        console.error('Error saving user data:', error)
      }
    }
  }
}
</script>
<style scoped>
.readonly-input {
  background-color: #e7e8e9; /* Set your desired background color */
  color: blue;
}
</style>

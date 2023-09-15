<template>
  <section>
    <form>
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
              class="form-control"
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
            v-model="selectedDesignation"
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
        <label for="company" class="col-md-4 col-lg-3 col-form-label">Employment Status</label>
        <div class="col-md-8 col-lg-9">
          <select
            v-model="selectedEmpStatus"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Status</option>
            <option v-for="(label, value) in empStatusOptions" :value="value" :key="value">
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

      <div class="row mb-3">
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Salary</label>
        <div class="col-md-8 col-lg-9">
          <input type="number" class="form-control" v-model="salary" />
        </div>
      </div>

      <div class="text-center">
        <button @click.prevent="updateEmployeeData" type="submit" class="btn btn-secondary">
          update Data
        </button>
      </div>

      <div
        class="message-container"
        :style="{ backgroundColor: message ? '#d9f7d9' : errorMessage ? '#fde2e2' : '' }"
      >
        <div v-if="message" class="success-message">{{ message }}</div>
        <!-- Add an error message div -->
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
    </form>
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
import { computed, ref, watch } from 'vue'
import { useEmpStore } from '@/stores/empStore'
import { updateEmpAdditionalData,getAllTeamLeader } from '@/services/empData'

// import HrEmpLstTeamLeader from '@/components/Admin/HrEmpLstTeamLeader.vue'

export default {
  name: 'EmpAdditionalDataView',

  // components: {
  //   HrEmpLstTeamLeader
  // },


  data() {
    return {
      empID: null,
      EmpAdminData: null,
      isPopupVisible: false,
      TLData:[],
       TLfullName:'',
       TLUserID:'',
      LstTeamLeader:[],

      // joiningDate: '',
      // selecteddesignation: '',
      // selectedDepartment: '',
      // selectedRole: ''
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
        'Junior Developer': 'Junior Developer',
        'Technical Support Specialist': 'Technical Support Specialist',
        'QA Tester': 'QA Tester',
        'Developer / Programmer': 'Developer / Programmer',
        'Network Engineer': 'Network Engineer',
        'Database Administrator': 'Database Administrator',
        'IT Support Engineer': 'IT Support Engineer',
        'DevOps Engineer': 'DevOps Engineer',
        'Senior Developer / Senior Programmer': 'Senior Developer / Senior Programmer',
        'Systems Architect': 'Systems Architect'
      }
    },

    departmentOptions() {
      return {
        'Software Development': 'Software Development',
        'Quality Assurance (QA)': 'Quality Assurance (QA)',
        'QA Tester': 'QA Tester',
        'Product Management': 'Product Management',
        'Cybersecurity': 'Cybersecurity',
        'Project Management': 'Project Management',
        'DevOps': 'DevOps',
        'Database Administration': 'Database Administration',
        'Technical Writing / Documentation': 'Technical Writing / Documentation',
        'Infrastructure Management': 'Infrastructure Management'
      }
    },

    empStatusOptions() {
      return {
        'Full Time': 'Full Time',
        'Part Time': 'Part Time',
        'Contract': 'Contract',
        'Internship': 'Internship'
      }
    },

    userRoleOptions() {
      return {
        Admin: 'Admin',
        'Team leader': 'Team leader',
        Employee: 'Employee'
      }
    }

  },

  created(){
            this.lstAllTeamLeader()
        },

  methods: {

     AddTLEmp() {
      this.isPopupVisible = true
      console.log('isPopupVisible', this.isPopupVisible)
    },

    sendTLData(employee){

      this.TLfullName=employee.fullName,
      this.TLUserID=employee.id

    },

    async lstAllTeamLeader(){
            const lstTL = await getAllTeamLeader()
            console.log('LstTeamLeader', lstTL)
            this.LstTeamLeader = lstTL ;
                return this.LstTeamLeader;
        },


      },

  setup() {
    const empStore = useEmpStore()
    const employeeData = computed(() => empStore.getEmp)
    const employeeID = computed(() => empStore.getEmpID)

    console.log('getEmpID:', employeeID.value)

    // Create ref properties for form fields
    const joiningDate = ref('')
    const selectedDesignation = ref('')
    const selectedDepartment = ref('')
    const selectedRole = ref('')
    const selectedEmpStatus = ref('')
    const salary = ref(0)
    const  TLfullName=ref('')
    const TLUserID=ref('')
    const message = ref('')
    const errorMessage = ref('')

    //   const joiningDate = computed(() => employeeData.value ? employeeData.value.joiningDate : null);
    //   const selectedRole = computed(() => employeeData.value ? employeeData.value.userRole : null);
    //   const selectedDepartment = computed(() => employeeData.value ? employeeData.value.department : null);
    //   const selectedDesignation = computed(() => employeeData.value ? employeeData.value.designation : null);
    //   const salary = ref(0);

    const updateEmployeeData = async () => {
      const empData = {
        joiningDate: joiningDate.value,
        //   designation: this.designationOptions.value[selectedDesignation.value],
        designation: selectedDesignation.value,
        department: selectedDepartment.value,
        userRole: selectedRole.value,
        empStatus: selectedEmpStatus.value,
        salary: salary.value,
        TLfullName:TLfullName.value,
        TLUserID:TLUserID.value
      }

      console.log ('EmpData',empData);

      try {
        await updateEmpAdditionalData(empData, employeeID.value)
        message.value = 'Employee data updated successfully'
        errorMessage.value = ''
      } catch (error) {
        console.error('Error updating employee data:', error)
        message.value = ''
        errorMessage.value = 'Error updating employee data. Please try again.' // Set the error message
      }
    }

    watch(employeeData, (newVal) => {
      if (newVal) {
        joiningDate.value = newVal.joiningDate
        selectedDesignation.value = newVal.designation
        selectedDepartment.value = newVal.department
        selectedRole.value = newVal.userRole
        selectedEmpStatus.value = newVal.empStatus
        salary.value = newVal.salary
        TLfullName.value=newVal.TLfullName
        
      }
    })

    return {
      joiningDate,
      selectedDesignation,
      selectedDepartment,
      selectedRole,
      selectedEmpStatus,
      salary,
      updateEmployeeData,
      message,
      errorMessage
    }
  }
}
</script>

<style scoped>
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

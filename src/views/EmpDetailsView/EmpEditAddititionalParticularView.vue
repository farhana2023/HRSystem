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
            ><input   :disabled="!isEmployee" 
              name="TLfullName"
              type="text"
              class="form-control readonly-input"
              id="TLfullName"
              v-model="TLfullName"
              style="width: 90%" />

          
                        <button
            :disabled="!isEmployee" 
            style="margin-left: 10px;"
            @click.prevent="AddTLEmp()"
            data-bs-toggle="modal"
            data-bs-target="#ExtralargeModal"
            type="button"
            class="btn btn-primary btn-sm"
          >
            <i class="bi bi-person-plus"></i>
          </button>
          </span>
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
          <select @change="ondesignationChange($event)"
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
          <select @change="onderpartmentChange($event)"
            v-model="selectedEmpDepartment"
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
          <select @change="onempStatusChange($event)"
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
          <select @change="onuserRoleChange($event)"
          
          v-model="selectedUserRole" class="form-select" aria-label="Default select example">
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

  

      <div class="card-footer">


        <div class="text-center">
        <button @click.prevent="updateEmployeeData" type="submit" class="btn btn-primary">
          update Data
        </button>
      </div>
            <div v-if="dataSaved" class="alert alert-success mt-3">
              <Strong>Data saved successfully!</Strong>
            </div>
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
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                <th scope="col">Designation</th> <!-- Corrected the typo "Degisnation" to "Designation" -->
                <th scope="col">Department</th>
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
     
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { computed } from 'vue';
import { useEmpStore } from '@/stores/empStore';
import { updateEmpAdditionalData, getAllTeamLeader } from '@/services/empData';

export default {
  name: 'EmpEditAddititionalParticularView',

  data() {
    return {
      TLfullName: '',
      TLUserID: '',
      joiningDate: '',
      designation: '',
      department: '',
      salary: '',
      empStatus: '',
      selectedUserRole: '',
      dataSaved: false,
      selectedDesignation: '',
      selectedDepartment: '',
      isPopupVisible: false,
      selectedEmpStatus: '',
      LstTeamLeader: [],
      employeeID: null,
      updateDesignation:'',
      updateDepatment:'',
      updateEmpStatus:'',
      updateUserRole:'',
      message:'',
      isEmployee:false
    };
  },


  computed: {
  userRoleOptions() {
    return {
      'Admin': 'Admin',
      'Team leader': 'Team leader',
      'Employee': 'Employee'
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

    departmentOptions() {
      return {
        'Software Development': 'Software Development',
        'Quality Assurance (QA)': 'Quality Assurance (QA)',
        'QA Tester': 'QA Tester',
        'Product Management': 'Product Management',
        'Cybersecurity': 'Cybersecurity',

        'DevOps': 'DevOps',
        'Database Administration': 'Database Administration',
        'Technical Writing / Documentation': 'Technical Writing / Documentation',
        'Infrastructure Management': 'Infrastructure Management'
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
},

  setup() {
    const empStore = useEmpStore();
            const employeeData = computed(() => empStore.getEmp);
            console.log('emp', employeeData);
        
            const selectedUserRole = computed(() => employeeData.value.userRole);
            const selectedEmpStatus = computed(() => employeeData.value.empStatus);
            const selectedEmpDepartment = computed(() => employeeData.value.department);
            const selectedDesignation = computed(() => employeeData.value.designation);
            return { employeeData, selectedUserRole, selectedEmpStatus, selectedEmpDepartment, selectedDesignation}; 
  },

  mounted() {
     this.joiningDate = this.employeeData.joiningDate;
     this.TLfullName = this.employeeData.TLfullName;
     this.TLUserID=this.employeeData.TLUserID;
     this.salary=this.employeeData.salary;
     this.selectedUserRole = this.employeeData.userRole;
     this.selectedDepartment = this.employeeData.department;
     this.selectedDesignation = this.employeeData.designation;
     this.selectedEmpStatus = this.employeeData.empStatus;
     this.employeeID=this.employeeData.userId;

     if (  this.selectedUserRole ==='Employee'){
      console.log('selectedRole',this.selectedUserRole);
      this.isEmployee = this.selectedUserRole === 'Employee';
      return this.isEmployee;
     }
     else{
      this.isEmployee=false;
      return this.isEmployee;
     }
  },

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

    ondesignationChange(e) 
    {
      console.log("previous designation:",this.selectedDesignation)
      this.updateDesignation = e.target.value;
      console.log("Current designation:",this.updateDesignation)
        
    },

    onderpartmentChange(e) 
    {
      console.log("previous department:",this.selectedEmpDepartment)
      this.updateDepatment = e.target.value;
      console.log("Current department:",this.updateDepatment)
        
    },
    onuserRoleChange(e) 
    {
      console.log("previous role:",this.selectedUserRole)
      this.updateUserRole = e.target.value;
      console.log("Current designation:",this.updateUserRole)
        
    },
    onempStatusChange(e) 
    {
      console.log("previous designation:",this.selectedStatus)
      this.updateEmpStatus = e.target.value;
      console.log("Current designation:",this.updateEmpStatus)
        
    },

    updateEmployeeData: async function () {
      // Remove the arrow function and use a regular function
          const empData = {
            joiningDate: this.joiningDate,
            salary: this.salary,
            empID: this.employeeID,
          };

          if (this.updateDesignation === "") {
            empData.designation = this.selectedDesignation; // Use '=' to assign values
          } else {
            empData.designation = this.updateDesignation;
          }

          if (this.updateDepatment === "") {
            empData.department = this.selectedEmpDepartment; // Use '=' to assign values
          } else {
            empData.department = this.updateDepatment;
          }

          
          if (this.updateUserRole === "") {
            empData.userRole = this.selectedUserRole; // Use '=' to assign values
          } else {
            empData.userRole = this.updateUserRole;
          }


          if (this.updateEmpStatus === "") {
            empData.empStatus = this.selectedEmpStatus; // Use '=' to assign values
          } else {
            empData.empStatus = this.updateEmpStatus;
          }

          if (this.isEmployee === true) {
            empData.TLfullName = this.TLfullName;
            empData.TLUserID = this.TLUserID;
          } else {
            empData.TLfullName = "";
            empData.TLUserID = "";
          }



      console.log('EmpData', empData);

      try {
        await updateEmpAdditionalData(empData, this.employeeID);
        console.log('User data saved to Firebase');

        this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false

          
        if (empData.userRole==='Employee'){
          this.$router.push({name: 'emp_AllLstView'});

        }
        if (empData.userRole==='Team leader'){
          this.$router.push({name: 'emp_AssignTeamLeader'});

        }

        if (empData.userRole==='Admin'){
          this.$router.push({name: 'emp-AdminView'});

        }
        }, 3000) 

      
      } catch (error) {
         console.error('Error:', error);
      }
    },
  },
};
</script>



<style  scoped>

</style>
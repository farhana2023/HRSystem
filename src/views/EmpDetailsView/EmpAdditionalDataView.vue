<template>
  <section>
    <form>
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
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useEmpStore } from '@/stores/empStore'
import { updateEmpAdditionalData } from '@/services/empData'

export default {
  name: 'EmpAdditionalDataView',
  data() {
    return {
      empID: null,
      EmpAdminData:null

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
    }
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
    const salary = ref(0)
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
       salary: salary.value,
      }

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
        salary.value = newVal.salary;
      }
    })

    return {
      joiningDate,
      selectedDesignation,
      selectedDepartment,
      selectedRole,
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

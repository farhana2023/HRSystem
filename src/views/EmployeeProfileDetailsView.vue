<!-- <template>
  <section class="section profile">
    <div class="row">
      <div class="col-xl-4">
        <HrEmpMainProfileCard :empID="empID" />
        {{ employeeData.data.fullName }}
      </div>
    </div>
  </section>
</template> -->

<template>
  <section class="section profile">
    <div class="row">
      <div class="col-xl-4">
        <HrEmpMainProfileCard/>
        <p>Full Name: {{ fullName }}</p>
        <p>Designation: {{ designation }}</p>
      </div>
    </div>
  </section>
</template>









<script>
import { ref, computed } from 'vue';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase/db';
import HrEmpMainProfileCard from '../components/HrEmpMainProfileCard.vue';
import { useEmpStore } from '../stores/empStore'; 

export default {
  name: 'EmployeeProfileDetailsView',
  data() {
    return {
      empID: null,
      employeeData: null,
    };
  },
  components: {
    HrEmpMainProfileCard,
  },
  async mounted() {
    this.empID = this.$route.params.empId;
    console.log('Employee ID:', this.empID);

    const docSnap = await getDoc(doc(db, 'EmployeeProfile', this.empID));
    if (docSnap.exists()) {
      console.log('EmpData', docSnap.data());
      this.employeeData = docSnap.data();
    } else {
      console.log('No data found');
    }
  },
  computed: {
    fullName() {
      return this.employeeData ? this.employeeData.fullName : '';
    },

    designation() {
      return this.employeeData ? this.employeeData.designation : '';
    },
  },
};
</script>



<!-- <script>
import { computed } from 'vue'; // Import computed
import HrEmpMainProfileCard from '../components/HrEmpMainProfileCard.vue';
import { getEmpData } from '../services/empData';
import { useEmpStore } from '../stores/empStore'; 

export default {
  name: 'EmployeeProfileDetailsView',
  data() {
    return {
      empID: null,
      employeeData: null,
    };
  },
  components: {
    HrEmpMainProfileCard,
  },
  async mounted() {
    this.empID = this.$route.params.empId;
    console.log('Employee ID:', this.empID);

    try {
      const docSnap = await getEmpData(this.empID);
      if (docSnap.exists()) {
        console.log('EmpData', docSnap.data());
        this.employeeData = docSnap.data();
        useEmpStore().setEmployeeData(docSnap.data());
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  },
  computed: {
    fullName() {
      return this.employeeData ? this.employeeData.fullName : '';
    },

    designation() {
      return this.employeeData ? this.employeeData.designation : '';
    },
  },
};
</script> -->

<style scoped></style>



<template>
  <div class="card">
    <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
      <img :src="employeeData ? employeeData.image : ''" width="120" alt="Profile" class="rounded-circle" />
      <h2>{{ employeeData ? employeeData.fullName : 'Loading...' }}</h2>
      <h3>{{ employeeData ? employeeData.designation : 'Loading...' }}</h3>
      <!-- <h3>{{  employeeData.designation }}</h3>  -->
      <p>Employee ID: {{ empID }}</p>
      <div class="social-links mt-2">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>
</template>





<script>
import { ref } from 'vue'; // Import ref from Vue
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase/db';

export default {
  name: 'HrEmpMainProfileCard',
  props: {
    empID: String
  },
//   mounted() {
//   this.empID = this.$route.params.empId;
//   console.log("Employee ID:", this.empID);
// }

  setup(props) {
    const employeeData = ref(null);
    console.log('EmployeeID', props.empID);

    async function getEmployee() {
      console.log('EmployeeID', props.empID);
    const docSnap = await getDoc(doc(db, 'EmployeeProfile', 'N9RJHJlXsKUjolmARS4l'));
    console.log('FetchEmployeeID', empID);
    if (docSnap.exists()) {
      console.log('EmpData', docSnap.data());
      employeeData.value = docSnap.data();
    } else {
      console.log('No data found');
    }
  }


  },


  
  // setup(props) {
  //   const employeeData = ref(null);
  //   console.log('EmployeeID', props.empID);
  //   const val = props.empID;
  //   console.log('Val', val);

  //   //empID=props.empID;
  //   //console.log('empID:', empID);
  //   // Define a method to get employee data
  //   async function getEmployee() {
  //     //const docSnap = await getDoc(doc(db, 'EmployeeProfile', 'N9RJHJlXsKUjolmARS4l'));
  //     const docSnap = await getDoc(doc(db, 'EmployeeProfile', val));
  //     if (docSnap.exists()) {
  //       console.log('EmpData', docSnap.data());
  //       employeeData.value = docSnap.data();
  //     } else {
  //       console.log('No data found');
  //     }
  //   }

  //   // Call the method to fetch employee data
  //   getEmployee();

  //   return {
  //     employeeData
  //   };
  // }
 
};
</script>


<!-- <script>
import { useEmployeeData } from '../services/empData';

export default {
  name: 'HrEmpMainProfileCard',
  props: {
    empID: String
  },
  setup(props) {
    const { employeeData, error } = useEmployeeData(props.empID);

    return {
      employeeData,
      error
    };
  }
};
</script> -->

<!-- 
<script>
// import { ref, watchEffect } from 'vue';
// import { getEmpData } from '../services/empData';
import { doc, getDoc } from "firebase/firestore";
// import { useFirestore } from 'vuefire'; // Import useFirestore
import db from '../firebase/db';
export default {
  name: 'HrEmpMainProfileCard',
  props: {
    empID: String
  },
  setup(props) {
    const employeeData = ref(null);
    console.log('EmployeeID', props.empID);

  methods :{
    async getEmployee(){
      const docSnap=await getDoc(doc(db,'EmployeeProfile',props.empID));
      if (docSnap.exists()){
        console.log('EmpData',docSnap.data);
      }
      else{
        console.log('No data Found');
      }
    }
  }






   // const db = useFirestore(); // Initialize Firestore

    // const docRef = doc(db, "EmployeeProfile", props.empID);
    
    // const fetchData = async () => {
    //   const docSnap = await getDoc(docRef);

    //   if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //     employeeData.value = docSnap.data(); // Update employeeData with fetched data
    //   } else {
    //     console.log("No such document!");
    //   }
    // };

    // fetchData(); // Call the fetchData function

    // Now you can use employeeData.value to access the fetched data

    // Fetch employee data when the component is created or when empID changes
    // watchEffect(async () => {
    //   const empData = await getEmpData(props.empID);

    //   console.log('EmpData', empData);
    //   employeeData.value = empData.data();

    //   console.log('employeeData:', employeeData)
    // });

    return {
      employeeData
    };
  }
};
</script> -->



<style scoped></style>

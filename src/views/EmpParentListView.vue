<template>
    <div>

        <HrEmpChildList :lstEmployees="lstEmployees"></HrEmpChildList>
    </div>


<main id="main" class="main">


</main>
</template>



<script>
import HrEmpChildList from '@/components/HrEmpChildList.vue'
import db from '../firebase/db'
import {query,collection,getDocs } from 'firebase/firestore'


export default {
  name: 'EmpParentListView',
  components: 
  {
    HrEmpChildList
  },
  data() {
    return {
        lstEmployees: []
    }
  },

  created(){
            this.getEmployees()
        },
        methods: {
        async getEmployees() {
            const querySnapshot = await getDocs(query(collection(db, 'EmployeeProfile')))
            querySnapshot.forEach((doc) => {
            const employeeData = doc.data();
            const employeeId = doc.id; // This gets the document's ID

    // You can now access both the data and the ID in your employee object
    const employee = {
      id: employeeId,
      data: employeeData
    };

    this.lstEmployees.push(employee);
    console.log('EmployeeList:', employee);
  });}
}

}
</script>

<style  scoped>

</style>
<template>
    <div>
        
        <HrAllEmpLstForMessage :lstEmployees="lstEmployees"></HrAllEmpLstForMessage>
        <!-- <HrEmpListForMessage :lstEmployees="lstEmployees"></HrEmpListForMessage> -->

    </div>
</template>

<script>
// import HrEmpListForMessage from '@/components/HrEmpListForMessage.vue'

import HrAllEmpLstForMessage from '@/components/Message/HrAllEmpLstForMessage.vue'


import db from '@/firebase/db'
import {query,collection,getDocs } from 'firebase/firestore'
    export default {
        name:'EmpListForSendMessageView',

        components:{

            // HrEmpListForMessage,
            HrAllEmpLstForMessage
        },

        data() {
    return {
        lstEmployees: [],

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
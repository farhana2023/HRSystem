// empStore.js
import { defineStore } from 'pinia';

import { updateEmpAdditionalData  } from '../services/empData'; 

export const useEmpStore = defineStore('emp', {
  state: () => ({
    employeeData: null,
    empID: null, 
  }),

  getters: {
    getEmp() {
      return this.employeeData;
    },
    getEmpID() {
      return this.empID; // Getter for empID
    },
  },


  actions: {
    setEmployeeData(data) {
      this.employeeData = data;
      

      // async updateData(empID) {
      //   const empDetails = await updateEmpData(empID);
      //   this.employeeData = empDetails;
      //   return this.employeeData;
      // }

    },

    setEmpID(id){
      this.empID = id;
    },
  },
});

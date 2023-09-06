// empStore.js
import { defineStore } from 'pinia';

export const useEmpStore = defineStore('emp', {
  state: () => ({
    employeeData: null,
  }),

  getters: {
    getEmp() {
      return this.employeeData;
    }
  },
  actions: {
    setEmployeeData(data) {
      this.employeeData = data;
    },
  },
});

// empStore.js
import { defineStore } from 'pinia';

export const useEmpStore = defineStore('emp', {
  state: () => ({
    employeeData: null,
  }),
  actions: {
    setEmployeeData(data) {
      this.employeeData = data;
    },
  },
});

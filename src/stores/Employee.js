// store/employee.js
import { defineStore } from 'pinia';

export const useEmployeeStore = defineStore('employee', {
  state() {
    return {
      employees: [],
    };
  },
  getters: {
    getEmployeeById(id) {
      return this.employees.find(employee => employee.id === id);
    },
  },
  actions: {
    loadEmployees() {
      const storedEmployees = JSON.parse(localStorage.getItem('employees'));
      if (storedEmployees) {
        this.employees = storedEmployees;
      }
    },
    persistEmployees() {
      localStorage.setItem('employees', JSON.stringify(this.employees));
    },
    addEmployee(employee) {
      this.employees.push(employee);
      this.persistEmployees();
    },
    updateEmployee(id, updatedInfo) {
      const employee = this.getEmployeeById(id);
      if (employee) {
        Object.assign(employee, updatedInfo);
        this.persistEmployees();
      }
    },
  },
});

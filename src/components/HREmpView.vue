<template>
    <div>
      <h2>Employee List</h2>
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.name }} - {{ employee.image }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useEmployeeStore } from '../stores/Employee';
  
  export default {
    setup() {
      const employeeStore = useEmployeeStore(); // Create an instance of the employee store
      const employees = employeeStore.employees; // Get the list of employees from the store
      return { employees };

      console.log( employees.name );
    },
  };
  </script>
  
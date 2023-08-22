

<template>
  <section class="section profile">
    <HREmployeeList :employees="employees"></HREmployeeList>
  </section>
</template>

<script>
import { getEmployees } from '../services/employee';
import HREmployeeList from '@/components/HREmployeeList.vue';

export default {
  name: 'EmployeesView',
  components: {
    HREmployeeList,
  },
  data() {
    return {
      employees: [],
    };
  },
  async mounted() {
    try {
      const result = await getEmployees();
      if (result && Array.isArray(result.Employees) && result.Employees.length > 0) {
        this.employees = result.Employees;
      }
    } catch (error) {
      console.error('Error loading employees:', error);
    }
  },
};
</script>


<style  scoped>

</style>
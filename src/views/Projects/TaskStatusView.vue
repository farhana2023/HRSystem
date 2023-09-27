<template>
  <div>
    <label>
      Show
      <select v-model="perPage">
        <option v-for="option in perPageOptions" :key="option" :value="option">{{ option }}</option>
      </select>
      entries per page
    </label>
    <input v-model="search" placeholder="Search..." />
    <table>
      <thead>
        <tr>
          <th @click="sortBy('fullName')">Name</th>
          <th @click="sortBy('email')">Email</th>
          <th @click="sortBy('designation')">Designation</th>
          <th @click="sortBy('joiningDate')">Start Date</th>
          <th @click="sortBy('department')">Department</th>
          <th @click="sortBy('userRole')">UserRole</th>
          <th>Mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in paginatedEmployees" :key="employee.id">
          <td>{{ employee.fullName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.designation }}</td>
          <td>{{ employee.joiningDate }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.userRole }}</td>
          <td>
            <button @click="sendMessage(employee)">Send Message</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeDataTable',
  props: {
    employees: Array,
  },
  data() {
    return {
      perPageOptions: [5, 10, 15, 20, 25],
      perPage: 10,
      currentPage: 1,
      search: '',
      sortKey: '',
      sortOrder: 1,
    };
  },
  computed: {
    sortedEmployees() {
      if (!this.sortKey) {
        return this.employees;
      }

      return this.employees.slice().sort((a, b) => {
        const x = a[this.sortKey].toLowerCase();
        const y = b[this.sortKey].toLowerCase();

        if (x === y) {
          return 0;
        }

        return (x < y ? -1 : 1) * this.sortOrder;
      });
    },
    paginatedEmployees() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.sortedEmployees.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.sortedEmployees.length / this.perPage);
    },
  },
  methods: {
    sortBy(key) {
      if (key === this.sortKey) {
        this.sortOrder *= -1;
      } else {
        this.sortKey = key;
        this.sortOrder = 1;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    
    sendMessage(employee) {
      // Implement your send message logic here
      console.log('Sending message to', employee.fullName);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">My Inbox</h5>
              <div
                class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns search-results"
              >
                <div class="datatable-top">
                  <div class="datatable-dropdown">
                    <label>
                      <select class="datatable-selector">
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                      </select>
                      entries per page
                    </label>
                  </div>
                  <div class="datatable-search">
                    <input
                      v-model="search"
                      class="datatable-input"
                      placeholder="Search..."
                      type="search"
                      title="Search within table"
                    />
                  </div>
                </div>
                <div class="datatable-container">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">From</th>
                        <th scope="col">Message Subject</th>
                        <th scope="col">Date</th>
                        <th scope="col">View</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(message, index) in lstMsg" :key="index">
                        <td>{{ message.sendFrom }}</td>
                        <td>{{ message.sendtoMsgSubject }}</td>
                        <td>{{ Date( message.Date) }}</td>
                        <td class="text-center" style="width: 40px">
                          <button
                            @click.prevent="ViewMsg(index)"
                            type="button"
                            class="btn btn-primary btn-sm"
                          >
                            <i class="bi bi-envelope-open"></i>
                          </button>
                        </td>
                        <td class="text-center" style="width: 40px">
                          <button
                            @click.prevent="DeleteMsg(index)"
                            type="button"
                            class="btn btn-danger btn-sm"
                          >
                            <i class="bi bi-trash3"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="datatable-bottom">
                  <div class="datatable-info">Showing 1 to 1 of 1 entries</div>
                  <nav class="datatable-pagination">
                    <ul class="datatable-pagination-list"></ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script>
  import { useUserStore } from '@/stores/user';
  import { getAllMsg } from '@/services/empData';
  
  export default {
    name: 'EmpPersonalMessageView',
    data() {
      return {
        lstMsg: []
      };
    },



//     computed: {
//     filteredMessage: function () {
//       return this.lstMsg.filter((Messages) => {
//         const searchTerm = this.search.toLowerCase()
//         const From = employee.data.fullName
//           ? employee.data.fullName.toLowerCase().includes(searchTerm)
//           : false

//         const emailMatch = employee.data.email
//           ? employee.data.email.toLowerCase().includes(searchTerm)
//           : false
//         const designationMatch = employee.data.designation
//           ? employee.data.designation.toLowerCase().includes(searchTerm)
//           : false
//         const departmentMatch = employee.data.department
//           ? employee.data.department.toLowerCase().includes(searchTerm)
//           : false

//         const userRoleMatch = employee.data.userRole
//           ? employee.data.userRole.toLowerCase().includes(searchTerm)
//           : false

//         // Combine the conditions using logical OR (||) to find a match in any field
//         return fullNameMatch || emailMatch || designationMatch || departmentMatch || userRoleMatch
//       })
//   },},
    setup() {
      const empPersonalStore = useUserStore();
      return { empPersonalStore };
    },
    created() {
      this.getMsg();
    },
    methods: {
      async getMsg() {
        const userId = this.empPersonalStore.userId; // Assuming you have a userId property in your store

        console.log('userId', userId);
        const Messages = await getAllMsg(userId);
        console.log('Messages', Messages);
        this.lstMsg = Messages; // Assuming lstMsg is meant to store the messages
      }
    }
  };
  </script>
  

<style  scoped>

</style>
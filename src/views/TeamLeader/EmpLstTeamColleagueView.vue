<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">My Team Members</h5>
              <div
                class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns search-results"
              >
                <div class="datatable-top">
                  <div class="datatable-dropdown">
                    <label>
                      <select class="datatable-selector">
                        <option value="5">5</option>
                        <option value="10" selected="">10</option>
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
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                     
                        <th scope="col">Start Date</th>
                        <th scope="col">Degisnation</th>
                        <th scope="col">Deparment</th>
                        <th scope="col">TL Name</th>
              
                        
                        <!-- <th scope="col">Assign Tasks</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(employee, index) in filteredEmployee" :key="index">
  
                        <td class="linkEmp"><RouterLink :to="{ name:'emp-ViewTeamMemberProfile', query: {empId: employee.id}}">
                          
                         
                        <span class="blue-text">{{ employee.fullName }}</span>
                        
                        </RouterLink></td>
                        <td >{{ employee.email }}</td>
                        
                        <td>{{ employee.joiningDate }}</td>
                        <td>{{ employee.designation }}</td>
                        <td>{{ employee.department }}</td>
                        <td>{{ employee.TLfullName }}</td> 
                     
  
  
                        <!-- <td class="text-center" style="width: 40px">
                          <button
                            @click.prevent="AssinedEmp(index)"
                            type="button"
                            class="btn btn-primary btn-sm"
                          >
                            <i class="bi bi-card-list"></i>
                          </button>
                        </td>
                     -->
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="datatable-bottom">
                  <div class="datatable-info">Showing 1 to 1 of 1 entries</div>
                  <nav class="datatable-pagination"><ul class="datatable-pagination-list"></ul></nav>
                </div>
              </div>
              <!-- End Table with stripped rows -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  
  <script>
  
  import {  getAllMyColleague } from '@/services/empData';
  
  import { useUserStore } from '@/stores/user';
    
  export default {
    name: 'EmpLstTeamColleagueView',
    // props: ['lstEmployees'],
  
    data() {
      return {
        search: '',
        LstAllEmployees:[],
        TLUserID:''
        
      }
    },

    setup() {
            const empMyPersonalStore = useUserStore();
            return { empMyPersonalStore };

        },

        mounted() {
    
            this.TLUserID = this.empMyPersonalStore.TLUserID;
            console.log('TLuser',this.TLUserID)


  },
    created (){

              this.getAllMyMemberList()
      // console.log('From Child',this.lstEmployees);
    },
    computed: {
      filteredEmployee: function () {
        return this.LstAllEmployees.filter((employee) => {
          const searchTerm = this.search.toLowerCase()
          const fullNameMatch = employee.fullName
            ? employee.fullName.toLowerCase().includes(searchTerm)
            : false
  
          const emailMatch = employee.email
            ? employee.email.toLowerCase().includes(searchTerm)
            : false
          const designationMatch = employee.designation
            ? employee.designation.toLowerCase().includes(searchTerm)
            : false
          const departmentMatch = employee.department
            ? employee.department.toLowerCase().includes(searchTerm)
            : false
  
          const TlName = employee.TLfullName
            ? employee.TLfullName.toLowerCase().includes(searchTerm)
            : false
  
          // Combine the conditions using logical OR (||) to find a match in any field
          return fullNameMatch || emailMatch || designationMatch || departmentMatch || TlName
        })
      }
    },
  
    methods: {
      async getAllMyMemberList() {
    
        try {
            console.log('tlID', this.empMyPersonalStore.TLUserID);
            const TLID=this.empMyPersonalStore.TLUserID
            const lstEmp = await getAllMyColleague(TLID)  ;
            console.log('LstAllEmployee', lstEmp);
            this.LstAllEmployees = lstEmp ;
            return this.LstAllEmployees;
  
            } catch (error) {
              console.error('Error fetching employee data:', error);
            }
  },
  
  
   
    },
  };
  </script>
  
  
  
  
  <style scoped>
  .linkEmp .blue-text {
    color: blue;
  }
  </style>
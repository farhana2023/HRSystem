<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div
                class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns search-results"
              >
                <div class="datatable-top">
          
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
                        <!-- <th scope="col">#</th> -->
                        <th scope="col">Name</th>
                        <th scope="col">Degisnation</th>
                        <th scope="col">Deparment</th>
                        <!-- <th scope="col">Add</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(employee, index) in filteredTLEmployee" :key="index">
                        <!-- <th scope="row">{{ employee.id  }}</th> -->
  
                        <td class="linkEmp"><RouterLink :to="{ name:'emp_AdditionalData', 
                        params: {TLuserID: employee.id,
                        TLfullName:employee.fullName
                        
                        }}">
                          
                        <span class="blue-text">{{ employee.fullName }}</span>
                        </RouterLink></td>
                        <td>{{ employee.designation }}</td>
                        <td>{{ employee.department }}</td>
                        
                         <td class="text-center" style="width: 40px">
                          <button
                            @click.prevent="sendTLData(employee)"
                            type="button"
                            class="btn btn-primary btn-sm"
                          >
                            <i class="bi bi-person-plus"></i>
                          </button>
                        </td>
                    
                      </tr>
                    </tbody>
                  </table>
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
  
  import { getAllTeamLeader } from '@/services/empData';
  
  export default {
    name: 'HrEmpLstTeamLeader',
    props: ['lstEmployees'],
  
    data() {
      return {
        search: '',
        LstTeamLeader:[],

        
      }
    },

    created(){
            this.lstAllTeamLeader()
        },
    methods: {
            async lstAllTeamLeader(){
            const lstTL = await getAllTeamLeader()
            console.log('LstTeamLeader', lstTL)
            this.LstTeamLeader = lstTL ;
                return this.LstTeamLeader;
        },

        async  sendTLData(employee) {
             this.$emit('send-TL-Data', employee);
                
            
        }


    },
    computed: {
      filteredTLEmployee: function () {
        const searchTerm = this.search.toLowerCase();
        return this.LstTeamLeader.filter((employee) => {
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
  
          // Combine the conditions using logical OR (||) to find a match in any field
          return fullNameMatch || emailMatch || designationMatch || departmentMatch 
        })
      }
    },
  

  };
  </script>
  
  
  
  
  <style scoped>
  .linkEmp .blue-text {
    color: blue;
  }
  </style>
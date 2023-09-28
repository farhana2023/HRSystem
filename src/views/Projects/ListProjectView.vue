<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">List of the Project</h5>
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
                        <th scope="col">Project Tiltle</th>
                        <th scope="col">Client</th>
                        <th scope="col">Status</th>
                        <th scope="col">TL Name</th>
                        <!-- <th scope="col">ID</th> -->
                        <th scope="col">Delete</th>
                
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(Projects, index) in filteredProjects" :key="index">
  
                        <td class="linkEmp"><RouterLink :to="{ name:'edit-Project', query: {ProjectID: Projects.id}}">
                          


                          <span class="blue-text">{{ Projects.projectTitle }}</span>
                        
                        </RouterLink></td> 

                        <td>{{ Projects.Client }}</td>
                        <td>{{ Projects.Status }}</td>
                        <td>{{ Projects.TLfullName }}</td> 
                        <!-- <td>{{ Projects.id }}</td>  -->
  
                        <td class="text-center" style="width: 40px">
                          <button
                            @click.prevent="DeleteEmp(index)"
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
import {deleteProjectData,getAllLstProject } from '@/services/ProjectData';

    export default {
        name:'ListProjectView',

            
        data() {
            return {
                lstProjects: [],
                search: '',

            }
        },    
        
 
        created (){
        
        this.getAllProjectList()
// console.log('From Child',this.lstEmployees);
},
computed: {
filteredProjects: function () {
  return this.lstProjects.filter((Projects) => {

    const searchTerm = this.search.toLowerCase()
    const TitleMatch = Projects.projectTitle
      ? Projects.projectTitle.toLowerCase().includes(searchTerm)
      : false

    const ClientMatch = Projects.Client
      ? Projects.Client.toLowerCase().includes(searchTerm)
      : false
    const statusMatch = Projects.Status
      ? Projects.Status.toLowerCase().includes(searchTerm)
      : false

    const TlName = Projects.TLfullName
      ? Projects.TLfullName.toLowerCase().includes(searchTerm)
      : false

    // Combine the conditions using logical OR (||) to find a match in any field
    return TitleMatch || ClientMatch || statusMatch || TlName 
  })
}
},

methods: {
async getAllProjectList() {

  try {
    const lstproject = await getAllLstProject();
    console.log('lstProjects', lstproject);
    this.lstProjects = lstproject ;
      return this.lstProjects;

      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
},


async DeleteEmp(index) {
  const projectToDelete = this.lstProjects[index];

  const confirmDelete = window.confirm('Are you sure you want to permanently delete this Project?');

  if (confirmDelete) {


    try {

  
      await deleteProjectData(projectToDelete);
      //employeeToDelete.splice(index,1);
     this.lstProjects.splice(index, 1);

      
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  } else {
    // User canceled deletion
    // No action needed if the user cancels; the employee won't be deleted.
  }
},
},
};
</script>


<style  scoped>
  .linkEmp .blue-text {
    color: blue;
  }
</style>
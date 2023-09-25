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
                        <th scope="col">Status</th>
                        <th scope="col">Tasks</th>

                
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(Projects, index) in filteredProjects" :key="index">
  
                         <td class="linkEmp"><RouterLink :to="{ name:'edit-Project', query: {ProjectID: Projects.id}}">
                          


                          <span class="blue-text">{{ Projects.projectTitle }}</span>
                        
                        </RouterLink></td> 
                        <!-- <td >{{ Projects.projectTitle }}</td> -->
                        <td>{{ Projects.Client }}</td>
                        <td>{{ Projects.Status }}</td>
                        <td>{{ Projects.TLfullName }}</td> 
                        <!-- <td>{{ Projects.id }}</td>  -->
  
                                 
                        <td class="text-center" style="width: 40px">
                          <button
                            @click.prevent="ProjectStatus(Projects)"
                            type="button"
                            class="btn btn-primary btn-sm"
                          >
                            <i class="bi bi-check2-square"></i>
                          </button>
                        </td>
                        
                        <td class="text-center" style="width: 40px">
                          <button
                            @click.prevent="ProjectTasks(Projects)"
                            type="button"
                            class="btn btn-primary btn-sm"
                          >
                            <i class="bi bi-card-list"></i>
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
  import { getAllMyProject } from '@/services/ProjectData'
  
  import { useUserStore } from '@/stores/user'
  
  export default {
    name: 'ProjectByTLView',
    // props: ['lstEmployees'],
  
    data() {
      return {
        search: '',
        LstAllProject: [],
        TLUserID: ''
      }
    },
  
    setup() {
      const empMyPersonalStore = useUserStore()
      return { empMyPersonalStore }
    },
  
    mounted() {
      this.TLUserID = this.empMyPersonalStore.userId
      console.log('TLuser', this.TLUserID)
    },
    created() {
      this.getAllMyProjectList()
      // console.log('From Child',this.lstEmployees);
    },
    computed: {
filteredProjects: function () {
  return this.LstAllProject.filter((Projects) => {

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
      async getAllMyProjectList() {
        try {
          console.log('tlID', this.empMyPersonalStore.userId)
          const TLID = this.empMyPersonalStore.userId
          const lstProject = await getAllMyProject(TLID)
          console.log('LstAllProject', lstProject)
          this.LstAllProject = lstProject
          return this.LstAllProject
        } catch (error) {
          console.error('Error fetching project data:', error)
        }
      },
    


      async  ProjectStatus(Projects){
      console.log('from Projects', Projects)
      console.log('title', Projects.projectTitle)

      this.$router.push({
        name: 'update-ProjectStatus',
        query: {
          id: Projects.id,
          projectTitle: Projects.projectTitle

        }
      })
    },
      async ProjectTasks(Projects){
      console.log('from Projects', Projects)
      console.log('title', Projects.projectTitle)

      this.$router.push({
        name: 'create-TasksByProject',
        query: {
          id: Projects.id,
          projectTitle: Projects.projectTitle,
          Client: Projects.Client,
          Description: Projects.ProjectDescription,
        }
      })
    },
    },



  }
  </script>
  
  <style scoped>
  .linkEmp .blue-text {
    color: blue;
  }
  </style>
  
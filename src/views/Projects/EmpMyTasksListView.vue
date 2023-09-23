<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">My Tasks</h5>
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
                        <th scope="col">Project Tiltle</th>
                        <th scope="col">Task</th>
                        <th scope="col">Assign Date</th>
                        <th scope="col">Delivery Date</th>
                        <th scope="col">Status</th>

                
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(Tasks, index) in filteredTasks" :key="index">
  
                         <!-- <td class="linkEmp"><RouterLink :to="{ name:'edit-Project', query: {ProjectID: Projects.id}}">
                          


                          <span class="blue-text">{{ Projects.projectTitle }}</span>
                        
                        </RouterLink></td>  -->
                        <td >{{ Tasks.projectTitle }}</td>
                        <td>{{ Tasks.TaskName }}</td>
                        <td>{{ Tasks.TaskAssignDate }}</td>
                        <td>{{ Tasks.TaskDeliveryDate }}</td> 
                        <!-- <td>{{ Projects.id }}</td>  -->
  

                        
                        <td class="text-center" style="width: 40px">
                          <button
                            @click.prevent="UpdateTasks(Tasks)"
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
              
              </div>
              <!-- End Table with stripped rows -->
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

import { getMyTaskList } from '@/services/ProjectTasksData'
  
import { useUserStore } from '@/stores/user'

import { useTaskStore } from '@/stores/ProjectTask'


  export default {
    name: 'ProjectByTLView',
    // props: ['lstEmployees'],
  
    data() {
      return {
        search: '',
        LstAllTask: [],
        TMUserID: ''
      }
    },
  
    setup() {
      const empMyPersonalStore = useUserStore()
      return { empMyPersonalStore }
    },
  
    mounted() {
      this.TMUserID = this.empMyPersonalStore.userId
      console.log('TMUserID', this.TMUserID)
    },
    created() {
      this.getMyAllTaskList()
      // console.log('From Child',this.lstEmployees);
    },
    computed: {
filteredTasks: function () {
  return this.LstAllTask.filter((Tasks) => {

    const searchTerm = this.search.toLowerCase()
    const TitleMatch = Tasks.projectTitle
      ? Tasks.projectTitle.toLowerCase().includes(searchTerm)
      : false

    const TaskName = Tasks.TaskName
      ? Tasks.TaskName.toLowerCase().includes(searchTerm)
      : false
    const TaskAssignDate = Tasks.TaskAssignDate
      ? Tasks.TaskAssignDate.toLowerCase().includes(searchTerm)
      : false

    const TaskDeliveryDate = Tasks.TaskDeliveryDate
      ? Tasks.TaskDeliveryDate.toLowerCase().includes(searchTerm)
      : false

    // Combine the conditions using logical OR (||) to find a match in any field
    return TitleMatch || TaskName || TaskAssignDate || TaskDeliveryDate 
  })
}
},

  
    methods: {
      async getMyAllTaskList() {
        try {
          console.log('tlID', this.empMyPersonalStore.userId)
          const TMID = this.empMyPersonalStore.userId
          const lstTasks = await getMyTaskList(TMID)

          const taskStore = useTaskStore();
          taskStore.setTaskData(lstTasks);
          taskStore.setTaskID(lstTasks.id);
            

          console.log('MyTaskStore', taskStore);
          console.log('LstAllMyTasks', lstTasks);
          this.LstAllTask = lstTasks
          return this.LstAllTask
        } catch (error) {
          console.error('Error fetching Task data:', error)
        }
      },

      async UpdateTasks(Tasks){
      console.log('from Projects', Tasks)
      console.log('title', Tasks.projectTitle)
      console.log('id', Tasks.id)

      this.$router.push({
        name: 'task-Status',
        query: {
          id: Tasks.id,
          TaskName: Tasks.TaskName,
          TaskDescription: Tasks.TaskDescription,
        
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
  
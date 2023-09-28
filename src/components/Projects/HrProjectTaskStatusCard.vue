<template>
    <div class="card-body">
      <p class="mb-4 bold "><span class="text-primary font-italic me-1">Project</span> Tasks Status
                  </p>
  
              <hr>
        <div v-for="task in LstTaskProgressStatus" :key="task.id">
          <p class="mb-1 bold pt-3" style="font-size: .77rem;">{{ task ? task.TMFullName : 'Loading...' }}</p>
          <p class="mb-1" style="font-size: .77rem;">{{ task ? task.TaskName : 'Loading...' }}</p>
          <div class="progress rounded" style="height: 15px;">
  
            <div class="progress-bar"
                 :style="{ width: task ? task.TaskStatus + '%' : '0%' }"
                 role="progressbar"
                 :aria-valuenow="task ? task.TaskStatus : 0"
                 aria-valuemin="0"
                 aria-valuemax="100">{{ task ? (task.TaskStatus !== null ? task.TaskStatus + '%' : '0%') : 'Loading...' }}
            </div>
          </div>
        </div>
       
      </div>
      {{ fromProjectID }}
    </template>

<script>

import { getAllTasksByProjectID } from '@/services/ProjectTasksData'
import { computed } from 'vue';
import { useProjectStore } from '@/stores/Project'

export default {

  name:'TasksProgressStatusView',
  props: ['projectID'],


  data() {
  return {
    LstTaskProgressStatus: [],

     pProjectID: null,
  };
},

created() {
  this.pProjectID = this.projectID; 
  this.getTaskStatus();
},


  methods:{
      async getTaskStatus() {
        console.log('pIDtest ',this.pProjectID);
        try {
            console.log('pID',this.pProjectID);
 
            const lstTasks = await getAllTasksByProjectID(this.pProjectID)  ;
            console.log('LstAllTaskByProject', lstTasks);
            this.LstTaskProgressStatus = lstTasks ;
            return this.LstTaskProgressStatus;
  
            } catch (error) {
              console.error('Error fetching employee data:', error);
            }
  },
  
  
   
    },
  
}
</script>

<style  scoped>
.bold {
   font-weight:bold
}

</style>
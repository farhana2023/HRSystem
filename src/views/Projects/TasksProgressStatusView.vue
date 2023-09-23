<template>
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Task Status
                </p>
                <p class="mb-1" style="font-size: .77rem;">Web Design Test</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                <div class="progress rounded mb-2" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import  { getTaskDetails } from '@/services/ProjectTaskData'
import { computed } from 'vue';
import { useProjectStore } from '@/stores/Project'

    export default {
        name:'TasksProgressStatusView',
        data(){
          return{
            getTaskProgressStatus:[],


          }
        },

        created(){
          this.getTaskStatus();


        },

        setup() {
            const projectStore = useProjectStore();
            const pID = computed(() => projectStore.getProjectID);
            console.log('ProjectID', pID);
            return {
              pID,
    };
        },

        methods:{
          async getTaskStatus(){

            const TaskProgressData=await getTaskDetails(this.pID);

            console.log('TaskProgressData',TaskProgressData);
          }

        }
        
    }
</script>

<style  scoped>

</style>



<template>
    <section class="section">

        
<div class="col-lg-6">
                    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Project Progress</h5>

      <ul class="list-group">
        <li  class="list-group-item">



            
      <div class="row mb-3 pt-2">
                  <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                    >Planning</label
                  >
                  <div class="col-md-8 col-lg-7">
                    <input type="number" class="form-control" v-model="PlanningProgress" />
                  </div>
                </div>


                <div class="row mb-3 pt-2">
                  <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                    > Analysis</label
                  >
                  <div class="col-md-8 col-lg-7">
                    <input type="number" class="form-control" v-model="AnalysisProgress" />
                  </div>
                </div>


                <div class="row mb-3 pt-2">
                  <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                    >Design</label
                  >
                  <div class="col-md-8 col-lg-7">
                    <input type="number" class="form-control" v-model="DesignProgress" />
                  </div>
                </div>

                <div class="row mb-3 pt-2">
                  <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                    >Implementation</label
                  >
                  <div class="col-md-8 col-lg-7">
                    <input type="number" class="form-control" v-model="ImplementationProgress" />
                  </div>
                </div>

                <div class="row mb-3 pt-2">
                  <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                    >Testing</label
                  >
                  <div class="col-md-8 col-lg-7">
                    <input type="number" class="form-control" v-model="TestingProgress" />
                  </div>
                </div>
                <div class="row mb-3 pt-2">
                  <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                    >Deployment</label
                  >
                  <div class="col-md-8 col-lg-7">
                    <input type="number" class="form-control" v-model="DeploymentProgress" />
                  </div>
                </div>

                <div class="row mb-3 pt-2">
                  <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                    >Maintenance</label
                  >
                  <div class="col-md-8 col-lg-7">
                    <input type="number" class="form-control" v-model="MaintenanceProgress" />
                  </div>
                </div>

                <div class="row mb-3">
                <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                  >Progress update Date</label
                >
                <div class="col-md-8 col-lg-7">
                  <input type="date" class="form-control" v-model="ProjectStatusUpdateDate" />
                </div>
              </div>


                <div class="row mb-3 pt-2">
                  <label for="about" class="col-md-4 col-lg-5 col-form-label"
                    >Project Update Summary</label
                  >
                  <div class="col-md-8 col-lg-7">
                    <textarea
                      name="about"
                      class="form-control"
                      id="about"
                      style="height: 100px"
                      v-model="ProjectUpdateSummary"
                    ></textarea>
                  </div>
    </div>

 
                
        </li>
      </ul>


  
            
                </div>



    <div class="text-center">
                <button @click.prevent="UpdateTask()" type="submit" class="btn btn-secondary">
                  Update Status
                </button>
              </div>

              <div class="card-footer">
                <div v-if="dataSaved" class="alert alert-success mt-3">
                  <Strong>Task updated successfully!</Strong>
                </div>
              </div>
</div>
  </div>
    </section>
</template>

<script>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { setProjectProgressData,getProjectProgressData } from '@/services/ProjectData'

export default {
  name: 'UpdateProjectStatusView',

  data() {
    return{
      ProjectID: this.$route.query.id,
      PlanningProgress:'',
      AnalysisProgress:'',
      DesignProgress:'',
      ImplementationProgress:'',
      TestingProgress:'',
      DeploymentProgress:'',
      MaintenanceProgress:'',
      ProjectUpdateDate: '',
      ProjectUpdateSummary: '',
      ProjectStatusUpdateDate: '',
      dataSaved: false


    }
  },


  created() {
  this.getprogressData();
},
mounted() {
  this.getprogressData();
},


  methods: {



    async getprogressData() {
    try {
      const pProgressData = await getProjectProgressData(this.$route.query.id);
      console.log('GetprogressData', pProgressData);
      if (pProgressData) {
        this.PlanningProgress = pProgressData.PlanningProgress;
        this.AnalysisProgress = pProgressData.AnalysisProgress;

        this.DesignProgress = pProgressData.DesignProgress;
        this.ImplementationProgress = pProgressData.ImplementationProgress;
        this.DeploymentProgress = pProgressData.DeploymentProgress;

        this.TestingProgress = pProgressData.TestingProgress;
        this.MaintenanceProgress = pProgressData.MaintenanceProgress;
        this.ProjectStatusUpdateDate = pProgressData.ProjectStatusUpdateDate;
        this.ProjectUpdateSummary = pProgressData.ProjectUpdateSummary;

      }
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  },
   async UpdateTask() {
      const ProjectProgressData = {
        id: this.ProjectID, // Use ProjectID directly from data
        ProjectUpdateSummary: this.ProjectUpdateSummary,
        ProjectStatusUpdateDate: this.ProjectStatusUpdateDate,

        PlanningProgress: this.PlanningProgress === '' ? 0 : this.PlanningProgress,
        AnalysisProgress: this.AnalysisProgress === '' ? 0 : this.AnalysisProgress,

        DesignProgress: this.DesignProgress === '' ? 0 : this.DesignProgress,
        ImplementationProgress: this.ImplementationProgress === '' ? 0 : this.ImplementationProgress,
        TestingProgress: this.TestingProgress === '' ? 0 : this.TestingProgress,
        
        DeploymentProgress: this.DeploymentProgress === '' ? 0 : this.DeploymentProgress,
        MaintenanceProgress: this.MaintenanceProgress === '' ? 0 : this.MaintenanceProgress

      };


      

      console.log('ProjectProgressData', ProjectProgressData);

     
      try {
        await setProjectProgressData(ProjectProgressData);
        this.dataSaved = true;
        setTimeout(() => {
          this.dataSaved = false;
        //  this.$router.push({ name: 'emp-MyTasksListView' });
        }, 3000); // Display success message for 3 seconds
      } catch (error) {
        console.error('Error updating  data:', error);
        this.errorMessage = 'Error updating  data. Please try again.';
      }
    }
  }
};
</script>


  <style scoped></style>
  
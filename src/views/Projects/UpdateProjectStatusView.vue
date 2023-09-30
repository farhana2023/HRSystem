<template>
  <section class="section">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-header Color">Project Progress</div>
        <div class="card-body">
       

          <ul class="list-group pt-4">
            <li class="list-group-item SDLC pt-2">
 
              <div class="row mb-3 pt-1">
                <label for="Planning" class="col-md-4 col-lg-3 col-form-label">Planning</label>
                <div class="col-md-4 col-lg-3">
                  <input type="number" class="form-control" v-model="PlanningProgress" />
                </div>
                <label for="Analysis" class="col-md-4 col-lg-3 col-form-label">Analysis</label>
                <div class="col-md-4 col-lg-3">
                  <input type="number" class="form-control" v-model="AnalysisProgress" />
                </div>
              </div>


              <div class="row mb-3 pt-1">
                <label for="Planning" class="col-md-4 col-lg-3 col-form-label">Design</label>
                <div class="col-md-4 col-lg-3">
                  <input type="number" class="form-control" v-model="DesignProgress" />
                </div>
                <label for="Analysis" class="col-md-4 col-lg-3 col-form-label">Implementation</label>
                <div class="col-md-4 col-lg-3">
                  <input type="number" class="form-control" v-model="ImplementationProgress" />
                </div>
              </div>

     
              
              <div class="row mb-3 pt-1">
                <label for="Planning" class="col-md-4 col-lg-3 col-form-label">Testing</label>
                <div class="col-md-4 col-lg-3">
                  <input type="number" class="form-control" v-model="TestingProgress" />
                </div>
                <label for="Analysis" class="col-md-4 col-lg-3 col-form-label">Deployment</label>
                <div class="col-md-4 col-lg-3">
                  <input type="number" class="form-control" v-model="DeploymentProgress" />
                </div>
              </div>

<!-- 
              <div class="row mb-3 pt-1">
                <label for="Planning" class="col-md-4 col-lg-3 col-form-label">Maintenance</label>
                <div class="col-md-4 col-lg-3">
                  <input type="number" class="form-control" v-model="MaintenanceProgress" />
                </div>
               
              </div> -->

            </li>
          </ul>

              <div class="row mb-3 pt-3">
                <label for="Email" class="col-md-4 col-lg-5 col-form-label"
                  >Over All Progress</label
                >
                <div class="col-md-8 col-lg-7">
                  <input type="number" class="form-control" v-model="OverAllProgress" />
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

              <div class="row mb-3 pt-1">
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
        
        </div>


        <div class="card-footer">

          <div class="text-center">
          <button @click.prevent="UpdateTask()" type="submit" class="btn btn-primary">
            Update Status
          </button>
        </div>

          <div v-if="dataSaved" class="alert alert-success mt-3 pt-2">
            <Strong>Progress Data updated successfully!</Strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { setProjectProgressData, getProjectProgressData } from '@/services/ProjectData'

export default {
  name: 'UpdateProjectStatusView',

  data() {
    return {
      ProjectID: this.$route.query.id,
      projectTitle: this.$route.query.projectTitle,
  
      PlanningProgress: '',
      AnalysisProgress: '',
      DesignProgress: '',
      ImplementationProgress: '',
      TestingProgress: '',
      DeploymentProgress: '',
      // MaintenanceProgress: '',
      ProjectUpdateDate: '',
      ProjectUpdateSummary: '',
      ProjectStatusUpdateDate: '',
      OverAllProgress: '',
      dataSaved: false
    }
  },

  created() {
    this.getprogressData()
  },
  mounted() {
    this.getprogressData()
  },

  methods: {
    async getprogressData() {
      try {
        const pProgressData = await getProjectProgressData(this.$route.query.id)
        console.log('GetprogressData', pProgressData)
        if (pProgressData) {
          this.PlanningProgress = pProgressData.PlanningProgress
          this.AnalysisProgress = pProgressData.AnalysisProgress

          this.DesignProgress = pProgressData.DesignProgress
          this.ImplementationProgress = pProgressData.ImplementationProgress
          this.DeploymentProgress = pProgressData.DeploymentProgress

          this.TestingProgress = pProgressData.TestingProgress
          // this.MaintenanceProgress = pProgressData.MaintenanceProgress
          this.ProjectStatusUpdateDate = pProgressData.ProjectStatusUpdateDate
          this.ProjectUpdateSummary = pProgressData.ProjectUpdateSummary
          this.OverAllProgress = pProgressData.OverAllProgress
        }
      } catch (error) {
        console.error('Error fetching project data:', error)
      }
    },
    async UpdateTask() {
      const ProjectProgressData = {
        id: this.ProjectID, // Use ProjectID directly from data
        projectTitle:this.projectTitle,
        ProjectUpdateSummary: this.ProjectUpdateSummary,
        ProjectStatusUpdateDate: this.ProjectStatusUpdateDate,

        PlanningProgress: this.PlanningProgress === '' ? 0 : this.PlanningProgress,
        AnalysisProgress: this.AnalysisProgress === '' ? 0 : this.AnalysisProgress,

        DesignProgress: this.DesignProgress === '' ? 0 : this.DesignProgress,
        ImplementationProgress:
          this.ImplementationProgress === '' ? 0 : this.ImplementationProgress,
        TestingProgress: this.TestingProgress === '' ? 0 : this.TestingProgress,

        DeploymentProgress: this.DeploymentProgress === '' ? 0 : this.DeploymentProgress,
        // MaintenanceProgress: this.MaintenanceProgress === '' ? 0 : this.MaintenanceProgress,
        OverAllProgress: this.OverAllProgress === '' ? 0 : this.OverAllProgress
      }

      console.log('ProjectProgressData', ProjectProgressData)

      try {
        await setProjectProgressData(ProjectProgressData)
        this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false
            this.$router.push({ name: 'Lst-ProjectByTL' });
        }, 3000) // Display success message for 3 seconds
      } catch (error) {
        console.error('Error updating  data:', error)
        this.errorMessage = 'Error updating  data. Please try again.'
      }
    }
  }
}
</script>

<style scoped>

.Color {
  background-color:  #6082B6;
  color: white;
  font-weight: bold;
}
.SDLC {
  background-color: rgb(237, 239, 241);
}
</style>

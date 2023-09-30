<template>
  <div class="card-body" v-for="pProgress in pProgressData" :key="pProgress.id">
    <div>
      <p class="mb-1 bold pt-3" style="font-size: 1.5rem">
        <RouterLink :to="{ name: 'edit-Project', query: { ProjectID: pProgress.id } }">
          <span style="color: blue">
            {{ pProgress.projectTitle ? pProgress.projectTitle : 'Loading...' }}</span
          >
        </RouterLink>
      </p>
      <hr />

      <div>
        <p class="mb-1" style="font-size: 0.99rem">Project Progress</p>
        <div class="progress rounded" style="height: 20px">
          <div
            class="progress-bar progress-bar-striped bg-primary progress-bar-animated"
            :style="{ width: pProgress.OverAllProgress ? pProgress.OverAllProgress + '%' : '0%' }"
            role="progressbar"
            :aria-valuenow="pProgress.OverAllProgress ? pProgress.OverAllProgress : 0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{
              pProgress.OverAllProgress
                ? pProgress.OverAllProgress !== null
                  ? pProgress.OverAllProgress + '%'
                  : '0%'
                : 'Loading...'
            }}
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="pt-2">
        <p class="mb-1" style="font-size: 0.99rem">Analysis Progress</p>
        <div class="progress rounded" style="height: 15px">
          <div
            class="progress-bar progress-bar-striped bg-info progress-bar-animated"
            :style="{ width: AnalysisProgress ? AnalysisProgress + '%' : '0%' }"
            role="progressbar"
            :aria-valuenow="AnalysisProgress ? AnalysisProgress : 0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{
              AnalysisProgress
                ? AnalysisProgress !== null
                  ? AnalysisProgress + '%'
                  : '0%'
                : 'Loading...'
            }}
          </div>
        </div>
      </div>
  
      <div class="pt-2">
        <p class="mb-1" style="font-size: 0.99rem">Design Progress</p>
        <div class="progress rounded" style="height: 15px">
          <div
            class="progress-bar progress-bar-striped bg-warning progress-bar-animated"
            :style="{ width: DesignProgress ? DesignProgress + '%' : '0%' }"
            role="progressbar"
            :aria-valuenow="DesignProgress ? DesignProgress : 0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{
              DesignProgress ? (DesignProgress !== null ? DesignProgress + '%' : '0%') : 'Loading...'
            }}
          </div>
        </div>
      </div>
  
      <div class="pt-2">
        <p class="mb-1" style="font-size: 0.99rem">Implementation Progress</p>
        <div class="progress rounded" style="height: 15px">
          <div
            class="progress-bar progress-bar-striped bg-danger progress-bar-animated"
            :style="{ width: ImplementationProgress ? ImplementationProgress + '%' : '0%' }"
            role="progressbar"
            :aria-valuenow="ImplementationProgress ? ImplementationProgress : 0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{
              ImplementationProgress
                ? ImplementationProgress !== null
                  ? ImplementationProgress + '%'
                  : '0%'
                : 'Loading...'
            }}
          </div>
        </div>
      </div>
      <div class="pt-2">
        <p class="mb-1" style="font-size: 0.99rem">Testing Progress</p>
        <div class="progress rounded" style="height: 15px">
          <div
          class="progress-bar progress-bar-striped bg-info progress-bar-animated"
            :style="{ width: TestingProgress ? TestingProgress + '%' : '0%' }"
            role="progressbar"
            :aria-valuenow="TestingProgress ? TestingProgress : 0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{
              TestingProgress
                ? TestingProgress !== null
                  ? TestingProgress + '%'
                  : '0%'
                : 'Loading...'
            }}
          </div>
        </div>
      </div>
  
      <div class="pt-2">
        <p class="mb-1" style="font-size: 0.99rem">Deployment Progress</p>
        <div class="progress rounded" style="height: 15px">
          <div
          class="progress-bar progress-bar-striped progress-bar-animated"
            :style="{ width: DeploymentProgress ? DeploymentProgress + '%' : '0%' }"
            role="progressbar"
            :aria-valuenow="DeploymentProgress ? DeploymentProgress : 0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{
              DeploymentProgress
                ? DeploymentProgress !== null
                  ? DeploymentProgress + '%'
                  : '0%'
                : 'Loading...'
            }}
          </div>
        </div>
      </div>
      <div class="pt-2">
        <p class="mb-1" style="font-size: 0.99rem">MaintenanceProgress</p>
        <div class="progress rounded" style="height: 15px">
          <div
          class="progress-bar progress-bar-striped bg-success progress-bar-animated"
            :style="{ width: MaintenanceProgress ? MaintenanceProgress + '%' : '0%' }"
            role="progressbar"
            :aria-valuenow="MaintenanceProgress ? MaintenanceProgress : 0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{
              MaintenanceProgress
                ? MaintenanceProgress !== null
                  ? MaintenanceProgress + '%'
                  : '0%'
                : 'Loading...'
            }}
          </div>
        </div>
      </div>  -->
  </div>
</template>

<script>
import { getAllProjectProgress } from '@/services/ProjectData'

export default {
  name: 'HrProjectProgressCard',
  props: ['projectID'],

  data() {
    return {
      pProjectID: '',
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
      dataSaved: false,
      pProgressData: []
    }
  },

  created() {
    //   this.p=pProgressData;
    //ProjectID = this.projectID
    this.getprogressData()
  },
  mounted() {
    this.getprogressData()
  },

  methods: {
    async getprogressData() {
      try {
        const ProgressData = await getAllProjectProgress()
        console.log('GetprogressData', ProgressData)
        this.pProgressData = ProgressData

        console.log('this.pProgressData', this.pProgressData)
        if (ProgressData) {
          this.PlanningProgress = ProgressData.PlanningProgress
          this.AnalysisProgress = ProgressData.AnalysisProgress

          this.DesignProgress = ProgressData.DesignProgress
          this.ImplementationProgress = ProgressData.ImplementationProgress
          this.DeploymentProgress = ProgressData.DeploymentProgress

          this.TestingProgress = ProgressData.TestingProgress
          // this.MaintenanceProgress = pProgressData.MaintenanceProgress
          this.ProjectStatusUpdateDate = ProgressData.ProjectStatusUpdateDate
          this.ProjectUpdateSummary = ProgressData.ProjectUpdateSummary
          this.OverAllProgress = ProgressData.OverAllProgress
        }
      } catch (error) {
        console.error('Error fetching project data:', error)
      }
    }
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>

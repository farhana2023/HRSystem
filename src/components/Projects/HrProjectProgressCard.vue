<template>
  <div class="card-body">
    <p class="mb-4 bold">
      <span class="text-primary font-italic me-1">Project Status</span> 
    </p>

    <div>
      <p class="mb-1" style="font-size: 0.99rem">OverAll  Project Progress</p>
      <div class="progress rounded" style="height: 15px">
        <div
        class="progress-bar progress-bar-striped bg-success progress-bar-animated"
     
          :style="{ width: OverAllProgress ? OverAllProgress + '%' : '0%' }"
          role="progressbar"
          :aria-valuenow="OverAllProgress ? OverAllProgress : 0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{
            OverAllProgress
              ? OverAllProgress !== null
                ? OverAllProgress + '%'
                : '0%'
              : 'Loading...'
          }}
        </div>
      </div>
    </div>

    <hr />
    <div>
      <p class="mb-1" style="font-size: 0.99rem">Planning Progress</p>
      <div class="progress rounded" style="height: 15px">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          :style="{ width: PlanningProgress ? PlanningProgress + '%' : '0%' }"
          role="progressbar"
          :aria-valuenow="PlanningProgress ? PlanningProgress : 0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{
            PlanningProgress
              ? PlanningProgress !== null
                ? PlanningProgress + '%'
                : '0%'
              : 'Loading...'
          }}
        </div>
      </div>
    </div>

    <div class="pt-2">
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
    <!-- <div class="pt-2">
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
    </div> -->
  </div>
</template>

<script>
import { getProjectProgressData } from '@/services/ProjectData'

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
      dataSaved: false
    }
  },

  created() {
    this.pProjectID = this.projectID
    this.getprogressData()
  },
  mounted() {
    this.getprogressData()
  },

  methods: {
    async getprogressData() {
      try {
        const pProgressData = await getProjectProgressData(this.pProjectID)
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
    }
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>

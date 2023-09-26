<template>
  <section v-for="project in ProjectData" :key="project.id">
    <div class="container py-1">
      <div class="row">
        <div class="col">
          <nav
            aria-label="breadcrumb"
            class="rounded-3 p-2 mb-4 bold"
            style="background-color: #6082b6"
          >
            <h5 style="color: #fff">Project Summary</h5>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 rounded-3">
          <div class="card mb- 4">
            <div class="card-body m-4 rounded-3">
              <div class="row">
                <div class="col-sm-4 bold">
                  <h8>Project Titile</h8>
                </div>
                <div class="col-sm-8">
                  <p class="text-muted mb-0">{{ project ? project.projectTitle : 'Loading...' }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-4 bold bold">
                  <h8>Client</h8>
                </div>
                <div class="col-sm-8">
                  <p class="text-muted mb-0">{{ project ? project.Client : 'Loading...' }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-4 bold bold">
                  <h8>Description</h8>
                </div>
                <div class="col-sm-8">
                  <p class="text-muted mb-0">
                    {{ project ? project.ProjectDescription : 'Loading...' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb- 4">
            <div class="card-body m-4 rounded-3">
              <HrProjectProgressCard :projectID="projectID"></HrProjectProgressCard>
            </div>
          </div>
        </div>

  
        <div class="col-lg-7">
          <div class="card mb-4">
            <div class="card-body m-3">
              <div class="row">
                <div class="col-sm-4 bold">
                  <p class="mb-0 bold">Project Team Leader</p>
                </div>
                <div class="col-sm-8">
                  <p class="text-muted mb-0">{{ project ? project.TLfullName : 'Loading...' }}</p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-4 bold">
                  <p class="mb-0">Expected Start Date</p>
                </div>
                <div class="col-sm-8">
                  <p class="text-muted mb-0">{{ project ? project.ExStartDate : 'Loading...' }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-4 bold">
                  <p class="mb-0">Expected End Date</p>
                </div>
                <div class="col-sm-8">
                  <p class="text-muted mb-0">{{ project ? project.ExEndDate : 'Loading...' }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-4">
                  <p class="mb-0 bold">Status</p>
                </div>
                <div class="col-sm-8">
                  <p class="text-muted mb-0">{{ project ? project.Status : 'Loading...' }}</p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-4">
                  <p class="mb-0 bold">Priority</p>
                </div>
                <div class="col-sm-8">
                  <p class="text-muted mb-0">{{ project ? project.Priority : 'Loading...' }}</p>
                </div>
              </div>
            </div>
          </div>

    
          <div class="card mb-4">
            <div class="card-body m-3">
              <HrProjectTaskStatusCard :projectID="projectID"></HrProjectTaskStatusCard>
            </div>
          </div>
        </div>



        <!-- <div class="col-lg-7">
        <div class="card mb-4  ">
          <div class="card-body m-3">
           
            <div class="row">
              <HrProjectTaskStatusCard :projectID="projectID"></HrProjectTaskStatusCard>
            </div>
      
          </div>
        </div>


      </div> -->
      </div>
    </div>
  </section>

  <!-- <HrProjectViewCard :ProjectData="ProjectData"></HrProjectViewCard> -->
</template>

<script>
import HrProjectTaskStatusCard from '@/components/Projects/HrProjectTaskStatusCard.vue'
import HrProjectProgressCard from '@/components/Projects/HrProjectProgressCard.vue'
import { getProjectDetails } from '@/services/ProjectData'

import { useProjectStore } from '@/stores/Project'

export default {
  name: 'EditProjectView',
  components: {
    HrProjectTaskStatusCard,
    HrProjectProgressCard
  },
  data() {
    return {
      ProjectTiltle: '',
      ExStartDate: '',
      ExEndDate: '',
      selectedPriority: '',
      selectedStatus: '',
      Client: '',
      ProjectDescription: '',
      fileUrl: '',
      dataSaved: false,
      Projectfile: null,
      fileName: '',
      ProjectfileURL: null,
      isPopupVisible: false,
      ProjectData: [],
      TLfullName: '',
      TLUserID: '',
      projectID: this.$route.query.ProjectID
    }
  },

  async mounted() {
    this.projectID = this.$route.query.ProjectID
    const fromProjectID = this.projectID
    console.log('fromProjectID:', fromProjectID)

    try {
      const getProjectData = await getProjectDetails(this.projectID)
      console.log('ProjectData', getProjectData)

      // Assuming useProjectStore() returns your Pinia store
      const projectStore = useProjectStore()
      projectStore.setProjectData(getProjectData)
      projectStore.setProjectID(this.$route.query.ProjectID)

      this.ProjectData.push(getProjectData)
    } catch (error) {
      console.error('Error fetching project data:', error)
    }
  }

  // async mounted() {
  // this.projectID = this.$route.query.ProjectID
  // const fromProjectID=this.projectID;
  // console.log('fromProjectID :', fromProjectID)

  // const getProjectData = await getProjectDetails(this.projectID);
  // console.log('PprojectData', getProjectData);

  // useProjectStore().setProjectData(getProjectData);
  // useProjectStore().setProjectID(this.$route.query.ProjectID);
  // this.ProjectData.push(getProjectData);

  // },
}
</script>

<style scoped>

.header {
  background-color: #dbe2e9;
  font-weight: bold;
}
.bold {
  font-weight: bold;
}
</style>

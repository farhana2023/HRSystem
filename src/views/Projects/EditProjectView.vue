<template>

<HrProjectViewCard :ProjectData="ProjectData"></HrProjectViewCard>



</template>
  
  <script>
  import HrProjectViewCard from '@/components/Projects/HrProjectViewCard.vue'

  import { getProjectDetails } from '@/services/ProjectData'
  


  
  export default {
    name: 'EditProjectView',
    components:{
      HrProjectViewCard
      
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
        isPopupVisible:false,
        ProjectData:[],
        TLfullName:'',
        TLUserID:'',
        projectID:''
      }
    },
    async mounted() {
    this.projectID = this.$route.query.ProjectID
    console.log('projectID :', this.projectID)

    const getProjectData = await getProjectDetails(this.projectID)
    console.log('PprojectData', getProjectData)
    this.ProjectData.push(getProjectData);
    },
  }
  </script>
  
  <style scoped></style>
  
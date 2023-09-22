<template>
<section v-for="project in ProjectData" :key="project.id">
  <div class="container py-2">
    <div class="row" >
      <div class="col"  >
        <nav aria-label="breadcrumb" class="rounded-3 p-2 mb-4 bold"   style="background-color: #6082B6 ">
            <h5 style="color:#fff">Project Summary</h5>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-5 rounded-3" >
     
        <div class="card mb- 4 ">
          <div class="card-body m-4  rounded-3" >
            <div class="row">
              <div class="col-sm-4 bold" >
             
                <h8>Project Titile</h8>
              </div>
              <div class="col-sm-8 ">
                <p class="text-muted mb-0">{{ project ? project.projectTitle : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-4 bold bold" >
             
                <h8>Client</h8>
              </div>
              <div class="col-sm-8 ">
                <p class="text-muted mb-0">{{ project ? project.Client : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-4 bold bold" >
             
                <h8 >Description</h8>
              </div>
              <div class="col-sm-8 ">
                <p class="text-muted mb-0">{{ project ? project.ProjectDescription : 'Loading...' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="card mb-4  ">
          <div class="card-body m-3">
            <div class="row">
              <div class="col-sm-4 bold">
                <p class="mb-0 bold">Project Team Leader</p>
              </div>
              <div class="col-sm-8">
                <p class="text-muted mb-0">{{ project ? project.TLfullName : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
      
          
  
            <div class="row">
              <div class="col-sm-4 bold">
                <p class="mb-0">Expected Start Date</p>
              </div>
              <div class="col-sm-8">
                <p class="text-muted mb-0">{{ project ? project.ExStartDate : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-4 bold">
                <p class="mb-0 " >Expected End Date</p>
              </div>
              <div class="col-sm-8">
                <p class="text-muted mb-0">{{ project ? project.ExEndDate : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-4">
                <p class="mb-0 bold">Status</p>
              </div>
              <div class="col-sm-8">
                <p class="text-muted mb-0">{{ project ? project.Status : 'Loading...' }}</p>
              </div>
            </div>
            <hr>
      
         
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

        <div class="row">
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">Assiged</span> Employees
                </p>
                <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
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
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
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
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'HrProjectViewCard',
  props: ['ProjectData'],
  data (){
    return{
        getProjectData:[],
    } 
  },


  created() {
    console.log('From Child ProjectData', this.ProjectData);

  }
}
</script>

<style  scoped>

.header {

 background-color :#DBE2E9 ;
 font-weight:bold;



}
.bold {
    font-weight:bold
}


</style>
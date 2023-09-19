<template>


    <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">New Project</div>
          <div class="card-body pt-3">
    <form>
        <div class="row mb-3" >
                  <label for="ProjectTiltle" class="col-md-4 col-lg-3 col-form-label">Project Title</label>
                  <div class="col-md-8 col-lg-9">
                    <input
              
                      name="ProjectTiltle"
                      type="text"
                      class="form-control"
                      id="ProjectTiltle"
                      v-model="ProjectTiltle"
                    />
                  </div>
                </div>



        <div class="row mb-3">
        <label for="Client" class="col-md-4 col-lg-3 col-form-label">Client or Customer</label>
        <div class="col-md-8 col-lg-9">
          <input
            name="Client"
            type="text"
            class="form-control"
            id="Client"
            v-model="Client"
          />
        </div>
      </div>
    
      <div class="row mb-3">
        <label for="ProjectDescription" class="col-md-4 col-lg-3 col-form-label">Description</label>
        <div class="col-md-8 col-lg-9">
          <textarea
            name="ProjectDescription"
            class="form-control"
            id="ProjectDescription"
            style="height: 100px"
            v-model="ProjectDescription"

          ></textarea>
        </div>
      </div>
                <div class="row mb-3">
        <label for="ExStartDate" class="col-md-4 col-lg-3 col-form-label">Expected Start Date</label>
        <div class="col-md-8 col-lg-9">
          <input type="date" class="form-control" v-model="ExStartDate" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Expected End Date</label>
        <div class="col-md-8 col-lg-9">
          <input type="date" class="form-control" v-model="ExEndDate" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="company" class="col-md-4 col-lg-3 col-form-label">Status</label>
        <div class="col-md-8 col-lg-9">
          <select v-model="selectedStatus" class="form-select" aria-label="Default select example">
            <option selected>Select Status</option>
            <option v-for="(label, value) in StatusOptions" :value="value" :key="value">
              {{ label }}
            </option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <label for="company" class="col-md-4 col-lg-3 col-form-label">Priority</label>
        <div class="col-md-8 col-lg-9">
          <select v-model="selectedPriority" class="form-select" aria-label="Default select example">
            <option selected>Select Priority</option>
            <option v-for="(label, value) in PriorityOptions" :value="value" :key="value">
              {{ label }}
            </option>
          </select>
        </div>
      </div>
    

 <div class="row mb-3">
        <label for="Attachfile" class="col-md-4 col-lg-3 col-form-label">Attach file</label>
        <div class="col-md-8 col-lg-9">
       


        <input type="file" class="form-control" id="customFile" @change="handleFileChange" />


        </div>
      </div> 


    

      <div class="text-center">
        <button @click.prevent="AddProject()" type="submit" class="btn btn-secondary">
         Add Project
        </button>
      </div>

  
      <div class="card-footer">
            <div v-if="dataSaved" class="alert alert-success mt-3">
              <Strong>Project added successfully!</Strong>
            </div>
          </div>


    </form></div></div>
  </div></div>
  </section>
</template>

<script>
import { addNewProject,uploadProjectFile } from '@/services/ProjectData'



    export default {
        name:'AddProjectView',
        data(){

          return{
            ProjectTiltle:'',
            ExStartDate:'',
            ExEndDate:'',
            selectedPriority:'',
            selectedStatus:'',
            Client:'',
            ProjectDescription:'',
            fileUrl:'',
            dataSaved: false,
            Projectfile: null, 
            fileName: '' ,
            ProjectfileURL: null,
    
          }
        },
        computed: 
        {
          PriorityOptions() {
            return {
              1: 'High',
              2: 'Medeium',
              3:'Low'
            }
              },

              StatusOptions() {
            return {
              1: 'New',
              2: 'Ongoing',
              3:'End'
            }
              },
        },
        methods:{

          async   handleFileChange(event) {
            debugger;
            const selectedFile = event.target.files[0]; 
            if (selectedFile) {
              const fileUrl = await this.uploadfiles(selectedFile);

              this.Projectfile = selectedFile;
              this.fileUrl = fileUrl;
            }
             

              // await   this.uploadfiles(this.fileUrl);
              //   } else {
              //     this.Projectfile = null;
              //     this.fileName = '';     
              //   }
              },

                async uploadfiles(file) {
                  console.log('file', file);
                  

                  const fileUrl = await uploadProjectFile(file);
                  console.log('ProjectfileURL: ', fileUrl);
                  return fileUrl;
                },



          async AddProject() {



          const ProjectData = {
            projectTitle: this.ProjectTiltle, 
            Client: this.Client,
            ExStartDate: this.ExStartDate,
            ExEndDate: this.ExEndDate,
            ProjectDescription: this.ProjectDescription,
            ProjectFile: this.ProjectfileURL ,
            Status: this.StatusOptions[this.selectedStatus],
            Priority: this.PriorityOptions[this.selectedPriority],
          };

          console.log('ProjectData', ProjectData);

            try {
                await addNewProject(ProjectData);

                this.dataSaved = true
                setTimeout(() => {
                  this.dataSaved = false
               //   this.$router.push({name: 'emp_ListForSendMessageView'});
                }, 3000) // Display success message for 3 seconds

              


              } catch (error) {
                console.error('Error updating project data:', error);
                this.message = '';
              // dataError=true;
                this.errorMessage = 'Error updating Project data. Please try again.';
              }


}

        },
      
      }


        
    
</script>

<style  scoped>

</style>
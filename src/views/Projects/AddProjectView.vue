<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">New Project</div>
          <div class="card-body pt-3">
            <form>
              <div class="row mb-3">
                <label for="ProjectTiltle" class="col-md-4 col-lg-3 col-form-label"
                  >Project Title</label
                >
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
                <label for="Client" class="col-md-4 col-lg-3 col-form-label"
                  >Client or Customer</label
                >
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
                <label for="ProjectDescription" class="col-md-4 col-lg-3 col-form-label"
                  >Description</label
                >
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
                <label for="ExStartDate" class="col-md-4 col-lg-3 col-form-label"
                  >Expected Start Date</label
                >
                <div class="col-md-8 col-lg-9">
                  <input type="date" class="form-control" v-model="ExStartDate" />
                </div>
              </div>
              <div class="row mb-3">
                <label for="Email" class="col-md-4 col-lg-3 col-form-label"
                  >Expected End Date</label
                >
                <div class="col-md-8 col-lg-9">
                  <input type="date" class="form-control" v-model="ExEndDate" />
                </div>
              </div>

              <div class="row mb-3">
                <label for="company" class="col-md-4 col-lg-3 col-form-label">Status</label>
                <div class="col-md-8 col-lg-9">
                  <select
                    v-model="selectedStatus"
                    class="form-select"
                    aria-label="Default select example"
                  >
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
                  <select
                    v-model="selectedPriority"
                    class="form-select"
                    aria-label="Default select example"
                  >
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
                  <input
                    type="file"
                    class="form-control"
                    id="customFile"
                    @change="handleFileChange"
                  />
                </div>
              </div>

              <div class="row mb-3" style="display: none">
                <label for="TLUserID" class="col-md-4 col-lg-3 col-form-label">Assign TL</label>
                <div class="col-md-8 col-lg-9">
                  <input
                    name="TLUserID"
                    type="text"
                    class="form-control"
                    id="TLUserID"
                    v-model="TLUserID"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="TLfullName" class="col-md-4 col-lg-3 col-form-label">Assign TL</label>
                <div class="col-md-8 col-lg-9">
                  <span style="display: flex; align-items: center"
                    ><input
                      readonly
                      name="TLfullName"
                      type="text"
                      class="form-control"
                      id="TLfullName"
                      v-model="TLfullName"
                      style="width: 90%"
                    />

                    <button
                      style="margin-left: 10px"
                      @click.prevent="AddTLEmp()"
                      data-bs-toggle="modal"
                      data-bs-target="#ExtralargeModal"
                      type="button"
                      class="btn btn-primary btn-sm"
                    >
                      <i class="bi bi-person-plus"></i>
                    </button>
                  </span>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div
    v-if="isPopupVisible"
    class="modal fade"
    id="ExtralargeModal"
    tabindex="-1"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Team leader</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="datatable-top">
            <div class="datatable-search">
              <input
                v-model="search"
                class="datatable-input"
                placeholder="Search..."
                type="search"
                title="Search within table"
              />
            </div>
          </div>
          <div class="datatable-container">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <th scope="col">Name</th>
                  <th scope="col">Degisnation</th>
                  <th scope="col">Deparment</th>
                  <!-- <th scope="col">Add</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(employee, index) in LstTeamLeader" :key="index">
                  <td>{{ employee.fullName }}</td>
                  <td>{{ employee.designation }}</td>
                  <td>{{ employee.department }}</td>

                  <td class="text-center" style="width: 40px">
                    <button
                      @click.prevent="sendTLData(employee)"
                      type="button"
                      class="btn btn-primary btn-sm"
                    >
                      <i class="bi bi-person-plus"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addNewProject, uploadProjectFile } from '@/services/ProjectData'

import { getAllTeamLeader } from '@/services/empData'

export default {
  name: 'AddProjectView',
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
      LstTeamLeader:[],
      TLfullName:'',
      TLUserID:''
    }
  },
  computed: {
    PriorityOptions() {
      return {
        1: 'High',
        2: 'Medeium',
        3: 'Low'
      }
    },

    StatusOptions() {
      return {
        1: 'New',
        2: 'Ongoing',
        3: 'End'
      }
    }
  },
  methods: {
    ///For TL ///////

    async AddTLEmp() {
      this.isPopupVisible = true
      console.log('isPopupVisible', this.isPopupVisible)

      const lstTL = await getAllTeamLeader()
      console.log('LstTeamLeader', lstTL)
      this.LstTeamLeader = lstTL
      return this.LstTeamLeader
    },

    sendTLData(employee) {
      console.log('employee.fullName:',employee.fullName);
      console.log('employee.id:',employee.id);
      ;(this.TLfullName = employee.fullName), (this.TLUserID = employee.id)
    },
      // For upload Doc file///

    async handleFileChange(event) {
      //debugger;
      const selectedFile = event.target.files[0]
      if (selectedFile) {
        const fileUrl = await this.uploadfiles(selectedFile)

        this.Projectfile = selectedFile
        this.fileUrl = fileUrl
      }

 
    },

    async uploadfiles(file) {
      console.log('file', file)

      const fileUrl = await uploadProjectFile(file)
      console.log('ProjectfileURL: ', fileUrl)
      return fileUrl
    },
    //For Add new project////////
    async AddProject() {
      const ProjectData = {
        projectTitle: this.ProjectTiltle,
        Client: this.Client,
        ExStartDate: this.ExStartDate,
        ExEndDate: this.ExEndDate,
        ProjectDescription: this.ProjectDescription,
        ProjectFile: this.fileUrl,
        Status: this.StatusOptions[this.selectedStatus],
        Priority: this.PriorityOptions[this.selectedPriority],
        TLfullName : this.TLfullName,
        TLUserID : this.TLUserID,
      }

      console.log('ProjectData', ProjectData)

      try {
        await addNewProject(ProjectData)

        this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false
         this.$router.push({name: 'list-Project'});
        }, 3000) // Display success message for 3 seconds
      } catch (error) {
        console.error('Error updating project data:', error)
        this.message = ''
        // dataError=true;
        this.errorMessage = 'Error updating Project data. Please try again.'
      }
    }
  }
}
</script>

<style scoped></style>

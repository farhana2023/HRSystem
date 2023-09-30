<template>


    <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header Color">Create Tasks</div>
          <div class="card-body pt-3">
    <form>

        <!--  -->
        <div class="row mb-3" style="display: none"> 
        <label for="ProjectID" class="col-md-4 col-lg-3 col-form-label">ProjectID</label>
        <div class="col-md-8 col-lg-9">
          <input
          readonly
            name="ProjectID"
            type="text"
            class="form-control"
            id="ProjectID"
            v-model="projectID"
          />
        </div>
      </div>
        <div class="row mb-3" >
                  <label for="sendtoEmail" class="col-md-4 col-lg-3 col-form-label">Project Titile</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      readonly
                      name="sendtoEmail"
                      type="email"
                      class="form-control"
                      id="sendtoEmail"
                      v-model="projectTitle"
                    />
                  </div>
                </div>

      <div class="row mb-3">
        <label for="sendtofullName" class="col-md-4 col-lg-3 col-form-label">Client </label>
        <div class="col-md-8 col-lg-9">
          <input
          readonly
            name="sendtofullName"
            type="text"
            id="sendtofullName"
            class="form-control readonly-input"
            v-model="Client"
          />
        </div>
      </div>
    
      <div class="row mb-3">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Project Summary</label>
        <div class="col-md-8 col-lg-9">
          <input
          readonly
            name="fullName"
            type="text"
            class="form-control"
            id="fullName"
            v-model="ProjectDescription"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Task Name</label>
        <div class="col-md-8 col-lg-9">
          <input
            name="fullName"
            type="text"
            class="form-control"
            id="fullName"
            v-model="TaskName"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Tasks Assign Date</label>
        <div class="col-md-8 col-lg-9">
          <input type="date" class="form-control" v-model="TaskAssignDate" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Task Delivery Date</label>
        <div class="col-md-8 col-lg-9">
          <input type="date" class="form-control" v-model="TaskDeliveryDate" />
        </div>
      </div>
    
      <div class="row mb-3">
        <label for="about" class="col-md-4 col-lg-3 col-form-label">Task Description</label>
        <div class="col-md-8 col-lg-9">
          <textarea
            name="about"
            class="form-control"
            id="about"
            style="height: 100px"
            v-model="TaskDescription"

          ></textarea>
        </div>
      </div>
    
      <div class="row mb-3" style="display: none">
        <label for="TMId" class="col-md-4 col-lg-3 col-form-label">TMID</label>
        <div class="col-md-8 col-lg-9">
          <input
            name="TMId"
            type="text"
            class="form-control"
            id="TMId"
            v-model="TMId"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="TMFullName" class="col-md-4 col-lg-3 col-form-label">Assign Member</label>
        <div class="col-md-8 col-lg-9">
          <span style="display: flex; align-items: center"
            ><input   
              name="TMFullName"
              type="text"
              class="form-control readonly-input"
              id="TMFullName"
              v-model="TMFullName"
              style="width: 90%" />

          
                        <button

            style="margin-left: 10px;"
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
  

  
      <div class="card-footer">

        <div class="text-center">
        <button @click.prevent="CreateTask()" type="submit" class="btn btn-primary">
   Create Task
        </button>
      </div>
            <div v-if="dataSaved" class="alert alert-success mt-3 pt-2">
              <Strong>Task created successfully!</Strong>
            </div>
          </div>


    </form></div></div>
  </div></div>
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
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                <th scope="col">Designation</th> <!-- Corrected the typo "Degisnation" to "Designation" -->
                <th scope="col">Department</th>
                <!-- <th scope="col">Add</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(employee, index) in lstTeamMembers" :key="index">
                <td>{{ employee.fullName }}</td>
                <td>{{ employee.designation }}</td>
                <td>{{ employee.department }}</td>
                <td class="text-center" style="width: 40px">
                  <button
                    @click.prevent="sendTMData(employee)"
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
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
     
      </div>
    </div>
  </div>
</div>

</template>



<script>
import { useUserStore } from '@/stores/user';

import { getAllMyTeamMembers } from '@/services/empData'
import { addNewProjectTasks } from '@/services/ProjectTasksData'

export default {
  name: 'EmpSendMessageView',

  data() {
    return {
      isPopupVisible:false,
      sendFrom:[],
      projectID: this.$route.query.id,
   
      projectTitle:this.$route.query.projectTitle, 
      Client: this.$route.query.Client, 
      ProjectDescription: this.$route.query.Description, 
      TMId:'',
      TMFullName:'',  
      Date: '',
      isMsgRead: false,
      dataSaved: false,
      dataError: false,
      message:'',
      lstTeamMembers:[],
      TaskAssignDate:'',
      TaskDeliveryDate:''
    };
  },

  created (){

//this.getAllMyMemberList()
// console.log('From Child',this.lstEmployees);
},
  setup() {
  const empUserFromStore = useUserStore();
  console.log('empUserFromStore', empUserFromStore);

  return {empUserFromStore};
},
methods: {


    async AddTLEmp() {
      this.isPopupVisible = true
      console.log('isPopupVisible', this.isPopupVisible)
        try{
            const lstTM = await getAllMyTeamMembers(this.empUserFromStore.userId)
      console.log('lstTeamMembers', lstTM)
      this.lstTeamMembers = lstTM
      return this.lstTeamMembers
        } catch (error) {
          console.error('Error fetching employee data:', error);
        }
 
    },

    sendTMData(employee) {
        console.log('TM',employee);
        console.log('TMName',employee.fullName);
      (this.TMFullName = employee.fullName), (this.TMId = employee.id)
    },


  async CreateTask() {
    const empProjectTaskData = {
      projectID: this.$route.query.id,
      projectTitle:this.$route.query.projectTitle, 
      Client: this.$route.query.Client, 
      ProjectDescription: this.$route.query.Description, 
      TMFullName: this.TMFullName,
      TMId: this.TMId,

      TaskName: this.TaskName, 
      TaskDescription: this.TaskDescription,
      TaskAssignDate:this.TaskAssignDate,
      TaskDeliveryDate:this.TaskDeliveryDate,
      TaskStatus:0

    

    };
    console.log('TaskList', empProjectTaskData);

    try {
        await addNewProjectTasks(empProjectTaskData);

         this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false
          this.$router.push({name: 'Lst-ProjectByTL'});
        }, 3000) // Display success message for 3 seconds

        // console.log('Document was created with ID', docRef.id)
      // 


      } catch (error) {
        console.error('Error updating Project data:', error);
        this.message = '';
       // dataError=true;
        this.errorMessage = 'Error updating Project data. Please try again.';
      }

  }
},


    
};
</script>


<style  scoped>
.Color {
  background-color:  #6082B6;
  color: white;
  font-weight: bold;
}
</style>
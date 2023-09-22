<template>


    <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">Task Status</div>
          <div class="card-body pt-3">
    <form>


        <div class="row mb-3" >
                  <label for="sendtoEmail" class="col-md-4 col-lg-3 col-form-label">Task ID</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      readonly
                      name="sendtoEmail"
                      type="email"
                      class="form-control"
                      id="sendtoEmail"
                      v-model="TaskId"
                    />
                  </div>
                </div>
        <div class="row mb-3" >
                  <label for="sendtoEmail" class="col-md-4 col-lg-3 col-form-label">Task Tiltle</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      readonly
                      name="sendtoEmail"
                      type="email"
                      class="form-control"
                      id="sendtoEmail"
                      v-model="TaskName"
                    />
                  </div>
                </div>

                <div class="row mb-3">
        <label for="about" class="col-md-4 col-lg-3 col-form-label">Task Description</label>
        <div class="col-md-8 col-lg-9">
          <textarea
          readonly
            name="about"
            class="form-control"
            id="about"
            style="height: 100px"
            v-model="TaskDescription"

          ></textarea>
        </div>
      </div>
    

      <div class="row mb-3">
        <label for="sendtofullName" class="col-md-4 col-lg-3 col-form-label">Task Status</label>
        <div class="col-md-8 col-lg-9">
          <input

            name="sendtofullName"
            type="text"
            id="sendtofullName"
            class="form-control "
            v-model="TaskStatus"
          />
        </div>
      </div>
    
      <div class="row mb-3">
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Tasks update Date</label>
        <div class="col-md-8 col-lg-9">
          <input type="date" class="form-control" v-model="TaskUpdateDate" />
        </div>
      </div>
    
      <div class="row mb-3">
        <label for="about" class="col-md-4 col-lg-3 col-form-label">Task Update Summary</label>
        <div class="col-md-8 col-lg-9">
          <textarea
            name="about"
            class="form-control"
            id="about"
            style="height: 100px"
            v-model="TaskUpdateSummary"

          ></textarea>
        </div>
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


    </form></div></div>
  </div></div>
  </section>
</template>



<script>
import { useUserStore } from '@/stores/user';
import { setFireTaskData } from '@/services/ProjectTasksData'


export default {
  name: 'TaskStatusView',

  data() {
    return {

      TaskId: this.$route.query.id,
      TaskName: this.$route.query.TaskName,
      TaskDescription: this.$route.query.TaskDescription, 
      TaskStatus: '',
      TaskUpdateSummary: '',
      TaskUpdateDate: '',
      dataSaved: false,
     
    };
  },

  setup() {
  const empSendFromStore = useUserStore();
  console.log('empSendFromStore', empSendFromStore);
  console.log('empSendFromEmail', empSendFromStore.email);
  return {empSendFromStore};
},
methods: {
  async UpdateTask() {
    const TaskData = {
        id: this.$route.query.id,
      TaskName: this.$route.query.TaskName,
      TaskDescription: this.$route.query.TaskDescription, 

      TaskStatus: this.TaskStatus,
      TaskUpdateDate: this.TaskUpdateDate,

      TaskUpdateSummary: this.TaskUpdateSummary, 
   
    };
    console.log('TaskData', TaskData);

    try {
        await setFireTaskData(TaskData);

         this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false
          this.$router.push({name: 'emp-MyTasksListView'});
        }, 3000) // Display success message for 3 seconds



      } catch (error) {
        console.error('Error updating employee data:', error);
        this.message = '';
       // dataError=true;
        this.errorMessage = 'Error updating employee data. Please try again.';
      }

  }
},


    
};
</script>


<style  scoped>

</style>
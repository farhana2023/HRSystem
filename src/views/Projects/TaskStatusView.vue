<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">Task Status</div>
          <div class="card-body pt-3">
            <form>
              <div class="row mb-3" style="display: none;">
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
              <div class="row mb-3">
                <label for="TaskName" class="col-md-4 col-lg-3 col-form-label"
                  >Project Tiltle</label
                >
                <div class="col-md-8 col-lg-9">
                  <input
                    readonly
                    name="TaskName"
                    type="email"
                    class="form-control"
                    id="TaskName"
                    v-model="projectTitle"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="TaskName" class="col-md-4 col-lg-3 col-form-label"
                  >Task Tiltle</label
                >
                <div class="col-md-8 col-lg-9">
                  <input
                    readonly
                    name="TaskName"
                    type="email"
                    class="form-control"
                    id="TaskName"
                    v-model="TaskName"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="about" class="col-md-4 col-lg-3 col-form-label">Task Description</label>
                <div class="col-md-8 col-lg-9">
                  <textarea
                    readonly
                    name="TaskDescription"
                    class="form-control"
                    id="TaskDescription"
                    style="height: 100px"
                    v-model="TaskDescription"
                  ></textarea>
                </div>
              </div>

              <div class="row mb-3">
                <label for="sendtofullName" class="col-md-4 col-lg-3 col-form-label"
                  >Task Status</label
                >
                <div class="col-md-8 col-lg-9">
                  <input
                    name="sendtofullName"
                    type="number"
                    id="sendtofullName"
                    class="form-control"
                    v-model="TaskStatus"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="Email" class="col-md-4 col-lg-3 col-form-label"
                  >Tasks update Date</label
                >
                <div class="col-md-8 col-lg-9">
                  <input type="date" class="form-control" v-model="TaskUpdateDate" />
                </div>
              </div>

              <div class="row mb-3">
                <label for="about" class="col-md-4 col-lg-3 col-form-label"
                  >Task Update Summary</label
                >
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

          

              <div class="card-footer">

                <div class="text-center">
                <button @click.prevent="UpdateTask()" type="submit" class="btn btn-primary">
                  Update Status
                </button>
              </div>
                <div v-if="dataSaved" class="alert alert-success mt-3  pt-1">
                  <Strong>Task updated successfully!</Strong>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { setFireTaskData } from '@/services/ProjectTasksData'
import { useTaskStore } from '@/stores/ProjectTask'

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
      dataSaved: false
    }
  },

  setup() {
    const empStore = useUserStore()
    console.log('empStore1111', empStore)

    const taskStore = useTaskStore()
    const getTaskData = taskStore.taskData
    console.log('taskStore', taskStore.taskData)
    const taskData = computed(() => taskStore.getTaskData)
    // const TaskName = taskData.value[0]?.TaskName
    const TMFullName = taskData.value[0]?.TMFullName

    const TMId = taskData.value[0]?.TMId
    const projectID = taskData.value[0]?.projectID
    const TaskAssignDate = taskData.value[0]?.TaskAssignDate
    const TaskDeliveryDate = taskData.value[0]?.TaskDeliveryDate
    const projectTitle = taskData.value[0]?.projectTitle

    console.log('taskData', getTaskData)
    // console.log('TaskName', TaskName)

    return {
      empStore,
      taskData,
      // TaskName,
      TMFullName,
      TMId,
      projectID,
      TaskAssignDate,
      projectTitle,
      TaskDeliveryDate
     
    }
  },

  methods: {
    async UpdateTask() {
      const updateTaskData = {
        id: this.$route.query.id,
        TaskName: this.$route.query.TaskName,
        TaskDescription: this.$route.query.TaskDescription,
        TaskStatus: this.TaskStatus,
        TaskUpdateDate: this.TaskUpdateDate,
        TaskUpdateSummary: this.TaskUpdateSummary,
        projectTitle: this.projectTitle,
        projectID: this.projectID,
        TMFullName: this.TMFullName,
        TMId: this.TMId,
        TaskAssignDate: this.TaskAssignDate,
        TaskDeliveryDate: this.TaskDeliveryDate

  
      }
      console.log('updateTaskData', updateTaskData)

      try {
        await setFireTaskData(updateTaskData)

        this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false
          this.$router.push({ name: 'emp-MyTasksListView' })
        }, 3000) // Display success message for 3 seconds
      } catch (error) {
        console.error('Error updating employee data:', error)
        this.message = ''
        // dataError=true;
        this.errorMessage = 'Error updating employee data. Please try again.'
      }
    }
  }
}
</script>

<style scoped></style>

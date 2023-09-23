import { defineStore } from 'pinia';


export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    taskID: null,
    taskData: null,
  }),
  getters: {
    getTaskData() {
      return this.taskData;
    },
    getTaskID() { 
      return this.taskID;
    },
  },
  actions: {
    setTaskData(data) {
      this.taskData = data;
    },
    setTaskID(id) {
      this.taskID = id;
    },
  },
});
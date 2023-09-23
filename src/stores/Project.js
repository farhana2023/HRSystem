import { defineStore } from 'pinia';


export const useProjectStore = defineStore('Project', {
    state: () => ({
      projectData: null,
      projectID: null
    }),
  
    getters: {
      getProjectData() {
        return this.projectData;
      },
      getProjectID() {
        return this.projectID; 
      }
    },
  
  
    actions: {
      setProjectData(data) {
        this.projectData = data;
      },
  
      setProjectID(id){
        this.projectID = id;
      },
 
  
    }
  });
import { 
    loginUser, 
    logoutUser, 
    registerUser, 
    updateUserProfile,
  } from '../services/userAuth';
  
  import { addEmpData, updateEmpData, getEmpData, deleteEmpData } from '../services/empData';

  export const useEmpStore = defineStore('Emp', {
    state() {
      return {
          
         
      }
    },
    getters: {
      getHero() {
     
      }
    },
    actions: {
      async getEmpDetails(empId) {
      
       
        
      }
    },
  });

// empStore.js
import { defineStore } from 'pinia';

import { updateEmpAdditionalData  } from '../services/empData'; 

import {getAllEmpData,setEmpData,updateEmpData } from '../services/empData'; 
import { uploadEmpImage } from '../services/fireFileBucket';


async function upsertEmployee(emp) {

  const fireEmpData = await getAllEmpData(emp.id);

  if(!fireEmpData) {
    await setEmpData(emp);
  } else {
    await updateEmpData(emp)
  }
}

export const useEmpStore = defineStore('emp', {
  state: () => ({
    employeeData: null,
    empID: null, 
  }),

  getters: {
    getEmp() {
      return this.employeeData;
    },
    getEmpID() {
      return this.empID; // Getter for empID
    },
  },


  actions: {
    setEmployeeData(data) {
      this.employeeData = data;
    },

    setEmpID(id){
      this.empID = id;
    },

    async getEmpDetails(id) {

      const empData = await getAllEmpData(id);
      
      if(empData) {
        this.currentEmp= empData;
        return this.currentEmp;
      }     
    
    }, 

    async uploadProfileImage(file) {
        
      const imageFilePath = `${this.emp.id}_${file.name}`;
      const url = await uploadHeroImage(imageFilePath, file);

      if(!url || url.length == 0) {
        return null;
      }
      
      this.currentEmp.image.url = url;
      await upsertEmp(this.currentEmp);
      return url;
    },

    
    // async resetEmpImage() {
    //   const apiHero = await getApiHeroDetails(this.currentHero.id);
    //   this.currentHero.image.url = apiHero.image.url;

    //   await upsertHero(this.currentHero);
      
    //   return this.currentHero.image.url;
    // }

  },
});

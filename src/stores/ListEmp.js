
import { defineStore } from 'pinia'

export const useEmpStore=defineStore ('empstore',{
    state:()=>({

       emplist:[
            {
                EmpID:1, FullName:"Farhana Islam",Position:'Web developer' , Startdate:'01-09-2023',IsEmp:false
            },
            {
                EmpID:2, FullName:"Faiyaz Sabeeh",Position:'Programmer' , Startdate:'01-09-2023',IsEmp:false
            },  
            {
                EmpID:3, FullName:"Ahnaf Sabeeh",Position:'Programmer' , Startdate:'01-09-2023',IsEmp:false
            },
            {
                EmpID:4, FullName:"Arian Sabeeh",Position:'Programmer' , Startdate:'01-09-2023',IsEmp:false
            },
            
        ],

    })
}
)

import { defineStore } from 'pinia'

export const usePersonalStore=defineStore ('Personalstore',{
    state:()=>({

   

        EmpName: 'Farhana Islam',
        Company : 'ABC Finance Limited ',
        Job:'Web developer',
        Country:'Canada',
        Address:'Saskatoon',
        Phone: '999-999-999',
        Email:'farha.islam.1310@gmail.com'


    })
}
)
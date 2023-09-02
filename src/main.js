import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from 'vuex';
import { firebaseApp } from './firebase/db';

import { 
    VueFire, 
    VueFireAuth,
    VueFireFirestoreOptionsAPI, 
  } from 'vuefire'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireFirestoreOptionsAPI(),
      VueFireAuth(),
    ],
})


/// main.js (Vue 3)


import { useEmployeeStore } from './stores/Employee';

const employeeStore = useEmployeeStore();
employeeStore.loadEmployees(); 

app.use(employeeStore);

app.mount('#app')

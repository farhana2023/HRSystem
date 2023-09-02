import { defineStore } from 'pinia'

import { loginUser, registerUser, updateUserProfile } from '../services/userAuth';

const userModel = {
  firstName: 'Farhana',
  lastName: 'Islam',
  role: 'Admin', // User, Anonymous
  title: 'Web Developer',
  language: 'en-ca',
  timeZome: 'CST',
  isAuthenticated: true,
  email: 'farha.islam.1310@gmail.com',
  validUntil: ''
};

export const useUserStore = defineStore('user', {
  state() {
    return {
        user: null,
    }
  },
  getters: {
    isAuthenticated() {
      console.log(this.user);
        if(!this.user) {
          return false;
        }
        return this.user.id.length > 0;
        //return this.user.isAuthenticated && this.user.email;
    },
    fullName() {
      if(this.user) {
        return `${this.user.firstName} ${this.user.lastName}`;
      } else {
        return 'Anonymous';
      }
    },
    title() {
      if(this.user) {
        return `${this.user.title}`;
      } else {
        return '';
      }
    },
  },
  actions: {
    async login(email, password) {
        console.log('email', email);
        console.log('password', password);

        const user = await loginUser(email, password);


        if(user != null) {
          this.user = { 
            id: user.uid, 
            name: user.displayName, 
            email: user.email, 
            imageUrl: user.photoURL
          } ;
          return true;
        } else {
          this.user = null;
          return false;
        }

        // if(email && password) {
        //   if(email == 'carlos.osoria@gmail.com' && password == 'password') {
        //     this.user = userModel;
        //     localStorage.setItem('user', JSON.stringify(this.user));
        //     return true;
        //   } else {
        //     this.user = null;
        //     return false;
        //   }
        // } else {
        //   this.user = null;
        //   return false;
        // }
    },
    logoutUser() {
      this.user = null;
  },
  async register(user) {
    let registedUser = await registerUser(user.email, user.password);
    
    if(registedUser) {
      await updateUserProfile(user);
    }
  }
},
});
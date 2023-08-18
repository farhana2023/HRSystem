import { defineStore } from 'pinia'

const userModel = {
  firstName: 'Farhana',
  lastName: 'Islam',
  role: 'Admin', // User, Anonymous
  title: 'Web Developer',
  language: 'en-ca',
  timeZome: 'CST',
  isAuthenticated: true,
  email: 'farha.islam.1310@gmail.com',
};

export const useUserStore = defineStore('user', {
  state() {
    return {
        user: null,
    }
  },
  getters: {
    isAuthenticated() {
        if(!this.user) {
          return false;
        }

        return this.user.isAuthenticated && this.user.email;
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
    loginUser(email, password) {
        if(email && password) {
          if(email == 'farha.islam.1310@gmail.com' && password == 'password') {
            this.user = userModel;
            return true;
          } else {
            this.user = null;
            return false;
          }
        } else {
          this.user = null;
          return false;
        }
    },
    logoutUser() {
        this.user = null;
    },
  },
});
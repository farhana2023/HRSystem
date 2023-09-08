import { defineStore } from 'pinia'

import { 
  loginUser, 
  logoutUser, 
  registerUser, 
  updateUserProfile,
} from '../services/userAuth';


import { 
  getEmpUserData,
} from '../services/empData';


// const userModel = {
//   firstName: 'Farhana',
//   lastName: 'Islam',
//   role: 'Admin', // User, Anonymous
//   title: 'Web Developer',
//   language: 'en-ca',
//   timeZome: 'CST',
//   isAuthenticated: true,
//   email: 'farha.islam.1310@gmail.com',
//   validUntil: ''
// };

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
        return this.user && this.user.id && this.user.id.length > 0;

        // return this.user.id.length > 0;
        //return this.user.isAuthenticated && this.user.email;
    },

    fullName() {
      if(this.user) {
        return `${this.user.fullName}`;
      } else {
        return 'Anonymous';
      }
    },

    userId() {
      if(this.user) {
        return `${this.user.userId}`;
      } else {
        return '';
      }
    },
    gender() {
      if(this.user) {
        return `${this.user.gender}`;
      } else {
        return '';
      }
    },

    userRole() {
      if(this.user) {
        return `${this.user.userRole}`;
      } else {
        return '';
      }
    },
    designation() {
      if(this.user) {
        return `${this.user.designation}`;
      } else {
        return '';
      }
    },
    joiningDate() {
      if(this.user) {
        return `${this.user.joiningDate}`;
      } else {
        return '';
      }
    },

    about() {
      if(this.user) {
        return `${this.user.about}`;
      } else {
        return '';
      }
    },
    email() {
      if(this.user) {
        return `${this.user.email}`;
      } else {
        return '';
      }
    },
    phone() {
      if(this.user) {
        return `${this.user.phone}`;
      } else {
        return '';
      }
    },
    address() {
      if(this.user) {
        return `${this.user.address}`;
      } else {
        return '';
      }
    },

    department() {
      if(this.user) {
        return `${this.user.department}`;
      } else {
        return '';
      }
    },

    salary() {
      if(this.user) {
        return `${this.user.salary}`;
      } else {
        return '';
      }
    },

    
    country() {
      if(this.user) {
        return `${this.user.country}`;
      } else {
        return '';
      }
    },

    displayName() {
      if(this.user) {
        return `${this.user.displayName}`;
      } else {
        return '';
      }
    },
    dateOfBirth() {
      if(this.user) {
        return `${this.user.dateOfBirth}`;
      } else {
        return '';
      }
    }
  },
  actions: {
    async login(email, password) {
        console.log('email', email);
        console.log('password', password);

        const user = await loginUser(email, password);

        if(user != null) {
          const userData = await getEmpUserData(user.uid);
          console.log('empUser:',userData);

          this.user = { 
            id: user.uid, 
            email: user.email, 
            ...userData,
          };
          return true;
        } else {
          this.user = null;
          return false;
        }


        // if(user != null) {
        //   this.user = { 
        //     id: user.uid, 
        //     name: user.displayName, 
        //     email: user.email, 
        //     imageUrl: user.photoURL
        //   } ;
        //   return true;
        // } else {
        //   this.user = null;
        //   return false;
        // }

    },
   
  async register(user) {
    let registedUser = await registerUser(user.email, user.password);
    
    if(registedUser) {
      await updateUserProfile(user);
    }
  },

  async logoutUser() {
    await logoutUser();
    this.user = null;
  },
},
});
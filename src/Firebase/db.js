import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, updatePassword  } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';


// const firebaseConfig = {
//   apiKey: "AIzaSyCRpuprUQz0ZkvtPXW0OBN3eDIkzIdF1WU",
//   authDomain: "meetingmaster-3faa8.firebaseapp.com",
//   projectId: "meetingmaster-3faa8",
//   storageBucket: "meetingmaster-3faa8.appspot.com",
//   messagingSenderId: "50774711816",
//   appId: "1:50774711816:web:19f39f31f13edc75a33bbd"
// };



// const firebaseConfig = {
//   apiKey: "AIzaSyCTbX8Ma17B0ohS2LtdOP-BPJX5dJJN7TQ",
//   authDomain: "staffsphere-8ca69.firebaseapp.com",
//   projectId: "staffsphere-8ca69",
//   storageBucket: "staffsphere-8ca69.appspot.com",
//   messagingSenderId: "90658823182",
//   appId: "1:90658823182:web:6de89bcd56f49e6f44b05f"
// };


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtg3URgS-TE8aTLjKftOLwz3GBBVNS0zk",
  authDomain: "teammanagement-c483f.firebaseapp.com",
  projectId: "teammanagement-c483f",
  storageBucket: "teammanagement-c483f.appspot.com",
  messagingSenderId: "548410798018",
  appId: "1:548410798018:web:329be8adb7b06f94f1705b"
};

// Initialize Firebase

 export const firebaseApp  = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
 const auth = getAuth(firebaseApp);

 
 onAuthStateChanged(auth,user =>{
  if(user!==null){
    console.log('Logged in!');
  }else{
    console.log('No User!');
  }
  }

 );
 export default db;
 export { auth };




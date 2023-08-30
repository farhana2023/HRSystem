import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRpuprUQz0ZkvtPXW0OBN3eDIkzIdF1WU",
  authDomain: "meetingmaster-3faa8.firebaseapp.com",
  projectId: "meetingmaster-3faa8",
  storageBucket: "meetingmaster-3faa8.appspot.com",
  messagingSenderId: "50774711816",
  appId: "1:50774711816:web:19f39f31f13edc75a33bbd"
};

// Initialize Firebase

 const firebaseappApp  = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseappApp);
 const auth = getAuth(firebaseappApp);
 
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




import { collection, query, where, doc, getDoc, getDocs,  setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useFirestore, useCollection, useDocument } from 'vuefire';



export async function setFireTaskData(tasks) {
  const db = useFirestore();
  const taskRef = doc(db, 'EmpProjectTasks', tasks.id);
  return await setDoc(taskRef, tasks);
}





export async function addNewProjectTasks(ProjectTaskData)  {
    const db = useFirestore();
    await addDoc(collection(db, 'EmpProjectTasks'), ProjectTaskData);
  }

  export async function getMyTaskList(empId) {
    const db = useFirestore();
    const TaskCollection = collection(db, 'EmpProjectTasks');
    const q = query(
      TaskCollection,
      where('TMId', '==', empId),

    );
    const querySnapshot = await getDocs(q);
  
    const Tasklst = [];
    querySnapshot.forEach((doc) => {
      Tasklst.push({ id: doc.id, ...doc.data() });
   
    });
  
    return Tasklst;
  }

  
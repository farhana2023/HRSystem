import { collection, query, where, doc, getDoc, getDocs,  setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useFirestore, useCollection, useDocument } from 'vuefire';
export async function addNewProjectTasks(ProjectTaskData)  {
    const db = useFirestore();
    await addDoc(collection(db, 'EmpProjectTasks'), ProjectTaskData);
  }
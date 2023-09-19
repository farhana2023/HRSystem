import { useFirestore, useCollection, useDocument } from 'vuefire';

import { collection, query, where, doc, getDoc, getDocs,  setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

import { uploadFireProjectFiles } from '../services/fireFileBucket';


export async function addNewProject(ProjectData)  {
    const db = useFirestore();
    await addDoc(collection(db, 'EmpProjectsDetails'), ProjectData);
  }


  
export async function getAllLstProject() {
    const db = useFirestore();
    const msgCollection = collection(db, 'EmpProjectsDetails');
    const q = query(
      msgCollection,
     
    );
    const querySnapshot = await getDocs(q);
  
    const projects = [];
    querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
    });
  
    return projects;
  }
  
  export async function deleteProjectData(project)  {
    const db = useFirestore();
    const projectRef = doc(db,'EmpProjectsDetails', project.id);
    await deleteDoc(projectRef);
}

  export async function uploadProjectFile(file) {
        
   // const FilePath = `${file.name}`;
    const url = await uploadFireProjectFiles(file.name, file);

    if(!url || url.length == 0) {
      return null;
    }
    return url;
  }


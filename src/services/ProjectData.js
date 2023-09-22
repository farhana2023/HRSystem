import { useFirestore, useCollection, useDocument } from 'vuefire';

import { collection, query, where, doc, getDoc, getDocs,  setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

import { uploadFireProjectFiles } from '../services/fireFileBucket';




export async function getProjectDetails(id) {
  const db = useFirestore();
  const projectRef = doc(db,'EmpProjectsDetails', id);
  const projectSnap = await getDoc(projectRef);
  
  if(projectSnap.exists()) {
      return projectSnap.data();
  }

  return null;
}

export async function getAllMyProject(id) {
  const db = useFirestore();
  const projectCollection = collection(db, 'EmpProjectsDetails');
  const q = query(
    projectCollection,
    //where('userRole', '==', 'Employee'),

    where('TLUserID', '==', id)


  );
  const querySnapshot = await getDocs(q);

  const Projects = [];
  querySnapshot.forEach((doc) => {
    Projects.push({ id: doc.id, ...doc.data() });
  });

  return Projects;
}


export async function addNewProject(ProjectData)  {
    const db = useFirestore();
    await addDoc(collection(db, 'EmpProjectsDetails'), ProjectData);
  }

  export async function updateProjectData(ProjectData,id)  {
    const db = useFirestore();
    const ProjectRef = doc(db,'EmpProjectsDetails', id);

    await updateDoc(ProjectRef, {
      projectTitle: ProjectData.projectTitle,
      Client: ProjectData.Client,
      ExStartDate: ProjectData.ExStartDate,
      ExEndDate: ProjectData.ExEndDate,
      ProjectDescription: ProjectData.ProjectDescription,
      ProjectFile:ProjectData.ProjectFile,
      Status:ProjectData.Status,
      Priority:ProjectData.Priority,
      TLfullName:ProjectData.TLfullName,
      TLUserID:ProjectData.TLUserID   
       
    });
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



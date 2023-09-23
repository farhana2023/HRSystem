import { collection, query, where, doc, getDoc, getDocs,  setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useFirestore, useCollection, useDocument } from 'vuefire';
//

export async function getTaskDetails(pId) {
  const db = useFirestore();
  const TaskRef = doc(db,'EmpProjectTasks', pId);
  const TaskSnap = await getDoc(TaskRef);
  
  if(TaskSnap.exists()) {
      return TaskSnap.data();
  }

  return null;
}



export async function getAllTasksByProjectID(pID) {
  const db = useFirestore();
  const taskCollection = collection(db, 'EmpProjectTasks');
  const q = query(
    taskCollection,
    where('projectID', '==', pID),
  );
  const querySnapshot = await getDocs(q);

  const tasks = [];
  querySnapshot.forEach((doc) => {
    tasks.push({ id: doc.id, ...doc.data() });
  });

  return tasks;
}

export async function setFireTaskData(tasks) {
  const db = useFirestore();
  const taskRef = doc(db, 'EmpProjectTasks', tasks.id);
  return await setDoc(taskRef, tasks);
}


export async function updateTaskData(taskdata,id)  {
  const db = useFirestore();
  const TaskRef = doc(db,'EmpProjectTasks', id);

  await updateDoc(TaskRef, {
    projectID:taskData.projectID,
    projectTitle: taskdata.projectTitle,
    Client: taskdata.Client,
    ProjectDescription: taskdata.ProjectDescription,
    TMFullName: taskData.TMFullName,
    TMId: taskData.TMId,
    TaskAssignDate:taskData.TaskAssignDate,
    TaskDeliveryDate:taskData.TaskDeliveryDate,
    TaskDescription:taskData.TaskDescription,
    TaskName:taskData.TaskName,
    TaskStatus: taskData.TaskStatus,
    TaskUpdateDate: taskData.TaskUpdateDate,
    TaskUpdateSummary: taskData.TaskUpdateSummary, 
    
   
     
  });
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

  
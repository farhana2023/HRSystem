import { useFirestore, useCollection, useDocument } from 'vuefire';

import { collection, doc, getDoc, setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

import { uploadEmpImage } from '../services/fireFileBucket';



export async function uploadProfileImage(file,id) {
        
    const imageFilePath = `${ id }_${file.name}`;
    const url = await uploadEmpImage(imageFilePath, file);

    if(!url || url.length == 0) {
      return null;
    }
    // this.emp.image.url = url;

   // await upsertEmp(this.emp);

    return url;
  }


  export async  function resetEmpImage() {
    // const apiHero = await getApiHeroDetails(this.emp.id);
    // this.emp.image.url = apiHero.image.url;

    await upsertEmployee(this.emp);
    
    return this.emp.image.url;
  }

  async function upsertEmployee(emp) {

    const fireEmpData = await getIndEmpData(emp.id);
  
    if(!fireEmpData) {
      await setEmpData(emp);
    } else {
      await updateEmpData(emp)
    }
  }

  

export async function updateEmpPersonalData(emp,id)  {
    const db = useFirestore();
    const empRef = doc(db,'EmployeeProfile', id);
    await updateDoc(empRef, {
        fullName: emp.fullName,
        about: emp.about,
        displayName: emp.displayName,
        phone: emp.phone,
        address: emp.address,
        dateOfBirth: emp.dateOfBirth,
        country: emp.country,
        gender: emp.gender,
        imageUrl:emp.imageUrl
       
    });
}


// export async function updateEmpData(emp)  {
//     const db = useFirestore();
//     const empRef = doc(db,'EmployeeProfile', emp.id);
//     await updateDoc(empRef, emp);
// }

export async function updateEmpAdditionalData(emp,id)  {
    const db = useFirestore();
    const empRef = doc(db,'EmployeeProfile', id);
    await updateDoc(empRef, {
        joiningDate: emp.joiningDate,
        designation: emp.designation,
        department: emp.department,
        userRole: emp.userRole,
        salary: emp.salary
       
    });
}



export async function getEmpUserData(id) {
    const db = useFirestore();
    const empUserRef = doc(db, 'EmployeeProfile', id);
    const docSnap = await getDoc(empUserRef);
    const empUser = docSnap.data();
    return empUser
}





export function getEmpData(id) {
    const db = useFirestore();
    const empRef = doc(db,'EmployeeProfile', id);
    const emp = useDocument(empRef);
    return emp;
}


export function getAllEmp() {
    const db = useFirestore();
    const emps = useCollection(collection(db, 'EmployeeProfile'));
    return emps ;
}

export async function addEmpData(emp)  {
    const db = useFirestore();
    await addDoc(collection(db, 'EmployeeProfile'), emp);
}



export async function deleteEmpData(emp)  {
    const db = useFirestore();
    const empRef = doc(db,'EmployeeProfile', emp.id);
    await deleteDoc(empRef);
}


export async function setEmpData(emp) {
    const db = useFirestore();
    const empRef = doc(db, 'EmployeeProfile', emp.id);
    return await setDoc(empRef, emp);
}

export async function updateEmpData(emp)  {
    const db = useFirestore();
    const empRef = doc(db, 'EmployeeProfile', emp.id);
    await updateDoc(empRef, emp);
}


export async function getIndEmpData(id) {
    const db = useFirestore();
    const empRef = doc(db, 'EmployeeProfile', id);
    const empSnap = await getDoc(empRef);
    if (empSnap.exists()) {
        return empSnap.data();
    }

    return null;
}
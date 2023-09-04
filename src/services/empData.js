import { useFirestore, useCollection, useDocument } from 'vuefire';
import { collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';


export function getAllEmp() {
    const db = useFirestore();
    const emps = useCollection(collection(db, 'EmployeeProfile'));
    return emps ;
}


export function getEmpData(id) {
    const db = useFirestore();
    const empRef = doc(db,'EmployeeProfile', id);
    const emp = useDocument(heroRef);
    return emp;
}


export async function addEmpData(emp)  {
    const db = useFirestore();
    await addDoc(collection(db, 'EmployeeProfile'), emp);
}


export async function updateEmpData(emp)  {
    const db = useFirestore();
    const empRef = doc(db,'EmployeeProfile', emp.id);
    await updateDoc(empRef, emp);
}



export async function deleteEmpData(emp)  {
    const db = useFirestore();
    const empRef = doc(db,'EmployeeProfile', emp.id);
    await deleteDoc(empRef);
}
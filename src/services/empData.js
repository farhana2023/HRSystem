import { useFirestore, useCollection, useDocument } from 'vuefire';
import { collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';



// export async function updateEmpData(emp)  {
//     const db = useFirestore();
//     const empRef = doc(db,'EmployeeProfile', emp.id);
//     await updateDoc(empRef, emp);
// }




export async function updateEmpData(emp,id)  {
    const db = useFirestore();
    const empRef = doc(db,'EmployeeProfile', id);
    await updateDoc(empRef, {
        joiningDate: emp.joiningDate,
        designation: emp.designation,
        department: emp.department,
        userRole: emp.userRole
        // salary: emp.salary,
       
    });
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
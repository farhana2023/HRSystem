import { useFirestore, useCollection, useDocument } from 'vuefire';

import { collection, query, where, doc, getDoc, getDocs,  setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'



export async function getAllMsg(empId) {
    const db = useFirestore();
    const msgCollection = collection(db, 'EmpSendMsgDetail');
    const q = query(msgCollection, where('sendToUserID', '==', empId));
    const querySnapshot = await getDocs(q);
  
    const messages = [];

    querySnapshot.forEach((doc) => {
//debugger
       const messageDate = new Date();
       messageDate.setTime(doc.data().MsgDate.seconds * 1000);
       messages.push({ id: doc.id, ...doc.data(), MsgDate: messageDate });


      // messages.push(doc.data());
       //messages.push(doc.id());
    });
  
    return messages;
  }
  
  
  
  export async function getAllUnreadMsg(empId) {
    const db = useFirestore();
    const msgCollection = collection(db, 'EmpSendMsgDetail');
    const q = query(
      msgCollection,
      where('sendToUserID', '==', empId),
      where('isMsgRead', '==', false) 
    );
    const querySnapshot = await getDocs(q);
  
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
   
    });
  
    return messages;
  }
  
  
  export async function deleteMsgData(msg)  {
    const db = useFirestore();
    const msgRef = doc(db,'EmpSendMsgDetail', msg.id);
    await deleteDoc(msgRef);
  }
  
  export async function addSendtoEmp(msgDetails)  {
    const db = useFirestore();
    await addDoc(collection(db, 'EmpSendMsgDetail'), msgDetails);
  }
  
  export async function updateReadMsgData(msg,id)  {
    const db = useFirestore();
    const msgRef = doc(db,'EmpSendMsgDetail', id);
    await updateDoc(msgRef, {
      isMsgRead: true,
       
       
    });
  }
import { useFirebaseStorage, useStorageFile } from 'vuefire';
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";

export async function uploadImage(imageName, file) {
    const storage = useFirebaseStorage();
    const imageRef = ref(storage, `images/${imageName}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);

    return url;
}

export async function uploadEmpImage(imageName, file) {
    const storage = useFirebaseStorage();
    const imageRef = ref(storage, `/images/Employee/${imageName}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);

    return url;
}

export async function uploadUserImage(imageName, file) {
    const storage = useFirebaseStorage();
    const imageRef = ref(storage, `/images/users/${imageName}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);

    return url;
}
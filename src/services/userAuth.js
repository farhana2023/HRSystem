import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword,
    updateProfile
 
} from "firebase/auth";

export async function updateUserPassword(user,password) {
    const auth = getAuth();
    await updatePassword(auth.currentUser,password);

    return true;
}

export async function registerUser(email, password) {
    const auth = getAuth();
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if(cred.user) {
        return cred.user;
    } else {
        return null;
    }
}

export async function loginUser(email, password) {
    const auth = getAuth();
    const cred = await signInWithEmailAndPassword(auth, email, password);
    console.log('cred', cred);
    console.log('cred.user', cred.user);
    return cred.user;
}

export async function logoutUser() {
    const auth = getAuth();
    await signOut(auth);
}


export async function deleteUser(user) {
    const auth = getAuth();
    await deleteUser(user); // Use the renamed local function
}

export async function updateUserProfile(user) {
    const auth = getAuth();
    await updateProfile(auth.currentUser, {
            displayName: user.name, 
            photoURL: 'assets/default_image.jpg',
            phoneNumber: user.phone
    });

    return true;
}

export async function updateUserPassword(user,password) {
    const auth = getAuth();
    await updatePassword(auth.currentUser,password);

    return true;
}
// Fire Base
import { initializeApp } from 'firebase/app';
import {GoogleAuthProvider, getAuth, signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut, sendEmailVerification,deleteUser,  } from 'firebase/auth';
import {getFirestore, query, getDocs,collection,where,addDoc} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBSRsY3yKATKRns9QS3jny5eQiJO59Jtlc",
    authDomain: "outreach3d-user-reg-auth.firebaseapp.com",
    projectId: "outreach3d-user-reg-auth",
    storageBucket: "outreach3d-user-reg-auth.appspot.com",
    messagingSenderId: "364828268262",
    appId: "1:364828268262:web:c1ba478600df7645224d27",
    measurementId: "G-Z6V9GM27WF"
  };
// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Initalize Firestore Database
const db = getFirestore(app);

//Initalize the sign in with google 
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try{
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db,"users"),where ("uid", "==", user.uid));
        const docs = await getDocs(q);
        if(docs.docs.length === 0){
            await addDoc(collection(db,"users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            });
        }

    } catch (err){
        console.error(err);
        alert(err.message);
    }
};

// Initalize the login with email and password
const logInWithEmailAndPassword = async(email,password) => {
    try{
        await signInWithEmailAndPassword(auth,email,password)
    } catch(err){
        console.error(err);
        alert(err.message);
    }
};

// Initalize the register with email and Password
const registerWithEmailAndPassword = async(name, email, password, verifyStatus) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            verifyStatus: user.emailVerified
        });
        //await sendEmailVerification(auth.currentUser);
        //alert("A Verification email has been sent");
    } catch(err){
        console.error(err);
        alert(err.message);
    }
};

// Initialize sending password rest
const sendPasswordRest = async (email) => {
    try{
        await sendPasswordResetEmail(auth,email);
        alert("Password rest link sent! Check your email");
    } catch(err){
        console.error(err);
        alert(err.message);
    }
};

// logout
const logout = () => {
    signOut(auth);
};

// delete
const deleteAccount = () => {
    deleteUser(auth);
};

//verify email
const verifyEmail = async() => {
    try{
        await sendEmailVerification(auth.currentUser);
        alert("A Verification email has been sent");
    } catch(err){
        console.error(err);
        alert(err.message);
    }
};

export {auth, db, signInWithEmailAndPassword, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordRest, logout, deleteAccount,verifyEmail};

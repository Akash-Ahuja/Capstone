import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBSRsY3yKATKRns9QS3jny5eQiJO59Jtlc",
    authDomain: "outreach3d-user-reg-auth.firebaseapp.com",
    projectId: "outreach3d-user-reg-auth",
    storageBucket: "outreach3d-user-reg-auth.appspot.com",
    messagingSenderId: "364828268262",
    appId: "1:364828268262:web:c1ba478600df7645224d27",
    measurementId: "G-Z6V9GM27WF"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}

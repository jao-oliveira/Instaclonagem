import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyD9829BJ7eNTRkiEBQdPC4t6JmeD1t2NXU",
    authDomain: "instagram-clone-941d9.firebaseapp.com",
    projectId: "instagram-clone-941d9",
    storageBucket: "instagram-clone-941d9.appspot.com",
    messagingSenderId: "980047843941",
    appId: "1:980047843941:web:b0c855fefa4ac51694ec8c",
    measurementId: "G-CPDC78QZC1"
  };


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);



export default db;

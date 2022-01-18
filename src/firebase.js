import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyBlYhzyX1x-f_dLC3ZgiAT-ZleRYNG9dNk",
  authDomain: "whatsapp-down.firebaseapp.com",
  projectId: "whatsapp-down",
  storageBucket: "whatsapp-down.appspot.com",
  messagingSenderId: "949539270545",
  appId: "1:949539270545:web:8fff72666c57b155b3b430",
  measurementId: "G-0SV8B1V596"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZL3dSKD3TN_aTJFOj2uoGSMVTCu9wzkg",
  authDomain: "clone-c661b.firebaseapp.com",
  projectId: "clone-c661b",
  storageBucket: "clone-c661b.appspot.com",
  messagingSenderId: "757893690535",
  appId: "1:757893690535:web:1d5f1039fb976a2b531782"
};
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
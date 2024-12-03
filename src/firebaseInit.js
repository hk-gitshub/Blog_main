// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDT0DYWdvl7zeKlftVY9gTHvbG2V20cYDE",
//   authDomain: "blog-app-27e75.firebaseapp.com",
//   projectId: "blog-app-27e75",
//   storageBucket: "blog-app-27e75.appspot.com",
//   messagingSenderId: "109365548575",
//   appId: "1:109365548575:web:6852ff6bfc75f000b7272a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db=getFirestore(app);


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT0DYWdvl7zeKlftVY9gTHvbG2V20cYDE",
  authDomain: "blog-app-27e75.firebaseapp.com",
  projectId: "blog-app-27e75",
  storageBucket: "blog-app-27e75.firebasestorage.app",
  messagingSenderId: "109365548575",
  appId: "1:109365548575:web:6852ff6bfc75f000b7272a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

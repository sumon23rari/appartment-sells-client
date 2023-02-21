// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpwEfj4zoYmwDRD60m6zwK5YNaa7YWfgo",
  authDomain: "appertments.firebaseapp.com",
  projectId: "appertments",
  storageBucket: "appertments.appspot.com",
  messagingSenderId: "438329206664",
  appId: "1:438329206664:web:e9df6d3d468c71f4e17c3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default(auth);
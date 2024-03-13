// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOR4CoY1QAV8KIq38soFH7E1jZeSYX5eY",
  authDomain: "shosan-online-class.firebaseapp.com",
  projectId: "shosan-online-class",
  storageBucket: "shosan-online-class.appspot.com",
  messagingSenderId: "537141144686",
  appId: "1:537141144686:web:b4292d30a29ffd46cb8a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


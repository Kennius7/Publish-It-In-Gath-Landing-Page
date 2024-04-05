import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "shosan-online-class.firebaseapp.com",
  projectId: "shosan-online-class",
  storageBucket: "shosan-online-class.appspot.com",
  // eslint-disable-next-line no-undef
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // eslint-disable-next-line no-undef
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


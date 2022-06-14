import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-4U-L82-NnLOkFVF3QcYMz7MFFgJ4F1Y",
  authDomain: "spectrum-cc.firebaseapp.com",
  projectId: "spectrum-cc",
  storageBucket: "spectrum-cc.appspot.com",
  messagingSenderId: "955516459693",
  appId: "1:955516459693:web:716a853869f3273a210424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
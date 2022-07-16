import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABnY21271JyljO-x91AMuMhRJw3fyK_do",
  authDomain: "kuis-455c1.firebaseapp.com",
  projectId: "kuis-455c1",
  storageBucket: "kuis-455c1.appspot.com",
  messagingSenderId: "779639565585",
  appId: "1:779639565585:web:8481b8c9a3781f1468b0b0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
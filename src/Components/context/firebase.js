import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq6bOMgTBJ6FnlISYirpJuAkjOq_Ai2u8",
  authDomain: "noteapp-96a11.firebaseapp.com",
  projectId: "noteapp-96a11",
  storageBucket: "noteapp-96a11.appspot.com",
  messagingSenderId: "1056312511816",
  appId: "1:1056312511816:web:cb5d96021bde7310fdf77d",
  measurementId: "G-YYEM5RGRBN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



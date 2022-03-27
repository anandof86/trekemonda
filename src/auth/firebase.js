import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBe-E-VvS8Y_PZitYKHej7mK_o9WRa9moM",
    authDomain: "cns-cements.firebaseapp.com",
    projectId: "cns-cements",
    storageBucket: "cns-cements.appspot.com",
    messagingSenderId: "670815446504",
    appId: "1:670815446504:web:a3ded839b9503e1055705d"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
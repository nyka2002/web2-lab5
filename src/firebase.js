import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-2hRLkPxX_jJbRV1a2vrvXVOl16Mj5AE",
  authDomain: "web2-labos5.firebaseapp.com",
  projectId: "web2-labos5",
  storageBucket: "web2-labos5.firebasestorage.app",
  messagingSenderId: "491310222235",
  appId: "1:491310222235:web:ed83f837eee85cecefaf3e",
  measurementId: "G-42GG8HPKSN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCvmcKAfwKRDvMq0LZyfdAadgQhzCLoQhM",
    authDomain: "vuebingotwo.firebaseapp.com",
    projectId: "vuebingotwo",
    storageBucket: "vuebingotwo.firebasestorage.app",
    messagingSenderId: "122229455100",
    appId: "1:122229455100:web:3da256538119bca7177f79",
    measurementId: "G-0YW2J535VQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjIKbRGDTWFxYYwiCoLqS1sRsOadLztJQ",
  authDomain: "chatapp-cf9f2.firebaseapp.com",
  projectId: "chatapp-cf9f2",
  storageBucket: "chatapp-cf9f2.appspot.com",
  messagingSenderId: "495971525306",
  appId: "1:495971525306:web:7128247647e12d7df69883"
};

export const app = initializeApp(firebaseConfig);
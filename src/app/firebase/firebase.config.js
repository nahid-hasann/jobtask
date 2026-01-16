import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// তোমার Firebase Console থেকে কনফিগ কপি করে এখানে বসাবে
const firebaseConfig = {
    apiKey: "AIzaSyCs04fakyEYWyZzHFgzaXQ2jncvGBE6ORE",
    authDomain: "scicassignment-1fd51.firebaseapp.com",
    projectId: "scicassignment-1fd51",
    storageBucket: "scicassignment-1fd51.firebasestorage.app",
    messagingSenderId: "671986032565",
    appId: "1:671986032565:web:48f198f94de53eca90c3fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export default auth;
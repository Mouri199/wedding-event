// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqPWHwdBe4Ii0Wg6a4fzGVLMczcdDC84E",
  authDomain: "wedding-event-planner-38d0d.firebaseapp.com",
  projectId: "wedding-event-planner-38d0d",
  storageBucket: "wedding-event-planner-38d0d.appspot.com",
  messagingSenderId: "190836178979",
  appId: "1:190836178979:web:b688c4f97bb8e9ee513196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
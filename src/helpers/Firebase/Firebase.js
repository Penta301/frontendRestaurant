import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmXBvLYrp4hFex8_QK0Y77rNglnI0byxk",
  authDomain: "auth-eaeb2.firebaseapp.com",
  projectId: "auth-eaeb2",
  storageBucket: "auth-eaeb2.appspot.com",
  messagingSenderId: "468493306481",
  appId: "1:468493306481:web:fc7f6b8ce2f2faf7bda9d0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;

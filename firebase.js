import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7c8FDlr-_AQ0bBYAdJ0pfeAX9GUMlGaw",
  authDomain: "likelion-highr.firebaseapp.com",
  projectId: "likelion-highr",
  storageBucket: "likelion-highr.appspot.com",
  messagingSenderId: "289165313244",
  appId: "1:289165313244:web:b4492034f6ebde34f4e019",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };

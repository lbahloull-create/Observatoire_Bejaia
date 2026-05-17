import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7E6gWOkT7IotBOAysXF03ighs3fiYEWg",
  authDomain: "observatoire-bejaia.firebaseapp.com",
  projectId: "observatoire-bejaia",
  storageBucket: "observatoire-bejaia.firebasestorage.app",
  messagingSenderId: "386159606157",
  appId: "1:386159606157:web:e10c49d8d8862ab811a5c4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

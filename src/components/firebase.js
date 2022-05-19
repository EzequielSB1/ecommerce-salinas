
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDNomKzE2fdMHhNLmaKc6WV8gIeCxngyus",
  authDomain: "mercadooscuro-a4c8d.firebaseapp.com",
  projectId: "mercadooscuro-a4c8d",
  storageBucket: "mercadooscuro-a4c8d.appspot.com",
  messagingSenderId: "980864333836",
  appId: "1:980864333836:web:c408af681c2295c1a85629"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
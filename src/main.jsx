import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxPT_qswN3DfF-m0AoND7UzORX2tqEqRg",
  authDomain: "comision-49905-abroncano.firebaseapp.com",
  projectId: "comision-49905-abroncano",
  storageBucket: "comision-49905-abroncano.appspot.com",
  messagingSenderId: "817955764694",
  appId: "1:817955764694:web:6b1d60b4cb2f084a84cc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

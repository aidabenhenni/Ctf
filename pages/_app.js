import '@components/styles/globals.css'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAvHzm0ez8cY_rnMO7A2iUfZp6muK1SlS0",
  authDomain: "ctfweb-bc0dc.firebaseapp.com",
  projectId: "ctfweb-bc0dc",
  storageBucket: "ctfweb-bc0dc.appspot.com",
  messagingSenderId: "795789677832",
  appId: "1:795789677832:web:82404bc7114e11ae8808bd",
  measurementId: "G-RZ1V6SGLD7"
};


initializeApp(firebaseConfig);



export default function App({ Component, pageProps }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  })
  const auth = getAuth();
  onAuthStateChanged(auth, (user)=>{
    if (user != null && user.emailVerified)
      setAuthState({
        isAuthenticated: true,
        user
      });
    
  })
  return <AuthContext.Provider value={{authState, setAuthState}}>
    <Component {...pageProps} />
  </AuthContext.Provider>
}

import '@components/styles/globals.css'
import { initializeApp } from "firebase/app";

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
  return <Component {...pageProps} />
}

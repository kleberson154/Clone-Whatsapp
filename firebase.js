import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCXIX-9Pg5W7O4QRQyrxCOxeTu7aoDMa2g',
  authDomain: 'clone-whatsapp-53f19.firebaseapp.com',
  projectId: 'clone-whatsapp-53f19',
  storageBucket: 'clone-whatsapp-53f19.appspot.com',
  messagingSenderId: '275898406062',
  appId: '1:275898406062:web:cf534b5ca35535baf9893f'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { db, auth, provider }

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCXIX-9Pg5W7O4QRQyrxCOxeTu7aoDMa2g',
  authDomain: 'clone-whatsapp-53f19.firebaseapp.com',
  projectId: 'clone-whatsapp-53f19',
  storageBucket: 'clone-whatsapp-53f19.appspot.com',
  messagingSenderId: '275898406062',
  appId: '1:275898406062:web:cf534b5ca35535baf9893f'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }

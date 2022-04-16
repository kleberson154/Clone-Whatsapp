import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(Auth)

  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp

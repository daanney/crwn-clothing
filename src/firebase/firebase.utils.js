import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBwIFSaxfA71t6s6NdlALldQvo4aM0UDXk",
    authDomain: "crwn-db-40959.firebaseapp.com",
    databaseURL: "https://crwn-db-40959.firebaseio.com",
    projectId: "crwn-db-40959",
    storageBucket: "crwn-db-40959.appspot.com",
    messagingSenderId: "1021972467",
    appId: "1:1021972467:web:14196758d13111768e8c86"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapshot = await userRef.get()
	
	if(!snapshot.exists) {
		const { displayName, email, photoURL } = userAuth
		const createdAt = new Date()
		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				createdAt,
				shippingAddress: null,
				addresses: [],
				...additionalData
			})
		}catch(error) {
			console.log('error creating user', error.message)
		}
	}

	return userRef
}

export const updateUserProfileDocument = async (user) => {
	if(!user) return false

	const userRef = firestore.doc(`users/${user.id}`)
	const snapshot = await userRef.get()
	if(!snapshot.exists) return false

	try {
		await userRef.update(user)
	}catch(error) {
		console.log('error updating user', error.message)
	}

	return true
}

export const addCollectionWithDocs =async(collectionKey, items)=> {
	const collectionRef = firestore.collection(collectionKey)
	const batch = firestore.batch()
	items.forEach(item => batch.set(collectionRef.doc(), item))
	return await batch.commit()
}

export const mapCollectionSnapshot =(collections)=> {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data()
		return { routeName: encodeURI(title.toLowerCase()), id: doc.id, title, items }
	})

	return transformedCollection.reduce((mapObject, collection) => {
		mapObject[collection.title.toLowerCase()] = collection
		return mapObject
	}, {})
}

export const getCurrentUser =()=> {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe()
			resolve(userAuth)
		}, reject)
	})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)


export default firebase
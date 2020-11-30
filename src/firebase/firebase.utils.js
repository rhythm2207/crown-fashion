import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2PEtu_KVwpeQIof1uwBVEonvdKG8tzH0",
    authDomain: "rhym-fashion.firebaseapp.com",
    databaseURL: "https://rhym-fashion.firebaseio.com",
    projectId: "rhym-fashion",
    storageBucket: "rhym-fashion.appspot.com",
    messagingSenderId: "599143785959",
    appId: "1:599143785959:web:421de2ed29b0b410b28942",
    measurementId: "G-TZGY7J11VX"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating data', error.messsage);
        }
    }

    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
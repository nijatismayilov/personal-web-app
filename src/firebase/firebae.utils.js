import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB0xNVpbPn0ek9noy2Uy86qY6kZER72EtM",
    authDomain: "bio-website-65e2e.firebaseapp.com",
    databaseURL: "https://bio-website-65e2e.firebaseio.com",
    projectId: "bio-website-65e2e",
    storageBucket: "bio-website-65e2e.appspot.com",
    messagingSenderId: "567185009530",
    appId: "1:567185009530:web:f610483dc161bd0d5744c3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapShot = await userRef.get();

    if(!userSnapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(`Errored during setting user : ${error.message}`);
        }
    }

    return userRef;
}

export default firebase;
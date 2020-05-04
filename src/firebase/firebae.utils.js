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

  if (!userSnapShot.exists) {
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

export const convertAboutsSnaphot = (snapShot) => {
  const transformedAboutsCollection = snapShot.docs.map(doc => {
    const { title, date } = doc.data();
    const { id } = doc;

    return {
      id,
      title,
      date
    };
  });

  return transformedAboutsCollection;
}

export const convertInterviewsSnaphot = (snapShot) => {
  const transformedInterviewsCollection = snapShot.docs.map(doc => {
    const { title, date, website } = doc.data();
    const { id } = doc;

    const dateNew = date.split('-')[0];
    const websiteNew = website.split('/')[2];

    return {
      id,
      title,
      website: websiteNew,
      date: dateNew
    };
  });

  return transformedInterviewsCollection;
}

export const convertTelevisionSnapshot = (snapShot) => {
  const transformedTelevisionCollection = snapShot.docs.map(doc => {
    const { text, title, url, date } = doc.data();
    const { id } = doc;

    return {
      id,
      text,
      title,
      url,
      date
    };
  });

  return transformedTelevisionCollection;
}

export const createItemDocument = async (collection, item) => {
  const collectionRef = firestore.collection(collection);
  const newDocRef = collectionRef.doc();
  return await newDocRef.set(item);
}

export const deleteItemDocument = async (collection, id) => {
  const collectionRef = firestore.collection(collection);
  const docRef = collectionRef.doc(id);

  return await docRef.delete();
}

export default firebase;
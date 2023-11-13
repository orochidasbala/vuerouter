import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: "AIzaSyB0K7kfg9x7i2eA2K2Uhqjlp5UXw6xAYjA",
	authDomain: "vue-blogs-system.firebaseapp.com",
	projectId: "vue-blogs-system",
	storageBucket: "vue-blogs-system.appspot.com",
	messagingSenderId: "81999527543",
	appId: "1:81999527543:web:26425390af97a625535072"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

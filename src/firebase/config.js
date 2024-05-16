// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyA1AzxXzJCiRyTOn-jP735MV8910KZEov0",
	authDomain: "dragonsquad.firebaseapp.com",
	projectId: "dragonsquad",
	storageBucket: "dragonsquad.appspot.com",
	messagingSenderId: "113183135510",
	appId: "1:113183135510:web:29e2bf4d18e4f70699a237",
	measurementId: "G-G6NJ8K8D06"
};

let app = initializeApp(firebaseConfig);
let db = getFirestore(app);

export { db };

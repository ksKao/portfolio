import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCJt4tZyzAAhTgAg4v74_EWjo4Zc2bFZHQ",
	authDomain: "portfolio-f437b.firebaseapp.com",
	projectId: "portfolio-f437b",
	storageBucket: "portfolio-f437b.firebasestorage.app",
	messagingSenderId: "196763145327",
	appId: "1:196763145327:web:c1987d1be94bab4f09a99a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { Content } from "./type";

export async function getContentFromFirebase() {
	const docSnap = await getDoc(doc(db, "portfolio", "content"));
	if (!docSnap.exists()) throw new Error("Could not find document.");

	return docSnap.data() as Content;
}

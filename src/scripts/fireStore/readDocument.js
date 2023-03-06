import { getDoc, doc } from "firebase/firestore";
import { database } from "../firebaseSetup";

export async function readDocument(collectionName, documentId) {
  const reference = doc(database, collectionName, documentId);
  const snapshot = await getDoc(reference);
  const result = { id: snapshot.id, ...snapshot.data() };

  return result;
}

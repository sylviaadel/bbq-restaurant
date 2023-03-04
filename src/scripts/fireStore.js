import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function createDocument(collectionName, data) {
  const reference = collection(database, collectionName);
  const document = await addDoc(reference, data);
  const result = document.id;

  return result;
}

export async function readDocument(collectionName, documentId) {
  const reference = doc(database, collectionName, documentId);
  const snapshot = await getDoc(reference);
  const result = { id: snapshot.id, ...snapshot.data() };

  return result;
}

export async function readDocuments(collectionName) {
  const reference = collection(database, collectionName);
  const spanshot = await getDocs(reference);
  const result = spanshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return result;
}

export async function deleteDocument(collectionName, id) {
  const reference = doc(database, collectionName, id);
  await deleteDoc(reference);

  return `updated document with id ${id}`;
}

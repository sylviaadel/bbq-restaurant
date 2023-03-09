import { collection, addDoc } from "firebase/firestore";
import { database } from "../firebaseSetup";

export async function createProduct(collectionName, id, data) {
  const reference = collection(database, collectionName, id, "products");
  const document = await addDoc(reference, data);
  const result = document.id;

  return result;
}

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZHOgaa-QLbVr8FC15uaz7B-5yG9ZQq0A",
  authDomain: "grill-bar-restaurant.firebaseapp.com",
  projectId: "grill-bar-restaurant",
  storageBucket: "grill-bar-restaurant.appspot.com",
  messagingSenderId: "649795011961",
  appId: "1:649795011961:web:9a68594f1e3722b7d0dba8",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export async function readDocuments() {
  const querySnapshot = await getDocs(collection(database, "categories"));
  const result = [];

  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };
    result.push(document);
  });

  return result;
}

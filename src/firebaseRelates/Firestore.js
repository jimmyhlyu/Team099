import app from "./Firebase";
import {
  doc,
  collection,
  setDoc,
  getDoc,
    getDocs,
  getFirestore,
    query,
    where,
    orderBy,

} from "firebase/firestore";

import {AddConnection, GetConnectionScore} from "./Database"

import { useState } from "react";
export const db = getFirestore(app);
async function FirestoreTest() {


  const ref = doc(db, "TestCol", "MainTest");
  const snap = await getDoc(ref);

  if (snap.exists()) {
    console.log("Getting data from firestore. Result:", snap.get("result"));
  } else {
    console.log("Fail getting data from firestore");
  }
}



export default FirestoreTest;
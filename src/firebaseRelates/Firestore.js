import app from "./Firebase";
import {
  doc,
  collection,
  setDoc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

import { useState } from "react";

async function FirestoreTest() {
  const db = getFirestore(app);

  const ref = doc(db, "TestCol", "MainTest");
  const snap = await getDoc(ref);

  if (snap.exists()) {
    console.log("Getting data from firestore. Result:", snap.get("result"));
  } else {
    console.log("Fail getting data from firestore");
  }
}

export default FirestoreTest;
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


export async function getFriends() {
  const db = getFirestore(app);
  const friendshipsRef = collection(db, "connectionHistory");
  console.log(sessionStorage.getItem("user"));
  const q = query(friendshipsRef, where("connection.user_id","==",sessionStorage.getItem("user")),orderBy ("timestamp","desc"));
  const querySnapshot = await getDocs(q);
  let name = "";
  let Friend = [];
  let index = 0;
  querySnapshot.forEach((doc) => {
  if(doc.data().connection.name !== name){
    name = doc.data().connection.name;
    console.log(GetConnectionScore(sessionStorage.getItem("user"),doc.data().connection.id));
  }
  console.log(doc.id, " => ", doc.data());
  });
  console.log("finished")
}


export default FirestoreTest;
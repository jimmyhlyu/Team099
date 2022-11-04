import {
  firebase, getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "./Firebase";
import {AddUser} from "./Database";
import {Navigate} from "react-router-dom";
import {setDoc} from "firebase/firestore";


const auth = getAuth(app);


export async function createAccWithEmail(email, password) {

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      window.localStorage.setItem("user",user.uid);
      console.log("this is uid" + window.localStorage.getItem("user"));
      console.log("createAcc Email, Result: success");
      AddUser({id : user.uid, name : user.email });

      window.location.href = "/login"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(errorMessage);
    });
}

export function signInWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.sessionStorage.setItem("user",user.uid);
      window.alert("signIn email, Result: success");

      window.location.href = "/";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("signIn email, Result: fail, Error message: " + errorMessage);
    });
}

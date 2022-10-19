import {
  firebase, getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "./Firebase";
import {AddUser} from "./Database";

const auth = getAuth(app);
export function createAccWithEmail(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("createAcc Email, Result: success");
      AddUser({id : user.uid, name : user.email });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("createAcc Email,Result: fails, Error message: " + errorMessage);
    });
}

export function signInWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user = " + user.email);
      window.alert("signIn email, Result: success");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("signIn email, Result: fail, Error message: " + errorMessage);
    });
}

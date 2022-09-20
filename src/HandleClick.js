import * as Auth from "./firebaseRelates/Auth";
export function handleSignIn() {
  const userName = document.getElementsByName("username")[0].value;
  const userPassWord = document.getElementsByName("password")[0].value;
  Auth.signInWithEmail(userName, userPassWord);
}

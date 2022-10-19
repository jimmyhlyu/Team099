import * as Auth from "./firebaseRelates/Auth";
import {AddConnection} from "./firebaseRelates/Database";
export function handleSignIn() {
  const userName = document.getElementsByName("username")[0].value;
  const userPassWord = document.getElementsByName("password")[0].value;
  Auth.signInWithEmail(userName, userPassWord);
}

export function handleSignUp(e) {
  e.preventDefault();
  const userName = document.getElementsByName("username")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const userPassWord = document.getElementsByName("password")[0].value;
  const userPassWord2 = document.getElementsByName("confirm password")[0].value;
  if(userPassWord !== userPassWord2){
    return window.alert("Passwords not matched")
  }
  else{
    Auth.createAccWithEmail(email, userPassWord);
  }
}






export function test(){
  AddConnection("DeBvDVfhnJOu6L5MsmGcpdU2KWn2", { name : 'Check', age : 23, gender : 'FEMALE', sector : 'FRIENDSHIP'});
}
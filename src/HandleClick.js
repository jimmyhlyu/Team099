import * as Auth from "./firebaseRelates/Auth";
import {AddConnection, AddUser, GetConnectionScore, GetUserConnections} from "./firebaseRelates/Database";
import {getFriends} from "./firebaseRelates/Firestore";


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
    console.log(email);
    Auth.createAccWithEmail(email, userPassWord);
  }
}


export function handleAddFirend(e){
  e.preventDefault();
  const name = document.getElementsByName("addFriendsName")[0].value;
  const status = document.getElementsByName("addFriendsStatus")[0].value;
  const gender = document.getElementsByName("addFriendsGender")[0].value;
  const firstMet = document.getElementsByName("addFriendsDateFirstMet")[0].value;
  const hours = document.getElementsByName("addFriendsDateHours")[0].value;
  const id = sessionStorage.getItem("user");
  const sector = "FRIENDSHIP";
  const dict = {name : name, status : "LEAD",
                gender : "MALE", date_first_met : firstMet,
                hours_spent_together : hours,sector : 'FRIENDSHIP'};
  AddConnection(id, dict);
  window.alert("Add friend successfully");
}

 export function test(){
  GetUserConnections("IgVKqxXvJTZSa7wx0IjWKCx40uu1");
}


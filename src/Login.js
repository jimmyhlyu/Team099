import styles from "./Login.module.css";
import Logo from "./assets/logo3.png";
import Google from "./assets/google.png";
import * as HandleClick from "./HandleClick";
import { Link, Route, Router } from "react-router-dom";
import SignUp from "./SignUp";
import { handleSignUp } from "./HandleClick";
import { getFriends } from "./firebaseRelates/Firestore";
function Login() {
  return (
    <>
      <img src={Logo} className={styles.logo}></img>
      <div className={styles.darkBox}>
        <p className={styles.message}>Welcome to FSK!</p>
        <input
          type="text"
          className={styles.accountAndPassword}
          placeholder="Email"
          name="username"
        ></input>
        <input
          type="password"
          className={styles.accountAndPassword}
          placeholder="Password"
          name="password"
        ></input>
        <p className={styles.forget}>forget password?</p>
        <button className={styles.button} onClick={HandleClick.handleSignIn}>
          Login
        </button>
        <Link to="/signUp">
          <button className={styles.button}>Sign Up</button>
        </Link>
        <button className={styles.google} onClick={getFriends}>
          <img className={styles.googleImg} src={Google} alt=""></img>
        </button>
      </div>
    </>
  );
}

export default Login;


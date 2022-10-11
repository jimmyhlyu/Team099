import "./Login.css";
import Logo from "./logo2.png";
import Google from "./google.png";
import * as HandleClick from "./HandleClick";
function Login() {
  return (
    <>
      <img src={Logo} className="logo"></img>
      <div className="darkBox">
        <p className="message">Welcome to FSK!</p>
        <input type="text" name="username" placeholder="Username/Email"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <p class="forget">Forgot password?</p>
        <botton className="button" onClick={HandleClick.handleSignIn}>
          Login
        </botton>
        <botton className="button">Signup</botton>
        <botton class="google">
          <img className="googleImg" src={Google} alt=""></img>
        </botton>
      </div>
    </>
  );
}

export default Login;


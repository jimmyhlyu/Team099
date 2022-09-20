import "./Login.css";
import Logo from "./4.jpg";
import * as HandleClick from "./HandleClick";
function Login() {
  return (
    <>
      <img src={Logo} className="logo"></img>
      <div className="darkBox">
        <p className="message">Welcome to FSK!</p>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <bottonc className="button" onClick={HandleClick.handleSignIn}>
          Login
        </bottonc>
        <botton className="button">Signup</botton>
      </div>
    </>
  );
}

export default Login;

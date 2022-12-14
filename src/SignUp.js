import "./SignUp.css";
import Logo from "./assets/logo3.png";
import Google from "./assets/google.png";
import * as HandleClick from "./HandleClick";
import {handleSignUp} from "./HandleClick";

function SignUp() {
    return (
        <div>
            <img src={Logo} className="logo" />
            <div className="darkBox">
                <div className="signupFrm">
                    <div className="wrapper">
                        <form action className="form">
                            <h1 className="title">Sign up</h1>
                            <div className="inputContainer">
                                <input type="text" className="input" name = "email" />
                                <label className="label">Email</label>
                            </div>
                            <div className="inputContainer">
                                <input type="text" className="input" name = "username" />
                                <label className="label">Username</label>
                            </div>
                            <div className="inputContainer">
                                <input type="password" className="input" name = "password" />
                                <label className="label">Password</label>
                            </div>
                            <div className="inputContainer">
                                <input type="password" className="input" name = "confirm password" />
                                <label className="label">Confirm Password</label>
                            </div>
                            <input type="submit" className="submitBtn" value="Sign up" onClick={HandleClick.handleSignUp}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default SignUp;
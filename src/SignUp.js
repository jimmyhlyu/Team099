import "./SignUp.css";
import Logo from "./assets/logo3.png";
import Google from "./assets/google.png";
import * as HandleClick from "./HandleClick";

function SignUp() {
    return (
        <>
            <img src={Logo} className="logo"></img>
                <div className="darkBox">
                    <div className="signupFrm">
                        <div className="wrapper">
                            <form action="" className="form">
                                <h1 className="title">Sign up</h1>
                                <div className="inputContainer">
                                    <input type="text" name="input" >
                                        </input>
                                    <label className="label">Email</label>
                                </div>
                                <div className="inputContainer">
                                    <input type="text" name="input" >
                                        </input>
                                    <label className="label">Username</label>
                                </div>
                                <div className="inputContainer">
                                    <input type="password" name="input" >
                                        </input>
                                    <label className="label">Password</label>
                                </div>
                                <div className="inputContainer">
                                    <input type="password" name="input" >
                                        </input>
                                    <label className="label">Confirm Password</label>
                                </div>
                                <input type="submit" name="submitBtn" value="Sign up"></input>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default SignUp;
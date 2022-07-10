import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="webName">
                    <h1>Madsocial</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            {/* <SignUp /> */}
            <Login />
        </div>
    );
}

function Login() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Login</h3>
                <div>
                    <input type="text" placeholder="username" className="infoInput" name="usr-name" />
                </div>
                <div>
                    <input type="text" placeholder="password" className="infoInput" name="password" />
                </div>
                <div>
                    <span style={{ fontSize: "12px" }}>Don't heave an account. Sign Up</span>
                    <button className="button infoButton" type="submit">
                        Login
                    </button>
                </div>

            </form>
        </div>
    )
}

function SignUp() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder="First Name" className="infoInput" name="first-name" />
                    <input type="text" placeholder="Last Name" className="infoInput" name="last-name" />
                </div>
                <div>
                    <input type="text" placeholder="username" className="infoInput" name="usr-name" />
                </div>
                <div>
                    <input type="text" placeholder="password" className="infoInput" name="password" />
                    <input type="text" placeholder="confirm password" className="infoInput" name="confirm-password" />
                </div>
                <div>
                    <span style={{ fontSize: "12px" }}>Already heave an account. Login</span>
                    <button className="button infoButton" type="submit">
                        Sign Up
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Auth;
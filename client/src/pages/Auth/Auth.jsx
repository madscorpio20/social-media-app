import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from "../../Actions/AuthAction";


const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const dispatch = useDispatch();
    
    const loading = useSelector((state) => state.authReducer.loading);

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: ""
    });

    const [confirmPass, setConfirmPass] = useState(true);

    // Reset Form
    const resetForm = () => {
        setData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmpass: ""
        });
        setConfirmPass(true);
    };

    // handle Change in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        setConfirmPass(true);
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmpass 
            ? dispatch(signUp(data))
             : setConfirmPass(false)
        }
        else
        {
            dispatch(logIn(data));
        }
    }

    return (
        // left side
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="webName">
                    <h1>Madsocial</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            {/* right side */}
            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Log in"}</h3>
                    {isSignUp &&
                        <div>
                            <input type="text"
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                                onChange={handleChange}
                                value={data.firstname}
                            />
                            <input type="text"
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
                                onChange={handleChange}
                                value={data.lastname}
                            />
                        </div>
                    }

                    <div>
                        <input type="text"
                            placeholder="username"
                            className="infoInput"
                            name="username"
                            onChange={handleChange}
                            value={data.username}
                        />
                    </div>
                    <div>
                        <input type="password"
                            placeholder="password"
                            className="infoInput"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                        />
                        {isSignUp &&
                            <input type="password"
                                placeholder="confirm password"
                                className="infoInput"
                                name="confirmpass"
                                onChange={handleChange}
                                value={data.confirmpass}
                            />
                        }
                    </div>
                    <span
                        style={{
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px",
                            display: confirmPass ? "none" : "block",
                        }}
                    >
                        *Confirm password is not same
                    </span>

                    <div>
                        <span style={{ fontSize: "12px", cursor: "pointer" }}
                            onClick={() => { resetForm(); setIsSignUp((prev) => !prev); }}>
                            {isSignUp ? "Already heave an account. Login!" : "Don't have an account Sign Up!"}
                        </span>
                        <button className="button infoButton" type="submit" disabled={loading}>
                            {loading ? "Loading..." :isSignUp ? "Sign Up" : "Log in"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Auth;
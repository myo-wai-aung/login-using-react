import React, { useState } from "react";
import "./login.css"

const Login = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup('login-popup')
        setTimeout(()=>showPopup("hide"),3000)
    }
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <div className="login-btn" onClick={popup}>Login</div>
            <p className="text">Or login Using</p>
            <div className="alt-login">
                <div className="facebook">Facebook</div>
                <div className="google">Google</div>
            </div>

            <div className={popupStyle}>
                <h3>Login Fail</h3>
                <p>UserName or password incorrect</p>
            </div>
        </div>
    )
}

export default Login;
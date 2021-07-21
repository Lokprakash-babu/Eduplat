import React from 'react'
import "./Login.css"
const Login = ({toggleLogin, showSignUp}) => {

    const closeLogin = () =>{
        toggleLogin();
    }

    console.log("login function");

    return (
        <div className="loginForm">
            <div className="loginContent">
                <div className="close" onClick={closeLogin}>
                    <i className="far fa-times-circle"></i>
                </div>
                <div className="email">
                    <div className="label">Email</div>
                    <input type='email' className="input"></input>
                </div>
                
                <div className="password">
                    <div className="label">password</div>
                    <input type='password' className="input"></input>
                </div>
                <div className="login">
                    <button>Login</button>
                    
                </div>
                <div className="modalFooter">
                    Don't have an account <span className="signUpText" onClick={()=>{showSignUp()}}>Sign up!</span>
                </div>
            </div>
        </div>
    )
}

export default Login;

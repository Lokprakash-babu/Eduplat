import React from 'react'
import "./Signup.css";
const Signup = ({toggleSignUp}) => {

    const closeSignUp = () =>{
        toggleSignUp();
    }
    return (
        <div className="loginForm">
            <div className="loginContent">
                <div className="close" onClick={closeSignUp}>
                    <i class="far fa-times-circle"></i>
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
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup

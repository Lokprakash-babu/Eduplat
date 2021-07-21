import React, { Fragment, useState } from 'react'
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import "./Navbar.css";
const Navbar = (props) => {

    const [options, setOptions] = useState({breadCrumb: false, login: false, signUp: false});
    const toggleState = () =>{
        setOptions({...options, breadCrumb: !options.breadCrumb});
    }

    const toggleLogin = () =>{
        console.log("login");
        setOptions({...options, login: !options.login});
    }

    const toggleSignUp = () =>{
        setOptions({...options, signUp: !options.signUp});
    }

    const showSignUp = () =>{
        setOptions({...options, signUp: !options.signUp, login: !options.login});
    }

    const toDashBoard = () =>{
        props.props.history.push("/dashboard");
    }
    return (
        <Fragment>
            <nav className="navBar">
                <div className="logo">
                    <p>EduPlat</p>
                </div>
                <div className="contents">
                    <div className="content">About</div>
                    <div className="content" onClick={toDashBoard}>Learn with Us</div>
                </div>
                <div className="breadCrumb"  onClick={toggleState}>
                    <div className="lineContainer">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                </div>
            </nav>
            { options.breadCrumb && (<div className = "breadCrumb-content">
                <div className="breadCrumb-menu content-1">About</div>
                <div className="breadCrumb-menu content-2" onClick={toDashBoard}>Learn with Us</div>
            </div>)}
            {
                options.login && <Login toggleLogin={toggleLogin} showSignUp={showSignUp}/> 
            }
            {
                options.signUp && <Signup toggleSignUp={toggleSignUp}/>
            }
        </Fragment>

    )
}

export default Navbar;
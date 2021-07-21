import React, { Fragment } from 'react'
import "./landingPage.css";
import Navbar from './NavBar/Navbar';
import Hero from "./Hero/Hero";
const LandingPage = (props) => {
    return (
        <Fragment>
            <Navbar props={props}/>
            <Hero/>
        </Fragment>

    )
}

export default LandingPage;

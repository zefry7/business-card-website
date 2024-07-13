import React from "react";
import Portfolio from "./Portfolio/Portfolio";
import Intro from "./Intro/Intro";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";


function MainPage() {

    return <>
        <div className="first-block">
            <div className="move-block-wrapper">
                <Intro />
                <div className="move-block">
                    <Header />
                    <About />
                </div>
            </div>
            <Skills />
            <Portfolio />
        </div>
        <div className="bottom-block">
            <Contact />
        </div>
        <Footer />

    </>
}

export default MainPage;
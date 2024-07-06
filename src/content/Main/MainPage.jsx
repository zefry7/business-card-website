import React, { useEffect, useRef } from "react";
import Portfolio from "./Portfolio/Portfolio";
import Intro from "./Intro/Intro";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

function MainPage() {
    const hg = useRef()

    useEffect(() => {
        setTimeout(() => {
            const moveBlockWrapper = document.getElementsByClassName("move-block-wrapper")[0]
            const contactSection = document.getElementsByClassName("contact")[0]
            const root = document.getElementById("root")
            moveBlockWrapper.style.height = `${moveBlockWrapper.clientHeight + window.innerHeight + 100}px`
            // root.style.height = `${moveBlockWrapper.clientHeight + contactSection.clientHeight}px`
        }, 50)
    }, [])


    return <>
        <div className="move-block-wrapper" ref={hg}>
            <Intro />
            <div className="move-block">
                <Header />
                <About />
                <Skills />
                <Portfolio />
                <div className="bottom-block">
                    <Contact />
                </div>
                <Footer />
            </div>
        </div>
    </>
}

export default MainPage;
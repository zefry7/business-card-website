import React, { useEffect } from "react";
import Portfolio from "./Portfolio/Portfolio";
import Intro from "./Intro/Intro";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import showBlock from "../../styles/script/showBlock";

function MainPage() {
    const scrollY = useSelector(state => state.globalReducer.scrollY)
    const dispath = useDispatch()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            dispath({ type: "scrollY", value: window.scrollY })
        })

    }, [])

    useEffect(() => {
        if(scrollY > window.innerHeight - 100)
            showBlock()
    }, [scrollY])

    return <>
        <div className="move-block-wrapper">
            {/* <div className="top-block">
                <Intro />
            </div> */}
            <div className="move-block">
                {/* <Header /> */}
                <About />
                <Skills />
                {/* <Portfolio />
                <div className="bottom-block">
                    <Contact />
                </div>
                <Footer /> */}
            </div>
        </div>
    </>
}

export default MainPage;
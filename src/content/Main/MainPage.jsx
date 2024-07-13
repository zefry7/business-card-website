import React, { useEffect } from "react";
import Portfolio from "./Portfolio/Portfolio";
import Intro from "./Intro/Intro";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import showBlock from "../../styles/script/showBlock";

function MainPage() {

    function scrollScan() {
        const introBlock = document.getElementsByClassName("intro")[0]
        const root = document.querySelector(":root");

        if (introBlock.style.display == "none") {
            showBlock()
            window.removeEventListener("scroll", scrollScan)
            window.removeEventListener("resize", resizeScan)
        }
        if (window.scrollY > window.innerHeight) {
            introBlock.style.display = "none"
            root.removeAttribute('style');

            window.scrollTo({
                behavior: "auto",
                top: window.scrollY - window.innerHeight
            })
        }

    }

    function resizeScan() {
        const root = document.querySelector(":root");
        const a = document.getElementsByClassName("about")[0].clientHeight
        root.style.setProperty('--d', `calc(100lvh + 150px + ${a}px)`);
    }


    useEffect(() => {
        window.addEventListener("scroll", scrollScan)
        window.addEventListener("resize", resizeScan)
    }, [])

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
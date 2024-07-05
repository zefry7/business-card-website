import React, { useEffect, useRef } from "react";
import Portfolio from "./Portfolio/Portfolio";
import Intro from "./Intro/Intro";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function MainPage() {
    const hg = useRef()

    useEffect(() => {
        setTimeout(() => {
            const moveBlockWrapper = document.getElementsByClassName("move-block-wrapper")[0]

            moveBlockWrapper.style.height = `${moveBlockWrapper.clientHeight + window.innerHeight + 100}px`
        }, 50)
    }, [])


    return <>
        <div className="move-block-wrapper" ref={hg}>
            <Intro />
            <div className="move-block">
                <Header />
                <Portfolio />
                <Footer />
            </div>
        </div>
    </>
}

export default MainPage;
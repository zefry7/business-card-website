import React, { useEffect, useState } from "react";
import About from "./About/About";
import Skills from "./Skills/Skills";
import WrapperSwiper from "../../components/wrapper-swiper";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import SizeWindow from "../../components/size-window";

function MainPage() {
    const [lockContent, setLockContent] = useState(true);
    const windowWidth = window.matchMedia("(max-width: 1024px) or (max-height: 860px)");

    useEffect(() => {
        windowWidth.addEventListener("change", (e) => {
            setLockContent(e.matches);
        });

        setLockContent(windowWidth.matches) 
    }, []);

    return (
        <>
            {lockContent == false ? (
                <WrapperSwiper>
                    <About />
                    <Skills />
                    <Portfolio />
                    <Contact />
                </WrapperSwiper>
            ) : (
                <SizeWindow />
            )}
        </>
    );
}

export default MainPage;

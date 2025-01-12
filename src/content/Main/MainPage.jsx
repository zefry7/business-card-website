import React, { useEffect, useState } from "react";
import About from "./About/About";
import Skills from "./Skills/Skills";
import WrapperSwiper from "../../components/wrapper-swiper";
import { useDispatch, useSelector } from "react-redux";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import SizeWindow from "../../components/size-window";

function MainPage() {
    const page = useSelector((state) => state.globalReducer.page);
    const dispath = useDispatch();
    const [lockContent, setLockContent] = useState(true);
    const windowWidth = window.matchMedia("(max-width: 1024px) or (max-height: 860px)");

    useEffect(() => {
        windowWidth.addEventListener("change", (e) => {
            setLockContent(e.matches);
        });

        setLockContent(windowWidth.matches) 
    }, []);

    const handleNextPage = (typeName) => {
        dispath({ type: typeName });
    };

    return (
        <>
            {lockContent == false ? (
                <WrapperSwiper handleNextPage={handleNextPage}>
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

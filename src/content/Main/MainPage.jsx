import { lazy, useEffect, useState } from "react";
import WrapperSwiper from "../../components/wrapper-swiper";
import SizeWindow from "../../components/size-window";
import { useSelector } from "react-redux";

const About = lazy(() => import("./About/About"));
const Skills = lazy(() => import("./Skills/Skills"));
const Portfolio = lazy(() => import("./Portfolio/Portfolio"));
const Contact = lazy(() => import("./Contact/Contact"));

function MainPage() {
    const [lockContent, _] = useState(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));

    useEffect(() => {
        console.log(navigator.userAgent)
    }, [])

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

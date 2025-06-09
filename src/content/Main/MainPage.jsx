import { lazy, useEffect, useState } from "react";
import WrapperSwiper from "../../components/wrapper-swiper";
import SizeWindow from "../../components/size-window";
import { useSelector } from "react-redux";

const About = lazy(() => import("./About/About"));
const Skills = lazy(() => import("./Skills/Skills"));
const Portfolio = lazy(() => import("./Portfolio/Portfolio"));
const Contact = lazy(() => import("./Contact/Contact"));

function MainPage() {
    const [lockContent, setLockContent] = useState(true);
    const page = useSelector((state) => state.globalReducer.page);
    const windowWidth = matchMedia("(max-width: 1024px) or (max-height: 719px)");

    useEffect(() => {
        windowWidth.addEventListener("change", (e) => {
            setLockContent(e.matches);
        });

        setLockContent(windowWidth.matches);
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

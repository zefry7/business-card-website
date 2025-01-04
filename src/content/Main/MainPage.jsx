import React, { useEffect, useState } from "react";
import About from "./About/About";
import Skills from "./Skills/Skills";
import WrapperSwiper from "../../components/wrapper-swiper";
import { useDispatch, useSelector } from "react-redux";
import Portfolio from "./Portfolio/Portfolio";

function MainPage() {
    const page = useSelector((state) => state.globalReducer.page);
    const dispath = useDispatch();
    const [lockContent, setLockContent] = useState(false);
    const windowWidth = window.matchMedia("(max-width: 1024px)");

    useEffect(() => {
        windowWidth.addEventListener("change", (e) => {
            setLockContent(e.matches);
        });
    }, []);

    const handleNextPage = (typeName) => {
        dispath({ type: typeName });
    };

    return (
        <>
            {lockContent == false ? (
                <WrapperSwiper handleNextPage={handleNextPage}>
                    <About page={page} />
                    <Skills page={page} />
                    <Portfolio />
                </WrapperSwiper>
            ) : (
                <></>
            )}
        </>
    );
}

export default MainPage;

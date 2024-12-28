import React, { useState } from "react";
import About from "./About/About";
import Skills from "./Skills/Skills";
import WrapperSwiper from "../../components/wrapper-swiper";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
    const page = useSelector(state => state.globalReducer.page)
    const dispath = useDispatch()

    const handleNextPage = (typeName) => {
        dispath({ type: typeName })
    };

    return (
        <WrapperSwiper handleNextPage={handleNextPage}>
            <About page={page}/>
            <Skills page={page}/>
        </WrapperSwiper>
    );
}

export default MainPage;

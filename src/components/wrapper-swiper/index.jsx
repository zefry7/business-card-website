import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function WrapperSwiper({ children, handleNextPage }) {
    const page = useSelector((state) => state.globalReducer.page);
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if(e.keyCode == 37 || e.key == "A") {
                handleClickArrow("prev-page")
            }
            if(e.keyCode == 39 || e.key == "D") {
                handleClickArrow("next-page")
            }
        })
    }, [])
    
    const handleClickArrow = (typeName) => {
        setActive(true)
        handleNextPage(typeName)
        setTimeout(() => {
            setActive(false)
        }, 500)
    }

    return (
        <main className="wrapper-swiper">
            <div
                className={
                    "wrapper-swiper__arrow-prev" +
                    (active == true ? " wrapper-swiper__arrow_move" : "") +
                    (page == 1 ? " wrapper-swiper__arrow_disibled" : "")
                }
                onClick={() => handleClickArrow("prev-page")}
            >
                <img src="./img/double-arrow.svg" alt="" />
            </div>
            <div className="wrapper-swiper__content">{children}</div>
            <div
                className={
                    "wrapper-swiper__arrow-next" +
                    (active == true ? " wrapper-swiper__arrow_move" : "") +
                    (page == 4 ? " wrapper-swiper__arrow_disibled" : "")
                }
                onClick={() => handleClickArrow("next-page")}
            >
                <img src="./img/double-arrow.svg" alt="" />
            </div>
        </main>
    );
}

export default WrapperSwiper;

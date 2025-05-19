import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function WrapperSwiper({ children }) {
    const page = useSelector((state) => state.globalReducer.page);
    const dispath = useDispatch();
    const [active, setActive] = useState(false);

    const handleClickArrow = useCallback((typeName) => {
        setActive(true);

        dispath({ type: typeName });

        setTimeout(() => {
            setActive(false);
        }, 500);
    }, [dispath]);

    const handleKeyDown = useCallback((e) => {
        if ((e.keyCode === 37 || e.keyCode === 65) && document.activeElement === document.body) {
            handleClickArrow("prev-page");
        } else if ((e.keyCode === 39 || e.keyCode === 68) && document.activeElement === document.body) {
            handleClickArrow("next-page");
        }
    }, [handleClickArrow]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <main className="wrapper-swiper" data-testid="main">
            <div
                className={
                    "wrapper-swiper__arrow-prev" +
                    (active === true ? " wrapper-swiper__arrow_move" : "") +
                    (page === 1 ? " wrapper-swiper__arrow_disibled" : "")
                }
                data-testid="left-arrow"
                onClick={() => handleClickArrow("prev-page")}
            >
                <img src="./img/double-arrow.svg" alt="Стрелочка влево" />
            </div>
            <div className="wrapper-swiper__content">{children}</div>
            <div
                className={
                    "wrapper-swiper__arrow-next" +
                    (active === true ? " wrapper-swiper__arrow_move" : "") +
                    (page === 4 ? " wrapper-swiper__arrow_disibled" : "")
                }
                data-testid="right-arrow"
                onClick={() => handleClickArrow("next-page")}
            >
                <img src="./img/double-arrow.svg" alt="Стрелочка вправо" />
            </div>
        </main>
    );
}

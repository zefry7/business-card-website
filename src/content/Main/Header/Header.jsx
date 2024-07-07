import React, { useCallback, useContext } from "react";
import { DataContext } from "../../..";

function Header() {
    const data = useContext(DataContext)?.header

    const clickBurgerMenu = useCallback((e) => {
        const burgerContent = document.getElementsByClassName("header__burger-content")[0]
        let timer = 0

        burgerContent.classList.toggle("header__burger-content_active")
        e.currentTarget.classList.toggle("header__button-burger_active")

        if(!document.body.classList.contains("scroll-lock")) {
            timer = 300
        }

        setTimeout(() => {
            document.body.classList.toggle("scroll-lock")
            document.getElementById("root").classList.toggle("scroll-lock")
        }, timer)
    }, [])

    return <header className="header">
        <div className="header__wrapper">
            <div className="header__content">
                <div className="header__burger-content">
                    <nav className="header__nav-row">
                        {data?.nav?.map((v, i) => (
                            <div className="header__link" key={i}>
                                {v}
                            </div>
                        ))}
                    </nav>
                </div>
                <button className="header__button-burger" onClick={(e) => clickBurgerMenu(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
}

export default Header;
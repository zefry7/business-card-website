import React, { useCallback, useContext, useEffect } from "react";
import { DataContext } from "../../..";
import { moveToSection } from "../../../styles/script/functionality";

function Header() {
    const data = useContext(DataContext)?.header

    const clickBurgerMenu = useCallback(() => {
        if (window.innerWidth <= 768) {
            const burgerContent = document.getElementsByClassName("header__burger-content")[0]
            const burgerButton = document.getElementsByClassName("header__button-burger")[0]
            let timer = 0

            burgerContent.classList.toggle("header__burger-content_active")
            burgerButton.classList.toggle("header__button-burger_active")

            if (!document.body.classList.contains("scroll-lock")) {
                timer = 300
            }

            setTimeout(() => {
                document.body.classList.toggle("scroll-lock")
                document.getElementById("root").classList.toggle("scroll-lock")
            }, timer)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                const burgerContent = document.getElementsByClassName("header__burger-content")[0]
                const buttonBurger = document.getElementsByClassName("header__button-burger")[0]
                const detailWrapper = document.getElementsByClassName("portfolio__wrapper-detail")[0]

                burgerContent.classList.remove("header__burger-content_active")
                buttonBurger.classList.remove("header__button-burger_active")
                
                if (!detailWrapper.classList.contains("portfolio__detail_active")) {
                    document.body.classList.remove("scroll-lock")
                    document.getElementById("root").classList.remove("scroll-lock")
                }
            }
        })
    }, [])

    return <header className="header">
        <div className="header__wrapper">
            <div className="header__content">
                <div className="header__burger-content">
                    <nav className="header__nav-row">
                        {data?.nav?.map((v, i) => (
                            <button className="header__link" key={i} data-section={v?.dataSection} onClick={(e) => { clickBurgerMenu(e); moveToSection(e) }}>
                                {v?.text}
                            </button>
                        ))}
                    </nav>
                </div>
                <button className="header__button-burger" onClick={(e) => clickBurgerMenu(e)} aria-label="Кнопка для меню">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
}

export default Header;
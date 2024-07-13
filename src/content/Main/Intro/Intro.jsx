import React, { useCallback, useEffect } from "react"

export default function Intro() {

    const moveBottom = useCallback(() => {
        const introBlock = document.getElementsByClassName("intro")[0]
        const topVar = introBlock.clientHeight - window.scrollY

        setTimeout(() => {
            const root = document.querySelector(":root");
            introBlock.style.display = "none"
            root.removeAttribute('style');

            window.scrollTo({
                behavior: "auto",
                top: -100
            })
        }, 550)

        window.scrollTo({
            behavior: "smooth",
            top: topVar
        })

    }, [])

    useEffect(() => {
        const root = document.querySelector(":root");
        const a = document.getElementsByClassName("about")[0].clientHeight

        root.style.setProperty('--d', `calc(100lvh + 120px + ${a}px)`);
    }, [])

    return <section className="intro" aria-hidden="true">
        <div className="intro__wrapper">
            <div className="intro__content">
                <h1 className="intro__title">Frontend</h1>
                <button className="intro__arrow" onClick={moveBottom}></button>
            </div>
        </div>
    </section>
}
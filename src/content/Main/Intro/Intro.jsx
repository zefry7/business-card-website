import React, { useCallback, useEffect } from "react"

export default function Intro() {

    const moveBottom = useCallback(() => {
        const introBlock = document.getElementsByClassName("intro")[0]
        const topVar = introBlock.clientHeight - window.scrollY
        window.scrollBy({
            behavior: "smooth",
            top: topVar
        })
    }, [])

    useEffect(() => {
        const root = document.querySelector(":root");
        const a = document.getElementsByClassName("about")[0].clientHeight
        root.style.setProperty('--d', `calc(100lvh + 120px + ${a}px)`);
    }, [])

    return <section className="intro">
        <div className="intro__wrapper">
            <div className="intro__content">
                <h1 className="intro__title">Frontend</h1>
                <div className="intro__arrow" onClick={moveBottom}></div>
            </div>
        </div>
    </section>
}
import React, { useCallback } from "react"

export default function Intro() {

    const moveBottom = useCallback(() => {
        const introBlock = document.getElementsByClassName("intro")[0]
        const topVar = introBlock.clientHeight - window.scrollY
        window.scrollBy({
            behavior: "smooth",
            top: topVar
        })
    }, [])

    return <section className="intro">
        <div className="intro__wrapper">
            <div className="intro__content">
                <h2 className="intro__title">Frontend</h2>
                <div className="intro__arrow" onClick={moveBottom}></div>
            </div>
        </div>
    </section>
}
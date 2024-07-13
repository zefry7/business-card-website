import React, { useCallback, useEffect } from "react"
import showBlock from "../../../styles/script/showBlock"

export default function Intro() {

    const moveBottom = useCallback(() => {
        const introBlock = document.getElementsByClassName("intro")[0]
        const root = document.querySelector(":root");
        const topVar = introBlock.clientHeight

        setTimeout(() => {
            showBlock()
            introBlock.style.display = "none"
            root.removeAttribute('style');

            window.scrollTo({
                behavior: "auto",
                top: 0
            })
        }, 550)

        window.scrollTo({
            behavior: "smooth",
            top: topVar
        })
    }, [])
    
    const scrollScan = useCallback(() => {
        const introBlock = document.getElementsByClassName("intro")[0]
        const root = document.querySelector(":root");

        if (introBlock.style.display == "none") {
            showBlock()
            window.removeEventListener("scroll", scrollScan)
            window.removeEventListener("resize", resizeScan)
        }

        if (window.scrollY >= window.innerHeight) {
            introBlock.style.display = "none"
            root.removeAttribute('style');

            window.scrollTo({
                behavior: "auto",
                top: window.scrollY - window.innerHeight
            })
        }
    })

    const resizeScan = useCallback(() => {
        const root = document.querySelector(":root");
        const a = document.getElementsByClassName("about")[0].clientHeight
        root.style.setProperty('--d', `calc(100lvh + 150px + ${a}px)`);
    })

    useEffect(() => {
        resizeScan()
        window.addEventListener("scroll", scrollScan)
        window.addEventListener("resize", resizeScan)
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
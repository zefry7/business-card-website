import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const list = ["HTML", "CSS", "Tailwind", "React", "Redux", "JavaScript", "SASS", "TypeScript", "Webpack", "Git", "REST API", "Prettier"];

export default function Skills() {
    const page = useSelector((state) => state.globalReducer.page);
    const [active, setActive] = useState(page)
    const refTimeout = useRef()

    useEffect(() => {
        if (page === 2) {
            setActive(page);
        } else {
            refTimeout.current = setTimeout(() => {
                setActive(page);
            }, 300);
        }

        return () => clearTimeout(refTimeout.current)
    }, [page]);


    return (
        <section className={"skills" + (active === 2 ? " skills_active" : "")} id="skills" style={{ "--page": page }}>
            <div className={"skills__content"}>
                <div className={"skills__banner" + (active === 2 ? " skills__banner_active" : "")}>
                    <h2 className="skills__title">Навыки</h2>
                </div>
                <div className="skills__block skills__block_left">
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[0]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[1]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[2]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__column">
                        <div className="skills__wrapper-item scale-9">
                            <div className="skills__wrapper-item-top"></div>
                            <div className="skills__item">
                                <span className="skills__item-text">{list[5]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item scale-9">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[4]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__column">
                        <div className={"skills__wrapper-item scale-8"}>
                            <div className="skills__wrapper-item-top"></div>
                            <div className="skills__item">
                                <span className="skills__item-text">{list[3]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__block skills__block_right">
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[6]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item scale-9">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[7]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item scale-8">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[8]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[9]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item scale-9">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[10]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className="skills__item">
                                <span className="skills__item-text">{list[11]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills__line skills__line-1"></div>
            <div className="skills__line skills__line-2"></div>
            <div className="skills__line skills__line-3"></div>
            <div className="skills__line skills__line-4"></div>
            <div className="skills__line skills__line-5"></div>
        </section>
    );
}

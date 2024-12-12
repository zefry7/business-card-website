import React, { useContext } from "react";
import { DataContext } from "../../..";

const list = ["HTML", "CSS", "Tailwind", "React", "Redux", "JavaScript", "SASS", "TypeScript", "Webpack", "Git", "REST API", "Prettier"];

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills__content">
                <h2 className="skills__title">{"Навыки"}</h2>
                <div className="skills__block skills__block_left">
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[0]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[1]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[2]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[3]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[4]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[5]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__block skills__block_right">
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[0]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[0]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[0]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[0]}</span>
                            </div>
                        </div>
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[0]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__column">
                        <div className="skills__wrapper-item">
                            <div className={"skills__item"}>
                                <span className="skills__item-text">{list[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

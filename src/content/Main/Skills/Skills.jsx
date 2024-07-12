import React, { useContext, useEffect } from "react";
import { DataContext } from "../../..";

export default function Skills() {
    const data = useContext(DataContext)?.skills


    return <section className="skills" id="skills">
        <div className="skills__wrapper">
            <div className="skills__content">
                <h2 className="skills__title show-block move-left" data-move="move-left">{data?.title}</h2>
                <ul className="skills__list">
                    {data?.list?.map((v, i) => (
                        <li className="skills__item show-block move-left" data-move="move-left">
                            <p className="skills__item-text">
                                <span>{v?.label}: </span> {v?.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
}
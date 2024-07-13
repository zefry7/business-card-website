import React, { useContext } from "react";
import { DataContext } from "../../..";

export default function About() {
    const data = useContext(DataContext)?.about

    return <section className="about" id="about" aria-label="Раздел 'О себе'">
        <div className="about__wrapper">
            <div className="about__content">
                <h2 className="about__title show-block move-left" data-move="move-left">{data?.title}</h2>
                <div className="about__info">
                    <div className="about__img show-block move-left" data-move="move-left">
                        <img src={data?.img?.src} alt={data?.img?.alt} />
                    </div>
                    <div className="about__text-wrapper show-block move-right" data-move="move-right">
                        <p className="about__text-hi">{data?.text[0]}</p>
                        <p className="about__text">
                            {data?.text[1]}
                            <span>{data?.text[2]}</span>
                            <br />
                            {data?.text[3]}
                            <span>{data?.text[4]}</span>
                            {data?.text[5]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
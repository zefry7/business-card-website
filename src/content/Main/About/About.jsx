import React, { useContext } from "react";
import { DataContext } from "../../..";

export default function About() {
    const data = useContext(DataContext)?.about;

    return (
        <section className="about">
            <div className="about__content">
                <div className="about__column">
                    <div className="about__auth">
                        <div className="about__auth-img">
                            <img src="./img/About/quest.svg" alt="Фотография" />
                        </div>
                    </div>
                    <h2 className="about__title">О себе</h2>
                </div>
                <div className="about__column">
                    <div className="about__descr">
                        <h3 className="about__descr-title">Кто? Что? Почему?</h3>
                        <p className="about__descr-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor fugit porro exercitationem expedita vero
                            labore aliquid odit dicta ab.
                        </p>
                        <p className="about__descr-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi natus voluptatibus eveniet, illum
                            nam.
                        </p>
                        <p className="about__descr-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum cum neque modi, doloribus porro labore quidem
                            eaque maiores ex placeat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

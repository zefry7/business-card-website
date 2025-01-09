import React, { useContext, useState } from "react";
import { DataContext } from "../../..";

const links = [
    {
        img: {
            src: "./img/Footer/github.svg",
            alt: "Ссылка на мой GitHub",
        },
        url: "https://github.com/zefry7",
    },
    {
        img: {
            src: "./img/Footer/leetcode.svg",
            alt: "Ссылка на мой LeetCode",
        },
        url: "https://leetcode.com/u/zefry7/",
    },
    {
        img: {
            src: "./img/Footer/tg.svg",
            alt: "Ссылка на мой Telegram",
        },
        url: "https://t.me/petrov_71",
    },
];

export default function About({ page }) {
    const [hoverAuth, setHoverAuth] = useState("inactive");

    const handleHoverAuth = (value) => {
        setHoverAuth(value);
    };

    return (
        <section className="about" style={{ "--page": page }}>
            <div className="about__content">
                <h1 className="about__name">
                    Frontend <span>разработчик</span>
                </h1>
                <div className="about__column">
                    <div
                        className={"about__auth " + `about__auth_${hoverAuth}`}
                        onMouseEnter={() => handleHoverAuth("active")}
                        onMouseLeave={() => handleHoverAuth("inactive")}
                    >
                        <div className="about__auth-img">
                            <img src="./img/About/auth.jpg" alt="Фотография" />
                        </div>
                        <div className="about__auth-info">
                            <span>22 года</span>
                            <span>г. Ярославль</span>
                        </div>
                    </div>
                    <div className="about__auth-cloud"></div>
                    <h2 className="about__title">О себе</h2>
                </div>
                <div className="about__column">
                    <ul className="about__links">
                        {links?.map((v, i) => (
                            <li className="about__social" key={i}>
                                <a href={v?.url} target="_blank">
                                    <img src={v?.img?.src} alt={v?.img?.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="about__info">
                        <div className="about__descr">
                            <h3 className="about__descr-title">Кто? Что? Почему?</h3>
                            <p className="about__descr-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor fugit porro exercitationem expedita
                                vero labore aliquid odit dicta ab.
                            </p>
                            <p className="about__descr-text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi natus voluptatibus eveniet, illum
                                nam.
                            </p>
                            <p className="about__descr-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum cum neque modi, doloribus porro labore
                                quidem eaque maiores ex placeat.
                            </p>
                        </div>
                        <div className="about__achiev">
                            <h3 className="about__achiev-title">Достижения</h3>
                            <ul>
                                <li className="about__achiev-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, in.
                                </li>
                                <li className="about__achiev-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus.
                                </li>
                                <li className="about__achiev-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, alias!
                                </li>
                                <li className="about__achiev-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsa.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

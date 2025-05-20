import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

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

const achiev = [
    "Самостоятельно обучился веб-разработке и её аспектам.",
    "Участвовал во всероссийском акселераторе “Цифра” и занял с командой 3 место в рамках хакатона.",
    "Успешно прошёл интенсив по React от компании YLab Development.",
    "Решил более 700 задач различной сложности на LeetCode.",
    "Работал с различными бэкенд-разработчиками и дизайнерами.",
    "Работал по методологии Kanban.",
];

export default function About() {
    const [hoverAuth, setHoverAuth] = useState("inactive");
    const page = useSelector((state) => state.globalReducer.page);
    const [active, setActive] = useState();
    const refTimeout = useRef();

    useEffect(() => {
        if (page === 1) {
            setActive(page);
        } else {
            refTimeout.current = setTimeout(() => {
                setActive(page);
            }, 300);
        }
        return () => clearTimeout(refTimeout.current);
    }, [page]);

    const handleHoverAuth = useCallback((value) => {
        setHoverAuth(value);
    }, []);

    return (
        <section className={"about" + (active === 1 ? " about_active" : "")} style={{ "--page": page }} data-testid="about">
            <div className="about__content">
                <h1 className="about__name">
                    Frontend <span>разработчик</span>
                </h1>
                <div className="about__column">
                    <div
                        className={`about__auth about__auth_${hoverAuth}`}
                        onMouseEnter={() => handleHoverAuth("active")}
                        onMouseLeave={() => handleHoverAuth("inactive")}
                        data-testid={"auth"}
                    >
                        <div className="about__auth-img">
                            <img src="./img/About/auth-2.jpg" alt="Фотография" />
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
                                <a href={v?.url} target="_blank" rel="noreferrer">
                                    <img src={v?.img?.src} alt={v?.img?.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="about__info">
                        <div className="about__descr">
                            <h3 className="about__descr-title">Кто? Что? Почему?</h3>
                            <div className="about__descr-list">
                                <p className="about__descr-text">
                                    Я – веб-разработчик, который ценит командную работу и стремится создавать качественные, адаптивные и
                                    интуитивно понятные продукты.
                                </p>
                                <p className="about__descr-text">
                                    Специализируюсь на React и на всём, что с ним связано, так как он для меня удобен и понятен с точки
                                    зрения разработки.
                                </p>
                                <p className="about__descr-text">
                                    Мне нравится создавать проекты с индивидуальным и креативным подходом, а также писать код, выполнение
                                    которого моментально отображается на экране, позволяя мне видеть результат своей работы.
                                </p>
                            </div>
                        </div>
                        <div className="about__achiev">
                            <h3 className="about__achiev-title">Достижения</h3>
                            <ul className="about__achiev-list">
                                {achiev.map((v, i) => (
                                    <li className="about__achiev-text" key={i}>
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

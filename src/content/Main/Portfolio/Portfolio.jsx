import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


const items = [
    {
        id: "0",
        name: "Laboratory",
        tags: ["js", "sass", "pug"],
        description: "Сайт команды дизайнеров интерьера с примерами готовых работ и расценками предоставляемых услуг.",
        img: {
            src: "./img/Portfolio/laboratory.png",
            alt: "Обложка сайта из портфолио",
        },
        list: [
            "Одностраничный сайт",
            "Адаптивный сайт под разные устройства",
            "Использование методологии BEM",
            "Оптимизация изображений и загрузки сайта",
            "Работа с элементами таблицы",
            "Анимации отображения различных элементов",
        ],
        link: "https://laboratory-sigma.vercel.app/",
    },
    {
        id: "1",
        name: "Chef Kitchen",
        tags: ["react", "redux", "sass"],
        description: "Доставка еды по городу из готового меню на несколько дней с выбором количества калорий на каждый день.",
        img: {
            src: "./img/Portfolio/food-delivery-screen.webp",
            alt: "Обложка сайта из портфолио",
        },
        list: [
            "Одностраничный сайт",
            "Адаптивный сайт под разные устройства",
            "Использование методологии BEM",
            "Покомпонентная разработка",
            "Оптимизация изображений и загрузки сайта",
            "Работа со слайдером Swiper",
            "Эффект параллакса у декоративных элементов",
            "Анимации отображения различных элементов",
            "Добавлена карта от Яндекса",
        ],
        link: "https://zefry7.github.io/food-delivery/",
    },
    {
        id: "2",
        name: "Столярная мастерская",
        tags: ["react", "sass"],
        description: "Столярная мастерская, предоставляющая услуги по производству и реставрации мебели.",
        img: {
            src: "./img/Portfolio/furniture-restoration-screen.webp",
            alt: "Обложка сайта из портфолио",
        },
        list: [
            "Многостраничный сайт",
            "Адаптивный сайт под разные устройства",
            "Покомпонентная разработка",
            "Использование методологии BEM",
            "Оптимизация изображений и загрузки сайта",
            "Работа со слайдером Swiper",
            "Анимации отображения различных элементов",
        ],
        link: "https://zefry7.github.io/furniture-restoration/",
    },
    {
        id: "3",
        name: "Digital Project",
        tags: ["js", "sass", "pug"],
        description: "Сайт команды дизайнеров интерьера с примерами готовых работ и расценками предоставляемых услуг.",
        img: {
            src: "./img/Portfolio/digital-project.png",
            alt: "Обложка сайта из портфолио",
        },
        list: [
            "Одностраничный сайт",
            "Адаптивный сайт под разные устройства",
            "Использование методологии BEM",
            "Оптимизация изображений и загрузки сайта",
            "Работа с элементами таблицы",
            "Анимации отображения различных элементов",
        ],
        link: "https://zefry7.github.io/interior-design/",
    },
    {
        id: "4",
        name: "Interior Design",
        tags: ["js", "sass", "pug"],
        description: "Сайт команды дизайнеров интерьера с примерами готовых работ и расценками предоставляемых услуг.",
        img: {
            src: "./img/Portfolio/interior-design-screen.webp",
            alt: "Обложка сайта из портфолио",
        },
        list: [
            "Одностраничный сайт",
            "Адаптивный сайт под разные устройства",
            "Использование методологии BEM",
            "Оптимизация изображений и загрузки сайта",
            "Работа с элементами таблицы",
            "Анимации отображения различных элементов",
        ],
        link: "https://zefry7.github.io/interior-design/",
    },
];

function Portfolio() {
    const page = useSelector((state) => state.globalReducer.page);
    const [activeProject, setActiveProject] = useState(0);
    const [active, setActive] = useState();
    const refTimeout = useRef()

    useEffect(() => {
        if (page === 3) {
            setActive(page);
        } else {
            refTimeout.current = setTimeout(() => {
                setActive(page);
            }, 300);
        }

        return () => clearTimeout(refTimeout.current)
    }, [page]);


    return (
        <section className={"portfolio" + (active === 3 ? " portfolio_active" : "")} id="portfolio" style={{ "--page": page }}>
            <div className="portfolio__content">
                <div className="portfolio__column">
                    <div className="portfolio__row">
                        {items.map((v, i) => (
                            <span
                                className={activeProject === i ? "portfolio__name portfolio__name_active" : "portfolio__name"}
                                key={i}
                                onClick={() => setActiveProject(i)}
                            >
                                {v.name}
                            </span>
                        ))}
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__project-img">
                            <img src={items[activeProject].img.src} alt="" />
                        </div>
                        <div className="portfolio__project-info">
                            <div className="portfolio__project-tag-row">
                                {items[activeProject].tags.map((v, i) => (
                                    <span className="portfolio__project-tag" key={i}>
                                        {v}
                                    </span>
                                ))}
                            </div>
                            <h2 className="portfolio__project-name">{items[activeProject].name}</h2>
                            <p className="portfolio__project-descr">{items[activeProject].description}</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio__column">
                    <div className="portfolio__info">
                        <h3 className="portfolio__info-title">Описание</h3>
                        <ul className="portfolio__info-list">
                            {items[activeProject]?.list.map((v, i) => (
                                <li className="portfolio__info-line" key={i}>
                                    {v}
                                </li>
                            ))}
                        </ul>
                        <a href={items[activeProject].link} target="_blank" rel="noreferrer" className="portfolio__info-button">
                            Открыть сайт
                        </a>
                    </div>
                    <h2 className="portfolio__title">Портфолио</h2>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

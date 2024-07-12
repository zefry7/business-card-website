export const data = {
    header: {
        logo: "",
        nav: [
            {
                text: "О себе",
                dataSection: "about"
            },
            {
                text: "Навыки",
                dataSection: "skills"
            },
            {
                text: "Портфолио",
                dataSection: "portfolio"
            },
            {
                text: "Контакты",
                dataSection: "contact"
            }
        ]
    },
    about: {
        title: "О себе",
        text: ["Привет!", "Меня зовут Никита, и я ", "Frontend-разработчик", " с опытом работы в создании удобных и креативных веб-сайтов. Специализируюсь на ", "React", " и всё, что с ним связано."],
        img: {
            src: "./img/About/quest.svg",
            alt: "Моё фото"
        }
    },
    skills: {
        title: "Навыки",
        list: [
            {
                label: "HTML",
                text: "Знание семантики, работа с формами и таблицами, доступность сайта, SEO-оптимизация."
            },
            {
                label: "CSS/SASS",
                text: "Flexbox и Grid, создание анимации, псевдоклассы и псевдоэлементы, адаптивность и кроссбраузерность."
            }, 
            {
                label: "JS",
                text: "HTML DOM, Async/await, Promise, хранение данных, браузерное окружение, fetch, axios."
            }, 
            {
                label: "REACT",
                text: "React хуки, Virtual DOM, создание собственных компонентов и хуков, React Router."
            }, 
            {
                label: "REDUX",
                text: "Работа с хранилищем и передачей данных, Redux Toolkit, Redux thunk, Redux saga, Redux DevTools."
            }, 
            {
                label: "TS",
                text: "Способы типизации, шаблоны, интерфейсы, служебные утилиты." 
            },
            {
                label: "Другое",
                text: "Tailwind, Git, SQL, REST API, jQuery, Pug."
            }
        ]
    },
    portfolio: {
        tags: ["react", "redux", "js", "ts", "sass", "tailwind","pug"],
        items: [
            {
                id: "0",
                name: "Chef kitchen",
                tags: ["sass", "react", "redux"],
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dignissimos rerum magnam voluptatibus voluptate, quasi repellendus incidunt ipsa obcaecati minus.",
                img: {
                    src: "./img/Portfolio/food-delivery-screen.webp",
                    alt: "Обложка сайта из портфолио"
                }
            },
            {
                id: "1",
                name: "INTERIOR DESIGN",
                tags: ["pug", "js", "sass"],
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dignissimos rerum magnam voluptatibus voluptate, quasi repellendus incidunt ipsa obcaecati minus.",
                img: {
                    src: "./img/Portfolio/interior-design-screen.webp",
                    alt: "Обложка сайта из портфолио"
                }
            },
        ],
        detailLabel: "Реализовано:",
        details: [
            {
                name: "Chef kitchen",
                tags: ["sass", "react", "redux"],
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dignissimos rerum magnam voluptatibus voluptate, quasi repellendus incidunt ipsa obcaecati minus.",
                img: {
                    src: "./img/Portfolio/food-delivery-screen.webp",
                    alt: "Обложка сайта из портфолио"
                },
                list: [
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации"
                ],
                link: {
                    text: "Открыть сайт",
                    url: "https://zefry7.github.io/food-delivery/"
                }
            },
            {
                name: "INTERIOR DESIGN",
                tags: ["pug", "js", "sass"],
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dignissimos rerum magnam voluptatibus voluptate, quasi repellendus incidunt ipsa obcaecati minus.",
                img: {
                    src: "./img/Portfolio/interior-design-screen.webp",
                    alt: "Обложка сайта из портфолио"
                },
                list: [
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации",
                    "Адаптивный сайт",
                    "Анимации"
                ],
                link: {
                    text: "Открыть сайт",
                    url: "https://zefry7.github.io/food-delivery/"
                }
            }
        ]
    },
    contact: {
        title: "Контакты",
        description: "Если у Вас есть предложения или вопросы, то Вы можете оставить своё сообщение.",
        name: {
            type: "text",
            name: "name",
            placeholder: "Ваше имя..."
        },
        email: {
            type: "email",
            name: "email",
            placeholder: "Ваш email..."
        }
        ,
        textarea: {
            name: "description",
            placeholder: "Ваше сообщение..."
        },
        button: {
            text: "Отправить"
        }
    },
    footer: {
        links: [
            {
                img: {
                    src: "./img/Footer/github.svg",
                    alt: "Ссылка на мой GitHub"
                },
                url: "https://github.com/zefry7"
            },
            {
                img: {
                    src: "./img/Footer/leetcode.svg",
                    alt: "Ссылка на мой LeetCode"
                },
                url: "https://leetcode.com/u/zefry7/"
            },
            {
                img: {
                    src: "./img/Footer/tg.svg",
                    alt: "Ссылка на мой Telegram"
                },
                url: "https://t.me/petrov_71"
            }
        ],
        year: "©2023-2024"
    }
}
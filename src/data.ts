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
    portfolio: {
        items: [
            {
                id: "1",
                name: "Chef kitchen",
                tags: ["sass", "react", "redux"],
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dignissimos rerum magnam voluptatibus voluptate, quasi repellendus incidunt ipsa obcaecati minus.",
                img: {
                    src: "./img/Portfolio/food-delivery-screen.png",
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
                    src: "./img/Portfolio/food-delivery-screen.png",
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
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tempore atque, consectetur blanditiis mollitia nihil.",
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
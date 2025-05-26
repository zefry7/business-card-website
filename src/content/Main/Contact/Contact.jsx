import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const KEY_EMAIL = "019f267d-73c2-48b0-a2c5-b0c37e769e28";

export default function Contact() {
    const page = useSelector((state) => state.globalReducer.page);
    const [error, setError] = useState(false);
    const buttonSubmit = useRef();
    const [active, setActive] = useState(page);
    const refTimeout = useRef();

    useEffect(() => {
        if (page === 4) {
            setActive(page);
        } else {
            refTimeout.current = setTimeout(() => {
                setActive(page);
            }, 300);
        }

        return () => clearTimeout(refTimeout.current);
    }, [page]);

    const sendingEmail = async (event) => {
        event.preventDefault();
        setError(false);
        const formData = new FormData(event.target);

        if (changeInputEmail(formData.get("email"))) {
            formData.append("access_key", KEY_EMAIL);

            const object = Object.fromEntries(formData);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(object),
                })
                  
                if(!response.ok) throw new Error('HTTP error')

                alert("Сообщение отправлено!");   
                event.target.reset();

            } catch (error) {
                alert("Возникла ошибка!");
            }
        }
    };

    const changeInputName = useCallback((e) => {
        const reg = new RegExp("[a-zа-я]", "ig");
        if (e.target.value.length === 1) {
            e.target.value = e.target.value.toUpperCase();
        }

        if (e.target.value && !e.target.value[e.target.value.length - 1].match(reg)) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1);
        }
    }, []);

    const changeInputEmail = useCallback((value) => {
        const reg = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");
        if (reg.test(value)) {
            return true;
        }
        setError(true);
        return false;
    }, []);

    return (
        <section
            className={"contact" + (active === 4 ? " contact_active" : "")}
            id="contact"
            style={{ "--page": page }}
            data-testid="contact"
        >
            <div className="contact__content">
                <h2 className="contact__title">Контакты</h2>
                <p className="contact__description">Если у Вас есть предложения или вопросы, то Вы можете оставить своё сообщение.</p>
                <div className="contact__wrapper-form">
                    <form className="contact__form" onSubmit={sendingEmail} data-testid="form">
                        <input
                            type="text"
                            name="name"
                            className="contact__form-name"
                            placeholder="Ваше имя..."
                            onChange={changeInputName}
                            required
                            data-testid="inputName"
                        />
                        <input
                            type="email"
                            name="email"
                            className="contact__form-email"
                            placeholder="Ваша почта..."
                            required
                            data-testid="inputEmail"
                        />
                        <textarea
                            name="description"
                            className="contact__form-description"
                            placeholder="Ваше сообщение..."
                            required
                        ></textarea>
                        <p className="contact__error">{error === true && "*Неправильно указана почта"}</p>
                        <button type="submit" className="contact__form-submit" ref={buttonSubmit} data-testid="submit">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

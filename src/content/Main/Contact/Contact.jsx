import React, { useCallback, useContext, useRef, useState } from "react";
import { DataContext } from "../../..";
import { useSelector } from "react-redux";

const KEY_EMAIL = "019f267d-73c2-48b0-a2c5-b0c37e769e28";

export default function Contact() {
    const data = useContext(DataContext)?.contact;
    const page = useSelector((state) => state.globalReducer.page);
    const [error, setError] = useState(false)
    const buttonSubmit = useRef();

    const sendingEmail = async (event) => {
        event.preventDefault();
        setError(false)
        const formData = new FormData(event.target);

        if (changeInputEmail(formData.get("email"))) {
            formData.append("access_key", KEY_EMAIL);

            const object = Object.fromEntries(formData);

            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(object),
            }).then(() => {
                alert("Сообщение отправлено!")
                event.target.reset()
            }).catch(() => {
                alert("Возникла ошибка!")
            })
        } 
    };

    const changeInputName = useCallback((e) => {
        const reg = new RegExp("[a-zа-я]", "ig");
        if (e.target.value.length == 1) {
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
        setError(true)
        return false;
    }, []);

    return (
        <section className="contact" id="contact" style={{ "--page": page }}>
            <div className="contact__content">
                <h2 className="contact__title">{data?.title}</h2>
                <p className="contact__description">{data?.description}</p>
                <div className="contact__wrapper-form">
                    <form className="contact__form" onSubmit={sendingEmail}>
                        <input
                            type={data?.name?.type}
                            name={data?.name?.name}
                            className="contact__form-name"
                            placeholder={data?.name?.placeholder}
                            onChange={changeInputName}
                            aria-description="Для имени"
                            required
                        />
                        <input
                            type={data?.email?.type}
                            name={data?.email?.name}
                            className="contact__form-email"
                            placeholder={data?.email?.placeholder}
                            aria-description="Для почты"
                            required
                        />
                        <textarea
                            name={data?.textarea?.name}
                            className="contact__form-description"
                            placeholder={data?.textarea?.placeholder}
                            aria-description="Для сообщения"
                            required
                        ></textarea>
                        <p className="contact__error">{error == true && "*Неправильно указана почта"}</p>
                        <button type="submit" className="contact__form-submit" ref={buttonSubmit}>
                            {data?.button?.text}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

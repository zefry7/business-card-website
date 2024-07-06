import React from "react";

const KEY_EMAIL = "019f267d-73c2-48b0-a2c5-b0c37e769e28"

export default function Contact() {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", KEY_EMAIL);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };


    return <section className="contact">
        <div className="contact__wrapper">
            <div className="contact__content">
                <h2 className="contact__title">Контакты</h2>
                <div className="contact__wrapper-form">
                    <form className="contact__form" onSubmit={onSubmit}>
                        <input type="text" name="name" className="contact__form-name" placeholder="Имя"/>
                        <button type="submit" className="contact__form-submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
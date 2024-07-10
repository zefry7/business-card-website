import React, { useEffect } from "react";

export default function About() {

    return <section className="about" id="about">
        <div className="about__wrapper">
            <div className="about__content">
                <h2 className="about__title show-block move-left" data-move="move-left">О себе</h2>
                <div className="about__info">
                    <div className="about__img show-block move-left" data-move="move-left">
                        <img src="./img/About/quest.svg" alt="" />
                    </div>
                    <p className="about__text show-block move-right" data-move="move-right">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium corrupti debitis quibusdam neque, velit in voluptas similique temporibus harum ducimus voluptatem aliquam molestias ex vero eligendi iure quod accusantium!
                    </p>
                </div>
            </div>
        </div>
    </section>
}
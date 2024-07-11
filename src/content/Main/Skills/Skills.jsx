import React, { useEffect } from "react";

export default function Skills() {

    return <section className="skills" id="skills">
        <div className="skills__wrapper">
            <div className="skills__content">
                <h2 className="skills__title show-block move-left" data-move="move-left">Навыки</h2>
                <ul className="skills__list">
                    <li className="skills__item show-block move-left" data-move="move-left">
                        <p className="skills__item-text">
                            <span>HTML: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore autem totam commodi deleniti reiciendis quisquam cumque sequi harum, corporis mollitia sit beatae omnis ad voluptates!
                        </p>
                    </li>
                    <li className="skills__item show-block move-right" data-move="move-right">
                        <p className="skills__item-text">
                            <span>HTML: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore autem totam commodi deleniti reiciendis quisquam cumque sequi harum, corporis mollitia sit beatae omnis ad voluptates!
                        </p>
                    </li>
                    <li className="skills__item show-block move-left" data-move="move-left">
                        <p className="skills__item-text">
                            <span>HTML: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore autem totam commodi deleniti reiciendis quisquam cumque sequi harum, corporis mollitia sit beatae omnis ad voluptates!
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}
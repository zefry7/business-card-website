import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Portfolio() {
    const dispatch = useDispatch()
    const listTag = useSelector(state => state?.portfolioReducer?.listTag)

    const openBlockDetail = (e) => {
        const idBlock = e.target.getAttribute("data-detail-id");
        const blockDetail = document.getElementById(idBlock);
        document.body.classList.add("scroll-lock");
        blockDetail.classList.add("portfolio__detail_active");
    }

    const removeClassBlockDetail = (e) => {
        const wrapper = e.currentTarget
        document.body.classList.remove("scroll-lock");
        wrapper.classList.remove("portfolio__detail_active")
    }

    const addTagInFilter = (e) => {
        const input = e.currentTarget.getElementsByTagName("input")[0]
        const str = e.currentTarget.getElementsByTagName("span")[0].textContent;
        if (input.checked) {
            dispatch({ type: "addTag", value: str })
        } else {
            dispatch({ type: "removeTag", value: str })
        }
    }

    useEffect(() => {
        const listItemWorks = document.getElementsByClassName("portfolio__item")

        if (listTag.length > 0) {
            for (let item of listItemWorks) {
                const tagsItem = item.getElementsByClassName("portfolio__item-tag")
                let count = 0
                for (let tag of tagsItem) {
                    if (listTag.some(v => v == tag.getAttribute("data-tag"))) {
                        tag.classList.add("portfolio__item-tag_active")
                        ++count
                    } else {
                        tag.classList.remove("portfolio__item-tag_active")
                    }
                }
                if (count == listTag.length) {
                    item.classList.remove("no-search")
                    item.classList.add("search")
                } else {
                    item.classList.remove("search")
                    item.classList.add("no-search")
                }
            }
        } else {
            for (let item of listItemWorks) {
                const tagsItem = item.getElementsByClassName("portfolio__item-tag")
                item.classList.remove("no-search")
                item.classList.remove("search")
                for (let tag of tagsItem) {
                    tag.classList.remove("portfolio__item-tag_active")
                }
            }
        }
    }, [listTag])

    return <section className="portfolio">
        <div className="portfolio__wrapper">
            <div className="portfolio__content">
                <h2 className="portfolio__title">
                    Портфолио
                </h2>
                <div className="portfolio__filter">
                    <h3 className="portfolio__filter-title">Фильтр:</h3>
                    <div className="portfolio__filter-list">
                        <div className="portfolio__filter-tag" onClick={(e) => addTagInFilter(e)}>
                            <input type="checkbox" name="filter" />
                            <span>Сайт</span>
                        </div>
                        <div className="portfolio__filter-tag" onClick={(e) => addTagInFilter(e)}>
                            <input type="checkbox" name="filter" />
                            <span>Анимация</span>
                        </div>
                    </div>
                </div>
                <div className="portfolio__list">
                    <article className="portfolio__item">
                        <div className="portfolio__item-img">
                            <img src="./img/Portfolio/food-delivery-screen.png" alt="" />
                        </div>
                        <div className="portfolio__item-info">
                            <h3 className="portfolio__item-title">Заголовок</h3>
                            <div className="portfolio__item-tag-row">
                                <div className="portfolio__item-tag" data-tag="Сайт">
                                    <span>Сайт</span>
                                </div>
                                <div className="portfolio__item-tag" data-tag="Анимация">
                                    <span>Анимация</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Сай416т</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Сайт</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Саmcbmcbmйт</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Сайт</span>
                                </div>
                            </div>
                            <p className="portfolio__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dignissimos rerum magnam voluptatibus voluptate, quasi repellendus incidunt ipsa obcaecati minus.
                            </p>
                            <p className="portfolio__item-more" data-detail-id="detail-1" onClick={(e) => openBlockDetail(e)}>
                                Подробнее
                            </p>
                        </div>
                        <div className="portfolio__wrapper-detail" id="detail-1" onClick={(e) => removeClassBlockDetail(e)}>
                            <div className="portfolio__detail">
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                            </div>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-img">
                            <img src="./img/Portfolio/food-delivery-screen.png" alt="" />
                        </div>
                        <div className="portfolio__item-info">
                            <h3 className="portfolio__item-title">Заголовок</h3>
                            <div className="portfolio__item-tag-row">
                                <div className="portfolio__item-tag">
                                    <span>5315315315</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Сай416т</span>
                                </div>
                                <div className="portfolio__item-tag" data-tag="Сайт">
                                    <span>Сайт</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Саmcbmcbmйт</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Сайт</span>
                                </div>
                            </div>
                            <p className="portfolio__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dignissimos rerum magnam voluptatibus voluptate, quasi repellendus incidunt ipsa obcaecati minus.
                            </p>
                            <p className="portfolio__item-more" data-detail-id="detail-1" onClick={(e) => openBlockDetail(e)}>
                                Подробнее
                            </p>
                        </div>
                        <div className="portfolio__wrapper-detail" id="detail-1" onClick={(e) => removeClassBlockDetail(e)}>
                            <div className="portfolio__detail">
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                            </div>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-img">
                            <img src="./img/Portfolio/food-delivery-screen.png" alt="" />
                        </div>
                        <div className="portfolio__item-info">
                            <h3 className="portfolio__item-title">Заголовок</h3>
                            <div className="portfolio__item-tag-row">
                                <div className="portfolio__item-tag">
                                    <span>5315315315</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Сай416т</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Сайт</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Саmcbmcbmйт</span>
                                </div>
                                <div className="portfolio__item-tag">
                                    <span>Сайт</span>
                                </div>
                            </div>
                            <p className="portfolio__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dignissimos rerum magnam voluptatibus voluptate, quasi repellendus incidunt ipsa obcaecati minus.
                            </p>
                            <p className="portfolio__item-more" data-detail-id="detail-1" onClick={(e) => openBlockDetail(e)}>
                                Подробнее
                            </p>
                        </div>
                        <div className="portfolio__wrapper-detail" id="detail-1" onClick={(e) => removeClassBlockDetail(e)}>
                            <div className="portfolio__detail">
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                                <h3 className="portfolio__item-title">Заголовок</h3>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
}

export default Portfolio;
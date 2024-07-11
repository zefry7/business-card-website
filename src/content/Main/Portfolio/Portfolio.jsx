import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataContext } from "../../..";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { SwiperSlide } from "swiper/react";


function Portfolio() {
    const data = useContext(DataContext)?.portfolio
    const dispatch = useDispatch()
    const listTag = useSelector(state => state?.portfolioReducer?.listTag)

    const openBlockDetail = (e) => {
        const idBlock = e.currentTarget.getAttribute("data-detail-id");
        const blockDetail = document.getElementById(`detail-${idBlock}`);
        const burgerMenu = document.getElementsByClassName("header__button-burger")[0];

        burgerMenu.classList.add("header__button-burger_hidden")
        document.body.classList.add("scroll-lock");
        blockDetail.classList.add("portfolio__detail_active");
    }

    const removeClassBlockDetail = (e) => {
        const wrapper = document.getElementsByClassName("portfolio__wrapper-detail")[0]
        const burgerMenu = document.getElementsByClassName("header__button-burger")[0];

        if (e.target.classList.contains("portfolio__wrapper-detail") || e.currentTarget.classList.contains("portfolio__detail-close")) {
            burgerMenu.classList.remove("header__button-burger_hidden")
            document.body.classList.remove("scroll-lock");
            wrapper.classList.remove("portfolio__detail_active")
        }
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


    const ttt = () => {
        const item = document.getElementsByClassName("portfolio__item-content")[0]

        item.addEventListener("mousemove", (e) => {
            const l = item.getBoundingClientRect().left
            const w = item.clientWidth
            if (e.clientX - l <= w / 2)
                item.style.transform = "rotateY(1.5deg)"
            else
                item.style.transform = "rotateY(-1.5deg)"
        })
        item.addEventListener("mouseout", (e) => {
            item.removeAttribute("style")
        })
    }


    useEffect(() => {
        ttt()
    }, [])

    return <section className="portfolio" id="portfolio">
        <div className="portfolio__wrapper">
            <div className="portfolio__content">
                <h2 className="portfolio__title">
                    Портфолио
                </h2>
                <div className="portfolio__filter">
                    <h3 className="portfolio__filter-title">Фильтр:</h3>
                    <div className="portfolio__filter-list">
                        <SwiperConstructor setting="settingTags">
                            {data?.tags?.map((v, i) => (
                                <SwiperSlide key={i}>
                                    <div className="portfolio__filter-tag" onClick={(e) => addTagInFilter(e)}>
                                        <input type="checkbox" name="filter" />
                                        <span>{v}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </SwiperConstructor>
                    </div>
                </div>
                <div className="portfolio__list">
                    {data?.items?.map((v) => (
                        <article className="portfolio__item" key={v?.id} data-detail-id={v?.id} onClick={(e) => { openBlockDetail(e) }}>
                            <div className="portfolio__item-content">
                                <div className="portfolio__item-img">
                                    <img src={v?.img?.src} alt={v?.img?.alt} />
                                </div>
                                <div className="portfolio__item-info">
                                    <h3 className="portfolio__item-title">{v?.name}</h3>
                                    <div className="portfolio__item-tag-row">
                                        {v?.tags?.map((tag, i) => (
                                            <div className="portfolio__item-tag" key={i} data-tag="tag">
                                                <span>{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="portfolio__item-text">
                                        {v?.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                {data?.details?.map((v, i) => (
                    <div className="portfolio__wrapper-detail" id="detail-1" key={i} onClick={(e) => removeClassBlockDetail(e)}>
                        <div className="portfolio__detail">
                            <div className="portfolio__detail-img">
                                <img src={v?.img?.src} alt={v?.img?.alt} />
                            </div>

                            <div className="portfolio__detail-info">
                                <div className="portfolio__detail-text">
                                    <h3 className="portfolio__detail-title">{v?.name}</h3>
                                    <ul className="portfolio__detail-row-tag">
                                        {v?.tags?.map((tag, i) => (
                                            <li className="portfolio__detail-tag" key={i}>
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="portfolio__detail-description">{v?.description}</p>
                                    <a className="portfolio__detail-link" href={v?.link?.url} target="_blank">{v?.link?.text}</a>
                                </div>
                                <div className="portfolio__detail-done">
                                    <h3 className="portfolio__detail-label">{data?.detailLabel}</h3>
                                    <ul className="portfolio__detail-list">
                                        {v?.list?.map((item, key) => (
                                            <li className="portfolio__detail-item" key={key}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="portfolio__detail-close" onClick={(e) => removeClassBlockDetail(e)}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section >
}

export default Portfolio;
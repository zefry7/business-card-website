import React, { useContext } from "react";
import { DataContext } from "../../..";

function Footer() {
    const data = useContext(DataContext)?.footer;

    return <footer className="footer" id="footer">
        <div className="footer__wrapper">
            <div className="footer__content">
                <ul className="footer__links">
                    {data?.links?.map((v, i) => (
                        <li className="footer__img move-scale show-block" key={i} data-move={"move-scale"}>
                            <a href={v?.url} target="_blank">
                                <img src={v?.img?.src} alt={v?.img?.alt} />
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="footer__text show-block move-left" data-move={"move-left"}>{data?.year}</p>
            </div>
        </div>
    </footer>
}

export default Footer;
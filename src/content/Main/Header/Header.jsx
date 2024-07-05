import React, { useContext } from "react";
import { DataContext } from "../../..";

function Header() {
    const data = useContext(DataContext)?.header


    return <header className="header">
        <div className="header__wrapper">
            <div className="header__content">
                <nav className="header__nav-row">
                    {data?.nav?.map((v, i) => (
                        <div className="header__link" key={i}>
                            {v}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    </header>
}

export default Header;
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Main/Footer/Footer";
import Header from "../Main/Header/Header";


function Layout() {

    return <>
        <Header />
        <Outlet/>
        <Footer />
    </>
}

export default Layout;
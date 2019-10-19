import React from "react";
import SiteMetadata from "../components/metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import "../../static/global.scss";

const Layout = props => {
    return (
        <div>
            <SiteMetadata />
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;

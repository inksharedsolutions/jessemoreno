import React from "react";
import SiteMetadata from "../components/metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import "../../static/global.scss";

const Layout = props => {
    return (
        <div className={`${props.className} layout`}>
            <SiteMetadata />
            <Header logo={props.logo} />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;

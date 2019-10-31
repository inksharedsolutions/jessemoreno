import React from "react";
import Banner from "../components/banner";
import { Helmet } from "react-helmet";
import SiteMetadata from "../components/metadata";

const Home = () => {
    return (
        <>
            <SiteMetadata />
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
        </>
    );
};

export default Home;

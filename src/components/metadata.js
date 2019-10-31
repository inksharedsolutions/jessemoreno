import React from "react";
import { Helmet } from "react-helmet";

const SiteMetadata = () => {
    return (
        <Helmet titleTemplate="%s | Jesse Moreno" defaultTitle="Jesse Moreno">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro:300,400,700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

export default SiteMetadata;

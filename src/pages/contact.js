import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout/layout";
import Form from "../components/form";
import styles from "./css/contact.module.scss";

const Contact = () => {
    return (
        <Layout
            className={`${styles["contact-page"]} white-bg`}
            logo={`logo.png`}
        >
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="container">
                <Form />
            </div>
        </Layout>
    );
};

export default Contact;

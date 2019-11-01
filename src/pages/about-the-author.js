import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Helmet } from "react-helmet";
import Layout from "../layout/layout";
import styles from "./css/about-the-author.module.scss";

const About = () => {
    return (
        <Layout className={styles["about-the-author"]} logo={`logo-white.png`}>
            <Helmet>
                <title>About the Author</title>
            </Helmet>
            <div className={styles["about-jesse"]}>
                <h1>JESSE MORENO</h1>
                <p>
                    Writing has become a passion for me, even though I started
                    late in my life. I was inspired on 2013 by watching a Oscar
                    winning movie, "The Million Dollar Baby," and have not stop
                    thinking of events and scenarios from that point on and
                    discovered that it’s what I wanted to do, so I started and
                    here I am. The one thing I have learned is to never give up
                    and always be determined to get it done from start to
                    finish, no matter how tired you feel or how much time you
                    allow yourself to sit down and write.
                </p>
                <p>
                    I live along the west coast by San Luis Obispo, California,
                    but I’m originally from Visalia, California. I served in the
                    Air Force for four years during the Vietnam era and proud to
                    have done so, except for my follow friends who never came
                    back. "Salute to them." My writings are set to continue with
                    "Proud to Be Me Rosalinda" in a five-part series with other
                    stories waiting to be completed. I have done a few book
                    signing events with Barnes and Noble and will continue in
                    the future with dates already planned.
                </p>
                <p className="btn">
                    <AniLink cover to="/books">
                        EXPLORE HIS BOOKS
                    </AniLink>
                </p>
            </div>
        </Layout>
    );
};

export default About;

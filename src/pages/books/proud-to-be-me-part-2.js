import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../layout/layout";
import Post from "../../components/post";

const Book2 = () => {
    let disqusConfig = {
        url: `http://localhost:8000/books/proud-to-be-me-part-2`,
        // identifier: `/proud-to-be-me-part-2`,
        title: `Proud To Be Me: Rosalinda Part 2`,
    };
    return (
        <Layout className="white-bg" logo={`/jessemoreno/logo.png`}>
            <Helmet>
                <title>Proud To Be Me: Rosalinda Part 2</title>
            </Helmet>
            <div className="container" style={{ backgroundColor: "#fff" }}>
                <Post
                    disqusConfig={disqusConfig}
                    cover={`/jessemoreno/part2.png`}
                    title={["Proud To Be Me: Rosalinda", <br />, "Part II"]}
                >
                    <p>
                        Rosalinda’s passion for boxing has made her a star, both
                        in the United States and her country of Mexico. And
                        although her dream of being a professional boxer has
                        come true, her life remains filled with challenges and
                        obstacles while defending her world title.
                    </p>
                    <p>
                        Rosalinda is now faced with betrayals of the heart by
                        the one she loved the most, her boyfriend, but through
                        her trainer, she finds the strength and the
                        determination to continue her passion of boxing. She can
                        also take solace given the knowledge that her
                        archnemesis, Echo, is incarcerated for her crimes
                        against Rose and Rob.
                    </p>
                    <p>
                        In part two of Proud to Be Me: Rosalinda, our heroine
                        faces two challengers, one from the United States and
                        the other from her own country. Both challengers,
                        undefeated and wanting to strip her of her title, are
                        making statements to the media with words of hatred,
                        punishing Rose like no one has ever done to her.
                    </p>
                    <p>
                        Rosalinda continues her training and doesn’t let
                        anything stop her from getting better, but will she
                        remain the champion and keep her stardom for her country
                        and the United States?
                    </p>
                </Post>
            </div>
        </Layout>
    );
};

export default Book2;

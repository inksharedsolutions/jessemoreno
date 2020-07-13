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
        <Layout className="white-bg" logo={`/logo.png`}>
            <Helmet>
                <title>Proud To Be Me: Rosalinda Part 2</title>
            </Helmet>
            <div className="container" style={{ backgroundColor: "#fff" }}>
                <Post
                    disqusConfig={disqusConfig}
                    cover={`/part2.png`}
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
                    <p>
                        <strong
                            style={{
                                display: "inline-block",
                                marginBottom: 5,
                            }}
                        >
                            Buy now:
                        </strong>
                        <ul className="tags flex" style={{ marginTop: 0 }}>
                            <li>
                                <a
                                    href="https://www.amazon.com/Proud-Be-Me-Rosalinda-Part/dp/164345532X/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span
                                        style={{
                                            backgroundColor: "#1180e1",
                                            color: "#fff",
                                        }}
                                    >
                                        Amazon
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.barnesandnoble.com/w/proud-to-be-me-rosalinda-jesse-moreno/1137152740"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span
                                        style={{
                                            backgroundColor: "#1180e1",
                                            color: "#fff",
                                        }}
                                    >
                                        Barnes and Noble
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.stratton-press.com/books/proud-to-be-me-rosalinda-part-ii/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span
                                        style={{
                                            backgroundColor: "#1180e1",
                                            color: "#fff",
                                        }}
                                    >
                                        Stratton Press
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </p>
                </Post>
            </div>
        </Layout>
    );
};

export default Book2;

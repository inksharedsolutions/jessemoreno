import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./css/banner.module.scss";

const Banner = () => {
    return (
        <div className={`${styles.banner} layout`}>
            <Header logo={`logo-white.png`} />
            <div className={styles["banner-text"]}>
                <p className="heading no-margin">
                    <strong>
                        A{" "}
                        <a
                            className="company"
                            href="https://www.stratton-press.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Stratton Press
                        </a>{" "}
                        Publication
                    </strong>
                </p>
                <h1 className="no-margin">Proud To Be Me: Rosalinda</h1>
                <p className={`tags`}>
                    <span>
                        <small>Literature & Fiction</small>
                    </span>
                    <span>
                        <small>Action & Adventure</small>
                    </span>
                </p>
                <p className={`${styles.description} content`}>
                    A waitress who is determined not to let someone push her
                    around, so she stands her grounds and fights back. From that
                    point on, she pursues a passion that she didn’t know she had
                    in her as a boxer and follows that path to stardom. But with
                    her determination and training, she doesn’t let anything
                    stand in her way what her heart desired as a boxer.
                </p>
                <p className={`p-relative`}>
                    <a
                        // href="https://www.stratton-press.com/books/proud-to-be-me-rosalinda/"
                        href="https://www.amazon.com/dp/1643456180/ref=sr_1_1?keywords=9781643456188&qid=1563204703&s=gateway&sr=8-1"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BUY NOW
                    </a>
                    <AniLink
                        cover
                        bg="#020c15"
                        to="/about-the-author"
                        className="btn"
                    >
                        ABOUT THE AUTHOR
                    </AniLink>
                </p>
            </div>
            <div className={styles["book-list"]}>
                <p className="no-margin">
                    <strong className="margin-left">
                        Books by the same author:
                    </strong>
                </p>
                <div className="flex justify-content-center">
                    <div className={styles.book}>
                        <AniLink
                            cover
                            bg="#020c15"
                            to="/books/proud-to-be-me-part-2"
                            className={styles["book-link"]}
                        >
                            <img src="book-2.jpg" alt="" />
                        </AniLink>
                        <p style={{ width: 250 }}>
                            <small>
                                Rosalinda's passion for boxing has made her a
                                star, both in the United States and her country
                                of Mexico. And although her dream of being a
                                professional boxer has come true...
                            </small>
                        </p>
                    </div>
                    <div className={styles.book}>
                        <AniLink
                            cover
                            bg="#020c15"
                            to="/books/proud-to-be-me-part-3"
                            duration={1}
                            className={styles["book-link"]}
                        >
                            <img src="book-3.png" alt="" />
                        </AniLink>
                        <p style={{ width: 250 }}>
                            <small>
                                Rosalinda continued her dreams inspite of her adversities,
                                tragical fatal moments, and challengers who challenged her
                                for the title...
                            </small>
                        </p>
                    </div>
                    <div className={styles.book}>
                        <AniLink
                            cover
                            bg="#020c15"
                            to="/books/proud-to-be-me-part-4"
                            className={styles["book-link"]}
                        >
                            <img src="book-4.png" alt="" />
                        </AniLink>
                        <p style={{ width: 250 }}>
                            <small>
                                Rosalinda continues her journey with more obstacles and
                                adversities crossing her path. The most important day of
                                her career is forthcoming with the one who took the title
                                away from her...
                            </small>
                        </p>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Banner;

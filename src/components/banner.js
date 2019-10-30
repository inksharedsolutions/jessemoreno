import React from "react";
import { Link } from "gatsby";
import styles from "./css/banner.module.scss";

const Banner = () => {
    return (
        <div className={styles.banner}>
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
                <p className={styles.tags}>
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
                        href="https://www.stratton-press.com/books/proud-to-be-me-rosalinda/"
                        className="btn margin-right"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BUY NOW
                    </a>
                    <Link to="/about-the-author" className="btn margin-left">
                        ABOUT THE AUTHOR
                    </Link>
                </p>
            </div>
            <div className={styles["book-list"]}>
                <p className="no-margin">
                    <strong className="margin-left">
                        Books by the same author:
                    </strong>
                </p>
                <div className="flex">
                    <div className={`${styles.current} ${styles.book}`}>
                        <Link to="/books/proud-to-be-me-part-1" className={styles["book-link"]}><img src="book-1.jpg" alt="" /></Link>
                        <p style={{ width: 250 }}>
                            <small>
                                A beautiful Mexican girl, ventures out to Los
                                Angeles at the age of twenty-five, not knowing
                                what her future and career was going to entail.
                                After being in Los Angeles for a few months...
                            </small>
                        </p>
                    </div>
                    <div className={`${styles.current} ${styles.book}`}>
                        <Link to="/books/proud-to-be-me-part-2" className={styles["book-link"]}><img src="book-2.jpg" alt="" /></Link>
                        <p style={{ width: 250 }}>
                            <small>
                                Rosalinda's passion for boxing has made her a
                                star, both in the United States and her country
                                of Mexico. And although her dream of being a
                                professional boxer has come true...
                            </small>
                        </p>
                    </div>
                    <div className={`${styles.current} ${styles.book}`}>
                        <Link to="/books/coming-soon" className={styles["book-link"]}><img src="book-3.jpg" alt="" /></Link>
                        <p style={{ width: 250 }}>
                            <small>
                                Jesse Moreno's third book is under production.
                                Check this website regularly and be the first to
                                get the book once it's released!
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.overlay}></div>
        </div>
    );
};

export default Banner;

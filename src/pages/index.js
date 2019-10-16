import React from "react";
import Layout from "../layout/layout";
import styles from "./styles.module.css";

const Home = () => {
    return (
        <Layout>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <p>{/* <small>AUTHOR</small> */}</p>
                    <h1>Proud To Be Me: Rosalinda</h1>
                    <p className={styles.tags}>
                        <span>
                            <small>Literature & Fiction</small>
                        </span>
                        <span>
                            <small>Action & Adventure</small>
                        </span>
                    </p>
                    <p>
                        A waitress who is determined not to let someone push her
                        around, so she stands her grounds and fights back. From
                        that point on, she pursues a passion that she didn’t
                        know she had in her as a boxer and follows that path to
                        stardom. But with her determination and training, she
                        doesn’t let anything stand in her way what her heart
                        desired as a boxer.
                    </p>
                    <p>
                        <a href="/about-me" className={styles.btn}>
                            READ IT NOW
                        </a>
                    </p>
                </div>
                <div className={styles.bookList}>
                    <p className="text-white text-center">
                        <strong>Jesse Moreno's books:</strong>
                    </p>
                    <div className={`flex`}>
                        <div className={`${styles.book} ${styles.book1}`}></div>
                        <div className={`${styles.book} ${styles.book2}`}></div>
                        <div className={`${styles.book} ${styles.book3}`}></div>
                    </div>
                </div>
                <div className={styles.overlay}></div>
            </div>
        </Layout>
    );
};

export default Home;

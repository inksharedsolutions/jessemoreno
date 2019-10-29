import React, { useState, setState } from "react";
import { Link } from "gatsby";
import styles from "./css/header.module.scss";

const Header = () => {
    const [isActive, setIsActive] = useState("");

    const hamburgerHandler = () => {
        let className = isActive === "" ? "is-active" : "";
        setIsActive(className);
    }

    return (
        <header className={`${styles.header} ${styles[isActive]}`}>
            <nav className={styles.nav}>
                <button className={`${styles.hamburger} ${styles["hamburger--spin"]} ${styles[isActive]}`} type="button" onClick={hamburgerHandler}>
                    <span className={styles["hamburger-box"]}>
                        <span className={styles["hamburger-inner"]}></span>
                    </span>
                </button>
                <ul className={`${styles["menu-list"]}`}>
                    <li className={styles["menu-item"]}>
                        <Link to="/" activeClassName={styles.current}>HOME</Link>
                    </li>
                    <li className={styles["menu-item"]}>
                        <Link to="/about-the-author" activeClassName={styles.current}>ABOUT ME</Link>
                    </li>
                    <li className={styles["menu-item"]}>
                        <Link to="/books" activeClassName={styles.current}>BOOKS</Link>
                    </li>
                    <li className={styles["menu-item"]}>
                        <Link to="/contact" activeClassName={styles.current}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

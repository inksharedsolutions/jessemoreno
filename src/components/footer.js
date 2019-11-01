import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "./css/footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles["terms-privacy-links"]}>
            <ul className="flex">
                <li>
                    <AniLink cover bg="#020c15" to="/terms-and-conditions">
                        Terms and Conditions
                    </AniLink>
                </li>
                <li>
                    <AniLink cover bg="#020c15" to="/privacy-policy">
                        Privacy Policy
                    </AniLink>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;

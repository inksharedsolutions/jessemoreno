import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = props => {
    let [isActive, setIsActive] = useState(false);
    const hamburgerHandler = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header className={"header"}>
                <AniLink cover bg="#020c15" to="/">
                    <img className="logo" src={props.logo} alt="" />
                </AniLink>
                <button
                    className={`hamburger hamburger--squeeze ${
                        isActive === true ? "is-active" : ""
                    }`}
                    onClick={hamburgerHandler}
                    type="button"
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <nav className={`nav ${isActive === true ? "is-active" : ""}`}>
                    <ul className={"menu-list"}>
                        <li className={"menu-item"}>
                            <AniLink
                                cover
                                bg="#020c15"
                                to="/"
                                activeClassName={"current"}
                            >
                                HOME
                            </AniLink>
                        </li>
                        <li className={"menu-item"}>
                            <AniLink
                                cover
                                bg="#020c15"
                                to="/about-the-author"
                                activeClassName={"current"}
                            >
                                ABOUT THE AUTHOR
                            </AniLink>
                        </li>
                        <li className={"menu-item"}>
                            <AniLink
                                cover
                                bg="#020c15"
                                to="/books/proud-to-be-me-part-1"
                                activeClassName={"current"}
                                partiallyActive={true}
                            >
                                BOOKS
                            </AniLink>
                            <ul className="child-menu">
                                <li>
                                    <AniLink
                                        cover
                                        bg="#020c15"
                                        to="/books/proud-to-be-me-part-1"
                                        activeClassName={"current"}
                                    >
                                        Proud To Be Me: Rosalinda
                                    </AniLink>
                                </li>
                                <li>
                                    <AniLink
                                        cover
                                        bg="#020c15"
                                        to="/books/proud-to-be-me-part-2"
                                        activeClassName={"current"}
                                    >
                                        Proud To Be Me: Rosalinda Part II
                                    </AniLink>
                                </li>
                                <li>
                                    <AniLink 
                                        cover 
                                        bg="#020c15"
                                        to="/books/proud-to-be-me-part-3"
                                        activeClassName={"current"} >
                                        Proud To Be Me: Rosalinda Part III
                                    </AniLink>
                                </li>
                            </ul>
                        </li>
                        <li className={"menu-item"}>
                            <AniLink
                                cover
                                bg="#020c15"
                                to="/contact"
                                activeClassName={"current"}
                            >
                                CONTACT
                            </AniLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

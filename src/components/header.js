import React, { useState } from "react";
import { Link } from "gatsby";

const Header = props => {
    let [isActive, setIsActive] = useState(false);
    const hamburgerHandler = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header className={"header"}>
                <Link to="/">
                    <img className="logo" src={props.logo} alt="" />
                </Link>
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
                            <Link to="/" activeClassName={"current"}>
                                HOME
                            </Link>
                        </li>
                        <li className={"menu-item"}>
                            <Link
                                to="/about-the-author"
                                activeClassName={"current"}
                            >
                                ABOUT THE AUTHOR
                            </Link>
                        </li>
                        <li className={"menu-item"}>
                            <Link
                                to="/books/proud-to-be-me-part-1"
                                activeClassName={"current"}
                                partiallyActive={true}
                            >
                                BOOKS
                            </Link>
                            <ul className="child-menu">
                                <li>
                                    <Link
                                        to="/books/proud-to-be-me-part-1"
                                        activeClassName={"current"}
                                    >
                                        Proud To Be Me: Rosalinda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/books/proud-to-be-me-part-2"
                                        activeClassName={"current"}
                                    >
                                        Proud To Be Me: Rosalinda Part II
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">Coming Soon</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={"menu-item"}>
                            <Link to="/contact" activeClassName={"current"}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

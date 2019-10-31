import React from "react";
import styles from "./css/post.module.scss";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";

const Post = props => {
    console.log(props);
    return (
        <>
            <div className={`${styles["book-meta"]} flex`}>
                <div
                    className={styles["book-cover"]}
                    style={{ alignSelf: "center" }}
                >
                    <img src={props.cover} alt={props.disqusConfig.title} />
                </div>
                <div className={styles["book-details"]}>
                    <h1>{props.title}</h1>
                    {props.children}
                </div>
            </div>
            <Disqus config={props.disqusConfig} />
        </>
    );
};

export default Post;

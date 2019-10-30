import React from "react";
import Layout from "../../layout/layout";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const Contact = () => {
    let disqusConfig = {
        url: `http://localhost:8000/books/proud-to-be-me-part-1`,
        identifier: `/books/proud-to-be-me-part-1`,
        title: `Proud To Be Me: Rosalinda`,
    }
    return (
        <Layout>
            <p>This is a test.</p>
            <CommentCount config={disqusConfig} placeholder={'...'} />
            <Disqus config={disqusConfig} />
        </Layout>
    );
};

export default Contact;

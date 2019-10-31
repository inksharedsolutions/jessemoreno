import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../layout/layout";
import Post from "../../components/post";

const Book1 = () => {
    let disqusConfig = {
        url: `http://localhost:8000/books/proud-to-be-me-part-1`,
        title: `Proud To Be Me: Rosalinda`,
    };
    return (
        <Layout className="white-bg" logo={`/logo.png`}>
            <Helmet>
                <title>Proud To Be Me: Rosalinda</title>
            </Helmet>
            <div className="container" style={{ backgroundColor: "#fff" }}>
                <Post
                    disqusConfig={disqusConfig}
                    cover="/part1.jpg"
                    title="Proud To Be Me: Rosalinda"
                >
                    <p>Rosalinda,</p>
                    <p>
                        A beautiful Mexican girl, ventures out to Los Angeles at
                        the age of twenty-five, not knowing what her future and
                        career was going to entail. After being in Los Angeles
                        for a few months, her life takes an unexpected turn that
                        forces her to make a fast decision, after getting fired
                        from her job in a restaurant, working as a waitress.
                    </p>
                    <p>
                        She’s recommended to train as a boxer and follows that
                        path with her heart and becomes passionate with the
                        boxing world. Then, her career starts to blossom as a
                        professional boxer.
                    </p>

                    <p>
                        Along that path, she meets someone special and falls in
                        love until one evening, they’re involved in a shooting
                        that puts their lives at risk. They’re both sent to the
                        hospital, which later, she finds out that her love might
                        not live, as she fights for her life to stay alive.
                    </p>

                    <p>
                        She deals with the absence of her love and continues
                        what she loves doing: boxing. The adversities in her
                        path, did not slow her down nor kept her from becoming
                        what her heart desired for herself and her country.
                    </p>
                    <p>
                        She was proud to be,
                        <br />
                        <strong>
                            <em>"The Rose."</em>
                        </strong>
                    </p>
                </Post>
            </div>
        </Layout>
    );
};

export default Book1;

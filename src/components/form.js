import React from "react";
import styles from "./css/form.module.scss";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className={styles["flat-form"]}>
                <div className={styles["form-action"]}>
                    <h1>Contact</h1>
                    <p>
                        Hello! Are you having a good day? Anyway, if you have
                        any concerns or you just want to share something, please
                        feel free to drop me a line. I would love to hear
                        anything from you.
                    </p>
                    <form
                        onSubmit={this.submitForm}
                        action="https://formspree.io/xvopdpny"
                        method="POST"
                    >
                        <ul>
                            <li>
                            <input
                                    type="hidden"
                                    name="author"
                                    value="Jesse Moreno"
                                />
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Enter full name"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    name="message"
                                    placeholder="Enter message"
                                    required
                                ></textarea>
                            </li>
                        </ul>
                        {status === "SUCCESS" ? (
                            <p>
                                Thank you. We will get back to you as soon as
                                possible.
                            </p>
                        ) : (
                            <button className={styles.button}>Submit</button>
                        )}
                        {status === "ERROR" && (
                            <p>Ooops! There was an error.</p>
                        )}
                    </form>
                </div>
            </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

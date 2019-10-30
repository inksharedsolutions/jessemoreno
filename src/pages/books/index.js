import React from "react";
import { Redirect } from '@reach/router';

const Books = () => {
    return (
        <Redirect noThrow to="/books/proud-to-be-me-part-1" />
    );
};

export default Books;

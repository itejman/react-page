import React from 'react';
import "./index.css";

import { BrowserRouter, Router } from 'react-router-dom';

class Root extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <>
                    <Router path="/" />
                    <Router path="/articles" />
                    <Router path="/books" />
                    <Router path="/videos" />
                </>
            </BrowserRouter>
        )
    }
}

export default Root;
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import HomePage from './homepage';

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}; export default Pages;
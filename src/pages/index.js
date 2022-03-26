import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import HomePage from './homepage';
import LoginPage from './login';
import RegisterPage from './register';
import ServicesPage from './services';

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
                <Route exact path="/service" element={<ServicesPage />} />
            </Routes>
        </Router>
    );
}; export default Pages;
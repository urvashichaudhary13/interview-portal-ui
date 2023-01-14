import React from "react";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
    return (
        <Navbar className="navbar-color" variant="dark">
            <Navbar.Brand className="navbar-brand"><strong>FeedBack Portal</strong></Navbar.Brand>
        </Navbar>
    )
}
import React from "react";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

export const Header = () => {
    return (
        <Navbar className="navbar-color" variant="dark">
            <Navbar.Brand className="navbar-brand"><strong>Feedback Portal</strong></Navbar.Brand>
        </Navbar>
    )
}

export default Header;
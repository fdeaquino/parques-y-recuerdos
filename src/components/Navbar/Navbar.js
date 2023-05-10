import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-logo">Parques y Recuerdos</Link>
            <div className="navbar-links">
                <Link to="/california">California Parks</Link>
                <Link to="/colorado">Colorado Parks</Link>
                <Link to="/louisiana">Louisiana Parks</Link>
                <Link to="/new-mexico">New Mexico Parks</Link>
                <Link to="/new-york">New York Parks</Link>
                <Link to="/texas">Texas Parks</Link>
                <Link to="/utah">Utah Parks</Link>
            </div>
        </div>
    )
}

export default Navbar;

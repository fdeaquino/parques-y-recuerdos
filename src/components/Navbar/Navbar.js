import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container-fluid'>
                <Link to="/" className="navbar-logo">Parques y Recuerdos</Link>
                <button className={`navbar-toggler ${isOpen ? 'toggled' : ''}`} type='button' onClick={handleToggle}>
                    <svg className={`menu-icon ${isOpen ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 30">
                        <g fill="#55596" fill-rule="evenodd">
                            <path d="M.3619 2.7864c.404-.469 1.883-.469 2.288 0 .476.552.309 7.271.309 12.526 0 5.81.095 11.595-.274 11.98-.442.46-1.941.483-2.358 0-.38-.44-.324-6.124-.324-11.91 0-5.467-.032-12.143.359-12.596"></path>
                            <path d="M7.2867.3518c.404-.469 1.883-.469 2.288 0 .476.552.347 7.782.419 12.673.083 5.751.365 11.047-.092 11.799-.367.605-2.489.664-2.852.041-.365-.625-.339-6.15-.196-11.934.144-5.862.042-12.126.433-12.579"></path>
                            <path d="M16.4747 27.4113c-.404.469-1.883.469-2.288 0-.476-.552-.309-7.271-.309-12.526 0-5.81.038-11.706.274-11.98.417-.483 1.941-.483 2.358 0 .38.44.324 6.124.324 11.91 0 5.467.032 12.143-.359 12.596"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item m-2'>
                        <Link className='nav-link-active' aria-current='page' to="/california">California Parks</Link>
                    </li>
                    <li className='nav-item m-2'>
                        <Link className='nav-link-active' aria-current='page' to="/colorado">Colorado Parks</Link>
                    </li>
                    <li className='nav-item m-2'>
                        <Link className='nav-link-active' aria-current='page' to="/louisiana">Louisiana Parks</Link>
                    </li>
                    <li className='nav-item m-2'>
                        <Link className='nav-link-active' aria-current='page' to="/new-mexico">New Mexico Parks</Link>
                    </li>
                    <li className='nav-item m-2'>
                        <Link className='nav-link-active' aria-current='page' to="/new-york">New York Parks</Link>
                    </li>
                    <li className='nav-item m-2'>
                        <Link className='nav-link-active' aria-current='page' to="/texas">Texas Parks</Link>
                    </li>
                    <li className='nav-item m-2'>
                        <Link className='nav-link-active' aria-current='page' to="/utah">Utah Parks</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;

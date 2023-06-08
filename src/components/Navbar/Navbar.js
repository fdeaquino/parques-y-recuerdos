import React, { useState } from 'react';
// Import React router components for linking to different routes and useLocation to get current route location
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ setSelectedState }) => {
    // useStaet hook manages the open state of Navbar
    const [isOpen, setIsOpen] = useState(false);

    // useLocation hook gets the current path location
    const location = useLocation();

    // function to toggle Navbar open state
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // function to close the Navbar menu
    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav className="navbar">
            <div className='container-fluid'>
                {/* <Link to="/" className="navbar-logo">Parques y Recuerdos</Link> */}
                <div></div>
                {/* btn toggles the state of the nav bar to open/closed */}
                <button className={`navbar-toggler menu ${isOpen ? 'openmenu' : ''}`} type='button' onClick={handleToggle}>
                    <svg className={`menu-icon ${isOpen ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 30">
                        <g fill="#55596" fillRule="evenodd">
                            <path d="M.3619 2.7864c.404-.469 1.883-.469 2.288 0 .476.552.309 7.271.309 12.526 0 5.81.095 11.595-.274 11.98-.442.46-1.941.483-2.358 0-.38-.44-.324-6.124-.324-11.91 0-5.467-.032-12.143.359-12.596"></path>
                            <path d="M7.2867.3518c.404-.469 1.883-.469 2.288 0 .476.552.347 7.782.419 12.673.083 5.751.365 11.047-.092 11.799-.367.605-2.489.664-2.852.041-.365-.625-.339-6.15-.196-11.934.144-5.862.042-12.126.433-12.579"></path>
                            <path d="M16.4747 27.4113c-.404.469-1.883.469-2.288 0-.476-.552-.309-7.271-.309-12.526 0-5.81.038-11.706.274-11.98.417-.483 1.941-.483 2.358 0 .38.44.324 6.124.324 11.91 0 5.467.032 12.143-.359 12.596"></path>
                        </g>
                    </svg>
                </button>
            </div>

            {/* overlay menu becomes visible only when isOpen is true */}
            <div className={`overlay-menu ${isOpen ? 'overlay-active' : ''}`}>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id='navbarSupportedContent'>
                    <div className='home-link'>
                        <Link className='nav-link-active home-link-styles' aria-current='page' to="/" onClick={closeMenu}>HOME</Link>
                    </div>

                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${isOpen ? 'openmenu' : ''}`}>
                        {/* each li links to a different page on the side;
                        the "active" class is dynamically assigned based on the current location/pathname;
                        When each link is clicked, it updates the selected state and closes the menu */}
                        <li className='nav-item state-margins'>
                            <Link
                                className={`nav-link-active ${location.pathname === '/arizona' ? 'active' : ''}`}
                                aria-current='page'
                                to="/arizona"
                                onClick={() => { setSelectedState('arizona'); closeMenu(); }}
                            >
                                <img
                                    width="50"
                                    height="50"
                                    src={`https://img.icons8.com/ios-filled/50/${location.pathname === '/arizona' ? 'f2f342' : 'FFFFFF'}/arizona.png`}
                                    alt="arizona" />
                            </Link>
                        </li>

                        <li className='nav-item state-margins'>
                            <Link
                                className={`nav-link-active ${location.pathname === '/california' ? 'active' : ''}`}
                                aria-current='page'
                                to="/california"
                                onClick={() => { setSelectedState('california'); closeMenu(); }}
                            >
                                <img
                                    width="50"
                                    height="50"
                                    src={`https://img.icons8.com/ios-filled/50/${location.pathname === '/california' ? 'f2f342' : 'FFFFFF'}/california.png`}
                                    alt="california" />
                            </Link>
                        </li>
                        <li className='nav-item state-margins'>
                            <Link
                                className='nav-link-active'
                                aria-current='page'
                                to="/colorado"
                                onClick={() => { setSelectedState('colorado'); closeMenu(); }}>
                                <img
                                    width="50"
                                    height="50"
                                    src={`https://img.icons8.com/ios-filled/50/${location.pathname === '/colorado' ? 'f2f342' : 'FFFFFF'}/colorado.png`}
                                    alt="colorado" />
                            </Link>
                        </li>
                        <li className='nav-item state-margins'>
                            <Link
                                className='nav-link-active'
                                aria-current='page'
                                to="/louisiana"
                                onClick={() => { setSelectedState('louisiana'); closeMenu(); }}>
                                <img
                                    width="50"
                                    height="50"
                                    src={`https://img.icons8.com/ios-filled/50/${location.pathname === '/louisiana' ? 'f2f342' : 'FFFFFF'}/louisiana.png`}
                                    alt="louisiana" />
                            </Link>
                        </li>
                        <li className='nav-item state-margins'>
                            <Link
                                className='nav-link-active'
                                aria-current='page'
                                to="/newmexico"
                                onClick={() => { setSelectedState('newmexico'); closeMenu(); }}>
                                <img
                                    width="50"
                                    height="50"
                                    src={`https://img.icons8.com/ios-filled/50/${location.pathname === '/newmexico' ? 'f2f342' : 'FFFFFF'}/new-mexico.png`}
                                    alt="new mexico" />
                            </Link>
                        </li>
                        <li className='nav-item state-margins'>
                            <Link
                                className='nav-link-active'
                                aria-current='page'
                                to="/newyork"
                                onClick={() => { setSelectedState('newyork'); closeMenu(); }}>
                                <img
                                    width="50"
                                    height="50"
                                    src={`https://img.icons8.com/ios-filled/50/${location.pathname === '/newyork' ? 'f2f342' : 'FFFFFF'}/new-york.png`}
                                    alt="new york" />
                            </Link>
                        </li>
                        <li className='nav-item state-margins'>
                            <Link
                                className='nav-link-active'
                                aria-current='page'
                                to="/texas"
                                onClick={() => { setSelectedState('texas'); closeMenu(); }}>
                                <img
                                    width="50"
                                    height="50"
                                    src={`https://img.icons8.com/ios-filled/50/${location.pathname === '/texas' ? 'f2f342' : 'FFFFFF'}/texas.png`}
                                    alt="texas" />
                            </Link>
                        </li>
                        <li className='nav-item state-margins'>
                            <Link
                                className='nav-link-active'
                                aria-current='page'
                                to="/utah"
                                onClick={() => { setSelectedState('utah'); closeMenu(); }}>
                                <img
                                    width="50"
                                    height="50"
                                    src={`https://img.icons8.com/ios-filled/50/${location.pathname === '/utah' ? 'f2f342' : 'FFFFFF'}/utah.png`}
                                    alt="utah" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

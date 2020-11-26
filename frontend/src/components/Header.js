import React from 'react';
import {Link} from "react-router-dom";


const Header = ({username, isAuthenticated, onLogoutClick}) => (
    <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-primary">
        <span>
            <Link to={"/workplace/"} className='navbar-brand'>
                Match Seeker
            </Link>
        </span>
        <span id='account-panel'>
                    <span id='username-wrapper' style={isAuthenticated ? {} : {display:'none'}}>
                        {username}
                    </span>
                    <span id='logout-button-wrapper' style={isAuthenticated ? {} : {display:'none'}}>
                         <button className='btn btn-secondary btn-sm'
                                 onClick={onLogoutClick}>
                             Logout
                         </button>
                    </span>
                    <span id='entry-link-wrapper' style={isAuthenticated ? {display:'none'} : {}}>
                        <Link to={"/entry/"} id='entry-link'>Login / Register</Link>
                    </span>
        </span>
    </nav>
);

export default Header;
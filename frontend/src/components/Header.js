import React, { Component } from 'react';
import {Switch, Route, Link} from "react-router-dom";

class Header extends Component{
    render(){
        return (
            <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span>
                    <Link to={"/workplace/"} className='navbar-brand'>
                        Match Seeker
                    </Link>
                </span>
                <span id='account-panel'>
                    <span id='entry-link-wrapper'>
                        <Link to={"/entry/"} id='entry-link'>Login / Register</Link>
                    </span>
                    <span id='username-wrapper'>
                        username
                    </span>
                    <span id='logout-button-wrapper'>
                        <button onClick={this.props.handleLogout}
                                className='btn btn-secondary btn-sm'>
                            Logout
                        </button>
                    </span>
                </span>
            </nav>
        );
    }

}

export default Header;
import React from 'react';
import {connect} from "react-redux"
import Header from "./Header";
import {setIsAuthenticated} from "../store/auth/actions";


const mapStateToProps = state => {
    return {
        username: state.auth.approvedUsername,
        isAuthenticated: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogoutClick: () => {dispatch(setIsAuthenticated(false))},
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;

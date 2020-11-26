import React from 'react';
import axiosInstance from "../axiosApi";
import Entry from "./Entry";
import {connect} from "react-redux";
import {setIsAuthenticated, setLoginPassword, setLoginUsername} from "../store/auth/actions";
import {setRegistrationEmail, setRegistrationPassword, setRegistrationUsername} from "../store/registration/actions";

// const handleLoginSubmit = async (event, props, dispatch) => {
//     event.preventDefault();
//     try {
//         const response = await axiosInstance.post('/token/obtain/', {
//             username: props.registrationUsername,
//             password: props.registrationPassword
//         });
//         axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
//         localStorage.setItem('access_token', response.data.access);
//         localStorage.setItem('refresh_token', response.data.refresh);
//         dispatch(setIsAuthenticated(true));
//         return response;
//     } catch (error) {
//         dispatch(setIsAuthenticated(false));
//         throw error;
//     }
// };
//
// const handleRegisterSubmit = async (event, props, dispatch) => {
//     event.preventDefault();
//     try {
//         const response = await axiosInstance.post('/user/create/', {
//             username: props.registrationUsername,
//             email: props.registrationEmail,
//             password: props.registrationPassword
//         });
//         return response;
//     } catch (error) {
//         console.log(error.stack);
//     }
// };

const mapStateToProps = (state, ownProps) => {
    return {
        loginUsername: state.auth.loginUsername,
        loginPassword: state.auth.loginPassword,
        registrationUsername: state.registration.registrationUsername,
        registrationEmail: state.registration.registrationEmail,
        registrationPassword: state.registration.registrationPassword,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRegistrationSubmit: (event) => { event.preventDefault(); },
        onLoginSubmit: (event) => { event.preventDefault(); },
        onLoginUsernameChange: (event) => { dispatch(setLoginUsername(event.target.value)) },
        onLoginPasswordChange: (event) => { dispatch(setLoginPassword(event.target.value)) },
        onRegistrationPasswordChange: (event) => { dispatch(setRegistrationPassword(event.target.value)) },
        onRegistrationEmailChange: (event) => { dispatch(setRegistrationEmail(event.target.value)) },
        onRegistrationUsernameChange: (event) => { dispatch(setRegistrationUsername(event.target.value)) },
    };
};

const EntryContainer = connect(mapStateToProps, mapDispatchToProps)(Entry);

export default EntryContainer;

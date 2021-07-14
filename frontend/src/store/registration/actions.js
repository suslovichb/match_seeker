import axiosInstance from "../../axiosApi";
// import axios from 'axios'
export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT';
export const REGISTRATION_CHANGE_PASSWORD_TEXT = 'REGISTRATION_CHANGE_PASSWORD_TEXT';
export const REGISTRATION_CHANGE_USERNAME_TEXT = 'REGISTRATION_CHANGE_USERNAME_TEXT';

export const setRegistrationUsername = username => ({
    type: REGISTRATION_CHANGE_USERNAME_TEXT,
    payload: username
});

export const setRegistrationPassword = password => ({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const setRegistrationEmail = email => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email
});

export const handleRegistrationSubmit = () => {
    return (dispatch, getState) => {
        const state = getState().registration;
        axiosInstance.post(
            '/users/',
            {
                username: state.registrationUsername,
                email: state.registrationEmail,
                password: state.registrationPassword
            }
        )
            .then(response => {
                console.log('new user registered')
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }
};
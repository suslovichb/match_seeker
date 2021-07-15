import axiosInstance from "../../axiosApi";
import jwt_decode from "jwt-decode";

export const AUTH_CHANGE_USERNAME_TEXT = 'AUTH_CHANGE_USERNAME_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';
export const AUTH_REMOVE_USERNAME_TEXT = 'AUTH_REMOVE_USERNAME_TEXT';
export const AUTH_REMOVE_PASSWORD_TEXT= 'AUTH_REMOVE_PASSWORD_TEXT';
export const AUTH_SET_IS_AUTHENTICATED= 'AUTH_SET_IS_AUTHENTICATED';
export const AUTH_CHANGE_APPROVED_USERNAME_TEXT= 'AUTH_CHANGE_APPROVED_USERNAME_TEXT';

export const setLoginUsername = username => ({
    type: AUTH_CHANGE_USERNAME_TEXT,
    payload: username
});

export const setLoginPassword = password => ({
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const setIsAuthenticated = status => ({
    type: AUTH_SET_IS_AUTHENTICATED,
    payload: status
});

export const removeLoginUsername = () => ({
    type: AUTH_REMOVE_USERNAME_TEXT,
});

export const removeLoginPassword = () => ({
    type: AUTH_REMOVE_PASSWORD_TEXT,
});

export const setApprovedUsername = username => ({
    type: AUTH_CHANGE_APPROVED_USERNAME_TEXT,
    payload: username
});

export const handleLoginSubmit = () => {
    return (dispatch, getState) => {
        const state = getState().auth;
        axiosInstance.post(
                '/token/obtain/',
                {
                    username: state.loginUsername,
                    password: state.loginPassword
                }
            )
            .then(response => {
                const jwt_decoded = jwt_decode(response.data.access);
                axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                localStorage.setItem('user_id', jwt_decoded['user_id']);
                localStorage.setItem('username', jwt_decoded['username']);
                dispatch(setApprovedUsername(jwt_decoded['username']));
                dispatch(setIsAuthenticated(true));
                return response;
            })
            .catch(error => {
                dispatch(setIsAuthenticated(false));
                console.log(error);
            });
    }
};

export const handleLogout = () => {
    return (dispatch, getState) => {
        axiosInstance.post(
            '/blacklist/',
            {'refresh_token': localStorage.getItem('refresh_token')}
        )
            .then(response => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user_id');
                localStorage.removeItem('username');
                axiosInstance.defaults.headers['Authorization'] = null;
                dispatch(setIsAuthenticated(false));
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    }
};

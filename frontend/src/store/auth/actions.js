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

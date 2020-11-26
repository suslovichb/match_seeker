import {
    AUTH_CHANGE_APPROVED_USERNAME_TEXT,
    AUTH_CHANGE_PASSWORD_TEXT,
    AUTH_CHANGE_USERNAME_TEXT,
    AUTH_REMOVE_PASSWORD_TEXT,
    AUTH_REMOVE_USERNAME_TEXT,
    AUTH_SET_IS_AUTHENTICATED
} from "./actions";


const initialState = {
    loginUsername: '',
    loginPassword: '',
    isAuthenticated: false,
    approvedUsername: ''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_USERNAME_TEXT:
            return {...state, loginUsername: action.payload};
        case AUTH_CHANGE_PASSWORD_TEXT:
            return {...state, loginPassword: action.payload};
        case AUTH_SET_IS_AUTHENTICATED:
            return {...state, isAuthenticated: action.payload};
        case AUTH_REMOVE_USERNAME_TEXT:
            return {...state, loginUsername: ''};
        case AUTH_REMOVE_PASSWORD_TEXT:
            return {...state, loginPassword: ''};
        case AUTH_CHANGE_APPROVED_USERNAME_TEXT:
            return {...state, approvedUsername: action.payload};
    }

    return state;
};

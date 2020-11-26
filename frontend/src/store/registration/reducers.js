import {
    REGISTRATION_CHANGE_EMAIL_TEXT,
    REGISTRATION_CHANGE_PASSWORD_TEXT,
    REGISTRATION_CHANGE_USERNAME_TEXT
} from "./actions";


const initialState = {
    registrationUsername: '',
    registrationPassword: '',
    registrationEmail: ''
};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_USERNAME_TEXT:
            return {
                ...state,
                registrationUsername: action.payload
            };
        case REGISTRATION_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                registrationPassword: action.payload
            };
        case REGISTRATION_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                registrationEmail: action.payload
            };
    }

    return state;
};

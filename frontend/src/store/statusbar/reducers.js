import {
    STATUSBAR_SET_TEXT,
    STATUSBAR_HIDE,
    STATUSBAR_SHOW
} from "./actions";


const initialState = {
    statusbarText: '',
    statusbarIsVisible: false
};

export const statusbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSBAR_SET_TEXT:
            return {...state, statusbarText: action.payload};
        case STATUSBAR_HIDE:
            return {...state, statusbarIsVisible: false};
        case STATUSBAR_SHOW:
            return {...state, statusbarIsVisible: true};
    }

    return state;
};

import {
    LOOKUP_DOC_SET_DATA
} from "./actions";


const initialState = {
    data: {},
    meta: {}
};

export const lookupDocReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOOKUP_DOC_SET_DATA:
            return {...state, data: action.payload};
    }

    return state;
};

import {
    INITIAL_DOC_SET_DATA
} from "./actions";


const initialState = {
    data: null,
    meta: {}
};

export const initialDocReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_DOC_SET_DATA:
            return {...state, data: action.payload};
    }

    return state;
};

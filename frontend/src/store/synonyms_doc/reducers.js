import {
    SYNONYMS_DOC_SET_DATA
} from "./actions";


const initialState = {
    data: {},
    meta: {}
};

export const synonymsDocReducer = (state = initialState, action) => {
    switch (action.type) {
        case SYNONYMS_DOC_SET_DATA:
            return {...state, data: action.payload};
    }

    return state;
};

import {
    RESULTS_TABLE_SET_DATA
} from "./actions";


const initialState = {
    data: {},
    meta: {}
};

export const resultsTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESULTS_TABLE_SET_DATA:
            return {...state, data: action.payload};
    }

    return state;
};

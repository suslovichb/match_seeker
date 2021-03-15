import {
    SETTINGS_SET_LOOKUP_DOC_ID,
    SETTINGS_SET_LOOKUP_DOC_EMAIL,
    SETTINGS_SET_LOOKUP_DOC_KEY,
    SETTINGS_SET_LOOKUP_DOC_SHEET_ID,
    SETTINGS_SET_LOOKUP_DOC_COLUMN,
    SETTINGS_SET_LOOKUP_DOC_IS_LOADED,
    SETTINGS_SET_LOOKUP_ARRAY_IS_LOADED,
    SETTINGS_SET_SYNONYMS_DOC_ID,
    SETTINGS_SET_SYNONYMS_DOC_EMAIL,
    SETTINGS_SET_SYNONYMS_DOC_KEY,
    SETTINGS_SET_SYNONYMS_DOC_SHEET_ID,
    SETTINGS_SET_SYNONYMS_DOC_COLUMN,
    SETTINGS_SET_SYNONYMS_DOC_IS_LOADED,
    SETTINGS_SET_SYNONYMS_ARRAY_IS_LOADED,
    SETTINGS_SET_INITIAL_DOC_SHEET_NAME,
    SETTINGS_SET_INITIAL_DOC_COLUMN,
    SETTINGS_SET_INITIAL_DOC_IS_LOADED,
    SETTINGS_SET_INITIAL_ARRAY_IS_LOADED,
} from "./actions";


const initialState = {
    lookupDocId: '',
    lookupDocSheetId: '',
    lookupDocColumn: '',
    lookupDocEmail: '',
    lookupDocKey: '',
    lookupDocIsLoaded: false,
    lookupArrayIsLoaded: false,
    synonymsDocId: '',
    synonymsDocSheetId: '',
    synonymsDocColumn: '',
    synonymsDocEmail: '',
    synonymsDocKey: '',
    synonymsDocIsLoaded: false,
    synonymsArrayIsLoaded: false,
    initialDocColumn: '',
    initialDocSheetName: '',
    initialDocIsLoaded: false,
    initialArrayIsLoaded: false,
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETTINGS_SET_LOOKUP_DOC_ID:
            return {...state, lookupDocId: action.payload};
        case SETTINGS_SET_LOOKUP_DOC_EMAIL:
            return {...state, lookupDocEmail: action.payload};
        case SETTINGS_SET_LOOKUP_DOC_KEY:
            return {...state, lookupDocKey: action.payload};
        case SETTINGS_SET_LOOKUP_DOC_SHEET_ID:
            return {...state, lookupDocSheetId: action.payload};
        case SETTINGS_SET_LOOKUP_DOC_COLUMN:
            return {...state, lookupDocColumn: action.payload};
        case SETTINGS_SET_LOOKUP_DOC_IS_LOADED:
            return {...state, lookupDocIsLoaded: action.payload};
        case SETTINGS_SET_LOOKUP_ARRAY_IS_LOADED:
            return {...state, lookupArrayIsLoaded: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_ID:
            return {...state, synonymsDocId: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_EMAIL:
            return {...state, synonymsDocEmail: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_KEY:
            return {...state, synonymsDocKey: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_SHEET_ID:
            return {...state, synonymsDocSheetId: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_COLUMN:
            return {...state, synonymsDocColumn: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_IS_LOADED:
            return {...state, synonymsDocIsLoaded: action.payload};
        case SETTINGS_SET_SYNONYMS_ARRAY_IS_LOADED:
            return {...state, lookupArrayIsLoaded: action.payload};
        case SETTINGS_SET_INITIAL_DOC_SHEET_NAME:
            return {...state, initialDocSheetName: action.payload};
        case SETTINGS_SET_INITIAL_DOC_COLUMN:
            return {...state, initialDocColumn: action.payload};
        case SETTINGS_SET_INITIAL_DOC_IS_LOADED:
            return {...state, initialDocIsLoaded: action.payload};
        case SETTINGS_SET_INITIAL_ARRAY_IS_LOADED:
            return {...state, initialArrayIsLoaded: action.payload};
    }

    return state;
};

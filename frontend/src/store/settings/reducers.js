import {
    SETTINGS_SET_LOOKUP_DOC_ID,
    SETTINGS_SET_LOOKUP_DOC_EMAIL,
    SETTINGS_SET_LOOKUP_DOC_KEY,
    SETTINGS_SET_LOOKUP_DOC_SHEET_ID,
    SETTINGS_SET_LOOKUP_DOC_IS_LOADED,
    SETTINGS_SET_SYNONYMS_DOC_ID,
    SETTINGS_SET_SYNONYMS_DOC_EMAIL,
    SETTINGS_SET_SYNONYMS_DOC_KEY,
    SETTINGS_SET_SYNONYMS_DOC_SHEET_ID,
    SETTINGS_SET_SYNONYMS_DOC_IS_LOADED,
} from "./actions";


const initialState = {
    lookupDocId: '',
    lookupDocSheetId: '',
    lookupDocEmail: '',
    lookupDocKey: '',
    lookupDocIsLoaded: false,
    synonymsDocId: '',
    synonymsDocSheetId: '',
    synonymsDocEmail: '',
    synonymsDocKey: '',
    synonymsDocIsLoaded: false,
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
        case SETTINGS_SET_LOOKUP_DOC_IS_LOADED:
            return {...state, lookupDocIsLoaded: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_ID:
            return {...state, synonymsDocId: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_EMAIL:
            return {...state, synonymsDocEmail: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_KEY:
            return {...state, synonymsDocKey: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_SHEET_ID:
            return {...state, synonymsDocSheetId: action.payload};
        case SETTINGS_SET_SYNONYMS_DOC_IS_LOADED:
            return {...state, synonymsDocIsLoaded: action.payload};
    }

    return state;
};

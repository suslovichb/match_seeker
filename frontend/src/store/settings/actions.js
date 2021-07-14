import {hideStatusbar, setStatusbarText, showStatusbar} from "../statusbar/actions";
import axiosInstance from "../../axiosApi";

export const SETTINGS_SET_LOOKUP_DOC_ID = 'SETTINGS_SET_LOOKUP_DOC_ID';
export const SETTINGS_SET_LOOKUP_DOC_SHEET_ID = 'SETTINGS_SET_LOOKUP_DOC_SHEET_ID';
export const SETTINGS_SET_LOOKUP_DOC_COLUMN = 'SETTINGS_SET_LOOKUP_DOC_COLUMN';
export const SETTINGS_SET_LOOKUP_DOC_EMAIL = 'SETTINGS_SET_LOOKUP_DOC_EMAIL';
export const SETTINGS_SET_LOOKUP_DOC_KEY = 'SETTINGS_SET_LOOKUP_DOC_KEY';
export const SETTINGS_SET_LOOKUP_DOC_IS_LOADED = 'SETTINGS_SET_LOOKUP_DOC_IS_LOADED';
export const SETTINGS_SET_LOOKUP_ARRAY_IS_LOADED = 'SETTINGS_SET_LOOKUP_ARRAY_IS_LOADED';

export const SETTINGS_SET_SYNONYMS_DOC_ID = 'SETTINGS_SET_SYNONYMS_DOC_ID';
export const SETTINGS_SET_SYNONYMS_DOC_SHEET_ID = 'SETTINGS_SET_SYNONYMS_DOC_SHEET_ID';
export const SETTINGS_SET_SYNONYMS_DOC_COLUMN = 'SETTINGS_SET_SYNONYMS_DOC_COLUMN';
export const SETTINGS_SET_SYNONYMS_DOC_EMAIL = 'SETTINGS_SET_SYNONYMS_DOC_EMAIL';
export const SETTINGS_SET_SYNONYMS_DOC_KEY = 'SETTINGS_SET_SYNONYMS_DOC_KEY';
export const SETTINGS_SET_SYNONYMS_DOC_IS_LOADED = 'SETTINGS_SET_SYNONYMS_DOC_IS_LOADED';
export const SETTINGS_SET_SYNONYMS_ARRAY_IS_LOADED = 'SETTINGS_SET_SYNONYMS_ARRAY_IS_LOADED';
export const SETTINGS_SET_SYNONYMS_DICT_IS_LOADED = 'SETTINGS_SET_SYNONYMS_DICT_IS_LOADED';

export const SETTINGS_SET_INITIAL_DOC_SHEET_NAME = 'SETTINGS_SET_INITIAL_DOC_SHEET_NAME';
export const SETTINGS_SET_INITIAL_DOC_COLUMN = 'SETTINGS_SET_INITIAL_DOC_COLUMN';
export const SETTINGS_SET_INITIAL_DOC_IS_LOADED = 'SETTINGS_SET_INITIAL_DOC_IS_LOADED';
export const SETTINGS_SET_INITIAL_ARRAY_IS_LOADED = 'SETTINGS_SET_INITIAL_ARRAY_IS_LOADED';

export const setLookupDocId = text => ({
    type: SETTINGS_SET_LOOKUP_DOC_ID,
    payload: text
});

export const setLookupDocSheetId = text => ({
    type: SETTINGS_SET_LOOKUP_DOC_SHEET_ID,
    payload: text
});

export const setLookupDocColumn = text => ({
    type: SETTINGS_SET_LOOKUP_DOC_COLUMN,
    payload: text
});

export const setLookupDocEmail = text => ({
    type: SETTINGS_SET_LOOKUP_DOC_EMAIL,
    payload: text
});

export const setLookupDocKey = text => ({
    type: SETTINGS_SET_LOOKUP_DOC_KEY,
    payload: text
});

export const setLookupDocIsLoaded = isLoaded => ({
    type: SETTINGS_SET_LOOKUP_DOC_IS_LOADED,
    payload: isLoaded
});

export const setLookupArrayIsLoaded = isLoaded => ({
    type: SETTINGS_SET_LOOKUP_ARRAY_IS_LOADED,
    payload: isLoaded
});

export const setSynonymsDocId = text => ({
    type: SETTINGS_SET_SYNONYMS_DOC_ID,
    payload: text
});

export const setSynonymsDocSheetId = text => ({
    type: SETTINGS_SET_SYNONYMS_DOC_SHEET_ID,
    payload: text
});

export const setSynonymsDocColumn = text => ({
    type: SETTINGS_SET_SYNONYMS_DOC_COLUMN,
    payload: text
});

export const setSynonymsDocEmail = text => ({
    type: SETTINGS_SET_SYNONYMS_DOC_EMAIL,
    payload: text
});

export const setSynonymsDocKey = text => ({
    type: SETTINGS_SET_SYNONYMS_DOC_KEY,
    payload: text
});

export const setSynonymsDocIsLoaded = isLoaded => ({
    type: SETTINGS_SET_SYNONYMS_DOC_IS_LOADED,
    payload: isLoaded
});

export const setSynonymsArrayIsLoaded = isLoaded => ({
    type: SETTINGS_SET_SYNONYMS_ARRAY_IS_LOADED,
    payload: isLoaded
});

export const setSynonymsDictIsLoaded = isLoaded => ({
    type: SETTINGS_SET_SYNONYMS_DICT_IS_LOADED,
    payload: isLoaded
});

export const setInitialDocSheetName = text => ({
    type: SETTINGS_SET_INITIAL_DOC_SHEET_NAME,
    payload: text
});

export const setInitialDocColumn = text => ({
    type: SETTINGS_SET_INITIAL_DOC_COLUMN,
    payload: text
});

export const setInitialDocIsLoaded = isLoaded => ({
    type: SETTINGS_SET_INITIAL_DOC_IS_LOADED,
    payload: isLoaded
});

export const setInitialArrayIsLoaded = isLoaded => ({
    type: SETTINGS_SET_INITIAL_ARRAY_IS_LOADED,
    payload: isLoaded
});

// export const setSettings = settings => {
//     return dispatch => {
//         dispatch(setLookupDocId(settings['search_google_spreadsheet_id']));
//         dispatch(setLookupDocEmail(settings['search_google_spreadsheet_email']));
//         dispatch(setLookupDocKey(settings['search_google_spreadsheet_key']));
//         dispatch(setLookupDocSheetId(settings['search_google_spreadsheet_sheet_id']));
//         dispatch(setLookupDocColumn(settings['search_google_spreadsheet_column']));
//         dispatch(setSynonymsDocId(settings['synonyms_google_spreadsheet_id']));
//         dispatch(setSynonymsDocEmail(settings['synonyms_google_spreadsheet_email']));
//         dispatch(setSynonymsDocKey(settings['synonyms_google_spreadsheet_key']));
//         dispatch(setSynonymsDocSheetId(settings['synonyms_google_spreadsheet_sheet_id']));
//         dispatch(setSynonymsDocColumn(settings['synonyms_google_spreadsheet_column']));
//     }
// };


export const saveSettings = settings => {
    return (dispatch, getState) => {
        // dispatch(setStatusbarText('saving'));
        // dispatch(showStatusbar());
        const userId = localStorage.getItem('user_id');
        const state = getState().settings;
        axiosInstance.put(
            `/users/${userId}/`,
            {
                "search_google_spreadsheet_id": state.lookupDocId,
                "search_google_spreadsheet_email": state.lookupDocEmail,
                "search_google_spreadsheet_key": state.lookupDocKey,
                "search_google_spreadsheet_sheet_id": state.lookupDocSheetId,
                "search_google_spreadsheet_column": state.lookupDocColumn,
                "synonyms_google_spreadsheet_id": state.synonymsDocId,
                "synonyms_google_spreadsheet_email": state.synonymsDocEmail,
                "synonyms_google_spreadsheet_key": state.synonymsDocKey,
                "synonyms_google_spreadsheet_sheet_id": state.synonymsDocSheetId,
                "synonyms_google_spreadsheet_column": state.synonymsDocColumn,
            }
        )
            .then(response => {console.log('saved')})
            .catch(error => {console.log(error)});
    };
};

// export const loadSettings = () => {
//     return dispatch => {
//         dispatch(setStatusbarText('loading'));
//         dispatch(showStatusbar());
//         axiosInstance.get();
//     };
// };

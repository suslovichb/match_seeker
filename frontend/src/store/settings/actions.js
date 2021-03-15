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

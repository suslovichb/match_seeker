export const SETTINGS_SET_LOOKUP_DOC_ID = 'SETTINGS_SET_LOOKUP_DOC_ID';
export const SETTINGS_SET_LOOKUP_DOC_SHEET_ID = 'SETTINGS_SET_LOOKUP_DOC_SHEET_ID';
export const SETTINGS_SET_LOOKUP_DOC_EMAIL = 'SETTINGS_SET_LOOKUP_DOC_EMAIL';
export const SETTINGS_SET_LOOKUP_DOC_KEY = 'SETTINGS_SET_LOOKUP_DOC_KEY';
export const SETTINGS_SET_LOOKUP_DOC_IS_LOADED = 'SETTINGS_SET_LOOKUP_DOC_IS_LOADED';

export const SETTINGS_SET_SYNONYMS_DOC_ID = 'SETTINGS_SET_SYNONYMS_DOC_ID';
export const SETTINGS_SET_SYNONYMS_DOC_SHEET_ID = 'SETTINGS_SET_SYNONYMS_DOC_SHEET_ID';
export const SETTINGS_SET_SYNONYMS_DOC_EMAIL = 'SETTINGS_SET_SYNONYMS_DOC_EMAIL';
export const SETTINGS_SET_SYNONYMS_DOC_KEY = 'SETTINGS_SET_SYNONYMS_DOC_KEY';
export const SETTINGS_SET_SYNONYMS_DOC_IS_LOADED = 'SETTINGS_SET_SYNONYMS_DOC_IS_LOADED';

export const setLookupDocId = text => ({
    type: SETTINGS_SET_LOOKUP_DOC_ID,
    payload: text
});

export const setLookupDocSheetId = text => ({
    type: SETTINGS_SET_LOOKUP_DOC_SHEET_ID,
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

export const setSynonymsDocId = text => ({
    type: SETTINGS_SET_SYNONYMS_DOC_ID,
    payload: text
});

export const setSynonymsDocSheetId = text => ({
    type: SETTINGS_SET_SYNONYMS_DOC_SHEET_ID,
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

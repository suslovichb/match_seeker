import React from 'react';
import {connect} from "react-redux";
import Settings from "./Settings";
import {
    setLookupDocEmail,
    setLookupDocId,
    setLookupDocKey,
    setLookupDocSheetId,
    setSynonymsDocSheetId,
    setSynonymsDocEmail,
    setSynonymsDocId,
    setSynonymsDocKey,
    setLookupDocColumn,
    setSynonymsDocColumn,
    setInitialDocSheetName,
    setInitialDocColumn,
} from "../store/settings/actions";
import XLSX from 'xlsx';


async function getWorkbookFromFile(excelFile) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = event.target.result;
            let workbook = XLSX.read(data, { type: 'binary' });
            resolve(workbook);
        };
        reader.readAsBinaryString(excelFile);
    });
}

const mapStateToProps = (state, ownProps) => {
    return {
        lookupDocId: state.settings.lookupDocId,
        lookupDocEmail: state.settings.lookupDocEmail,
        lookupDocKey: state.settings.lookupDocKey,
        lookupDocSheetId: state.settings.lookupDocSheetId,
        lookupDocIsLoaded: state.settings.lookupDocIsLoaded,
        lookupDocColumn: state.settings.lookupDocColumn,
        lookupArrayIsLoaded: state.settings.lookupArrayIsLoaded,

        synonymsDocId: state.settings.synonymsDocId,
        synonymsDocEmail: state.settings.synonymsDocEmail,
        synonymsDocKey: state.settings.synonymsDocKey,
        synonymsDocSheetId: state.settings.synonymsDocSheetId,
        synonymsDocIsLoaded: state.settings.synonymsDocIsLoaded,
        synonymsDocColumn: state.settings.synonymsDocColumn,
        synonymsArrayIsLoaded: state.settings.synonymsArrayIsLoaded,

        initialDocColumn: state.settings.initialDocColumn,
        initialDocSheetName: state.settings.initialDocSheetName,
        initialDocIsLoaded: state.settings.initialDocIsLoaded,
        initialArrayIsLoaded: state.settings.initialArrayIsLoaded,

        onInitialDocInputChange: async (event) => {
            event.stopPropagation();
            event.preventDefault();
            getWorkbookFromFile(event.target.files[0]).then(wb => {
                console.log(wb);
                ownProps.setInitialDoc(wb);
            });
        },

        loadInitialArray: () => {
            ownProps.loadInitialArray(
                state.settings.initialDocSheetName,
                state.settings.initialDocColumn,
            );
        },

        loadLookupArray: () => {
            try {
                ownProps.loadLookupArray(
                    state.settings.lookupDocId,
                    state.settings.lookupDocEmail,
                    state.settings.lookupDocKey,
                    state.settings.lookupDocSheetId,
                    state.settings.lookupDocColumn,
                );
            }
            catch (e) { console.log(e); }
        },

        loadSynonymsDict: () => {
            try {
                ownProps.loadSynonymsDict(
                    state.settings.synonymsDocId,
                    state.settings.synonymsDocEmail,
                    state.settings.synonymsDocKey,
                    state.settings.synonymsDocSheetId,
                    state.settings.synonymsDocColumn,
                );
            }
            catch (e) { console.log(e); }
        },
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLookupDocIdChange: (event) => { dispatch(setLookupDocId(event.target.value)) },
        onLookupDocSheetIdChange: (event) => { dispatch(setLookupDocSheetId(event.target.value)) },
        onLookupDocColumnChange: (event) => { dispatch(setLookupDocColumn(event.target.value)) },
        onLookupDocEmailChange: (event) => { dispatch(setLookupDocEmail(event.target.value)) },
        onLookupDocKeyChange: (event) => { dispatch(setLookupDocKey(event.target.value)) },
        onSynonymsDocIdChange: (event) => { dispatch(setSynonymsDocId(event.target.value)) },
        onSynonymsDocSheetIdChange: (event) => { dispatch(setSynonymsDocSheetId(event.target.value)) },
        onSynonymsDocColumnChange: (event) => { dispatch(setSynonymsDocColumn(event.target.value)) },
        onSynonymsDocEmailChange: (event) => { dispatch(setSynonymsDocEmail(event.target.value)) },
        onSynonymsDocKeyChange: (event) => { dispatch(setSynonymsDocKey(event.target.value)) },
        onInitialDocColumnChange: (event) => { dispatch(setInitialDocColumn(event.target.value)) },
        onInitialDocSheetNameChange: (event) => { dispatch(setInitialDocSheetName(event.target.value)) },
        loadSettings: () => {console.log('load settings clicked')},
        saveSettings: () => {console.log('save settings clicked')},

    };
};

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;

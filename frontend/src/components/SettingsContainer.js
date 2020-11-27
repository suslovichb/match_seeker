import React from 'react';
import {connect} from "react-redux";
import Settings from "./Settings";
import {
    setLookupDocEmail, setLookupDocId,
    setLookupDocIsLoaded, setLookupDocKey,
    setLookupDocSheetId, setSynonymsDocSheetId,
    setSynonymsDocEmail, setSynonymsDocId,
    setSynonymsDocKey, setSynonymsDocIsLoaded, setLookupDocColumn, setSynonymsDocColumn
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

// const onInitialDocInputChange = (event) => {
//     const file = event.target.files[0];
//     const workbook = getWorkbookFromFile(file);
//     return workbook;
// };

const mapStateToProps = (state, ownProps) => {
    return {
        lookupDocId: state.settings.lookupDocId,
        lookupDocEmail: state.settings.lookupDocEmail,
        lookupDocKey: state.settings.lookupDocKey,
        synonymsDocId: state.settings.synonymsDocId,
        synonymsDocEmail: state.settings.synonymsDocEmail,
        synonymsDocKey: state.settings.synonymsDocKey,
        initialFile: ownProps.initialFile,

        onInitialDocInputChange: async (event) => {
            event.stopPropagation();
            event.preventDefault();
            getWorkbookFromFile(event.target.files[0]).then(wb => {console.log(wb);});
        },

        lookupDocSheetId: state.settings.lookupDocSheetId,
        synonymsDocSheetId: state.settings.synonymsDocSheetId,
        lookupDocIsLoaded: state.settings.lookupDocIsLoaded,
        synonymsDocIsLoaded: state.settings.synonymsDocIsLoaded,
        lookupDocColumn: state.settings.lookupDocColumn,
        synonymsDocColumn: state.settings.synonymsDocColumn,
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
        loadSettings: () => {console.log('load settings clicked')},
        saveSettings: () => {console.log('save settings clicked')},
        loadLookupDoc: () => {
            try { ownProps.loadLookupDoc(); }
            catch (e) { console.log(e); }
        },
        loadSynonymsDoc: () =>{
            try { ownProps.loadSynonymsDoc(); }
            catch (e) { console.log(e); }
        },

    };
};

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;

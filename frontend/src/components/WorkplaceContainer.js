import React, { useState, useEffect } from 'react';
import Workplace from "./Workplace";
import { GoogleSpreadsheet } from "google-spreadsheet";
import {connect} from "react-redux";
import {findBestMatch} from 'string-similarity';
import {
    setLookupArrayIsLoaded,
    setSynonymsArrayIsLoaded,
    setInitialArrayIsLoaded,
    setInitialDocIsLoaded,
} from "../store/settings/actions";
import XLSX from 'xlsx';


async function getGoogleSpreadsheet(spreadsheetId, email, key) {
    const doc = new GoogleSpreadsheet(spreadsheetId);
    await doc.useServiceAccountAuth({client_email: email, private_key: key});
    await doc.loadInfo();
    return doc;
}

const getGoogleSpreadsheetColumn = async (spreadsheetId, email, key, sheetId, column) => {
    let doc = await getGoogleSpreadsheet(spreadsheetId, email, key);
    let arr = [];
    let sheet = await doc.sheetsById[parseInt(sheetId)];
    await sheet.loadCells();
    for (let rowNum = 1; rowNum < sheet.rowCount; rowNum++) {
        let value = sheet.getCell(rowNum, parseInt(column)).value;
        if (value) {
            arr.push(value);
        }
    }

    return arr;
};

const WorkplaceContainer = (props) => {
    const [initialDoc, setInitialDoc] = useState(null);
    const [initialArray, setInitialArray] = useState(null);
    const [lookupArray, setLookupArray] = useState(null);
    const [synonymsArray, setSynonymsArray] = useState(null);
    const [synonymsDict, setSynonymsDict] = useState(null);
    const [lookupResults, setLookupResults] = useState(null);

    const lookupArrayLoadCheck = () => {
        props.setLookupArrayIsLoaded(!!lookupArray);
    };

    useEffect(lookupArrayLoadCheck, [lookupArray]);

    const loadLookupArray = async (spreadsheetId, email, key, sheetId, column) => {
        let arr = await getGoogleSpreadsheetColumn(spreadsheetId, email, key, sheetId, column);
        setLookupArray(arr);
        console.log(arr);
    };

    const loadSynonymsArray = async (spreadsheetId, email, key, sheetId, column) => {
        let arr = await getGoogleSpreadsheetColumn(spreadsheetId, email, key, sheetId, column,);
        setSynonymsArray(arr);
        console.log(arr);
    };

    const synonymsArrayLoadCheck = () => {
        props.setSynonymsArrayIsLoaded(!!synonymsArray);
    };

    useEffect(synonymsArrayLoadCheck, [synonymsArray]);

    const loadSynonymsDict = async (spreadsheetId, email, key, sheetId, column) => {
        let synonymsGroups = await getGoogleSpreadsheetColumn(spreadsheetId, email, key, sheetId, column);
        let separatedSynonyms = synonymsGroups.map(joinedSynonyms => joinedSynonyms.split(';'));
        let synonymsDict = {};
        for(let i=0; i<separatedSynonyms.length; i++){
            for(let j=0; j<separatedSynonyms[i].length; j++){
                let separatedSynonymsCopy = separatedSynonyms[i].slice();
                separatedSynonymsCopy.splice(j,1);
                synonymsDict[separatedSynonyms[i][j]] = separatedSynonymsCopy;
            }
        }

        setSynonymsDict(synonymsDict);
        console.log(synonymsDict);
    };

    const loadInitialArray = async (sheetName, column) => {
        if (!initialDoc) {
            console.log('initial document not loaded');
            return;
        }

        let ws = initialDoc.Sheets[sheetName];
        let ws_json = XLSX.utils.sheet_to_json(initialDoc.Sheets[sheetName]);
        let range = XLSX.utils.decode_range(ws['!ref']);
        let initialValues = [];
        for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
            let cell = ws[XLSX.utils.encode_cell({r: rowNum, c: parseInt(column, 10)})];
            let cellValue = cell.v;
            initialValues.push(cellValue);
        }

        setInitialArray(initialValues);
    };

    const initialArrayLoadCheck = () => {
        props.setInitialArrayIsLoaded(!!initialArray);
        console.log("initial arr loading");
    };

    useEffect(initialArrayLoadCheck, [initialArray]);

    const initialDocLoadCheck = () => {
        props.setInitialDocIsLoaded(!!initialDoc);
        console.log("initial doc loading");
    };

    useEffect(initialDocLoadCheck, [initialDoc]);

    const runSeeking = () => {
        if (!initialArray){
            console.log('initial array is absent');
            return;
        }

        if (!lookupArray){
            console.log('lookup array is absent');
            return;
        }

        let results = [];
        if (synonymsDict) {
            for (let i = 0; i < initialArray.length; i++) {
                let initialValue = initialArray[i];
                let synonyms = synonymsDict[initialValue] || [];
                let initialValues = [initialValue, ...synonyms];
                let matches = [];
                initialValues.forEach(value => matches.push(...findBestMatch(value, lookupArray).ratings));
                let result = {
                    initialValue,
                    synonyms,
                    number: i + 1,
                    matches: matches.sort((a, b) => b.rating - a.rating)
                };

                results.push(result);
            }
        } else {
            for (let i = 0; i < initialArray.length; i++) {
                let initialValue = initialArray[i];
                console.log('match searching');
                let matches = findBestMatch(initialValue, lookupArray).ratings;
                console.log('matches:');
                console.log(matches);
                let result = {
                    initialValue,
                    number: i + 1,
                    matches: matches.sort((a, b) => b.rating - a.rating)
                };

                results.push(result);
            }
        }

        console.log(results);
        setLookupResults(results);
    };

    const clearResults = () => {
        setLookupResults(null);
        console.log('clearing');
    };

    return (
        <div id='workplace-container'>
            <Workplace {...{loadInitialArray, loadLookupArray, loadSynonymsDict, setInitialDoc, runSeeking, clearResults, lookupResults}}/>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setLookupArrayIsLoaded: (isLoaded) => {
            dispatch(setLookupArrayIsLoaded(isLoaded));
        },

        setSynonymsArrayIsLoaded: (isLoaded) => {
            dispatch(setSynonymsArrayIsLoaded(isLoaded));
        },

        setInitialArrayIsLoaded: (isLoaded) => {
            dispatch(setInitialArrayIsLoaded(isLoaded));
        },

        setInitialDocIsLoaded: (isLoaded) => {
            dispatch(setInitialDocIsLoaded(isLoaded));
        },
    };
};

export  default connect(mapStateToProps, mapDispatchToProps)(WorkplaceContainer);

import React, { useState, useEffect } from 'react';
import Workplace from "./Workplace";
import { GoogleSpreadsheet } from "google-spreadsheet";
import {connect} from "react-redux";
import {setLookupDocIsLoaded, setSynonymsDocIsLoaded} from "../store/settings/actions";


async function loadGoogleSpreadsheet(spreadsheetId, email, key) {
    const doc = new GoogleSpreadsheet(spreadsheetId);
    await doc.useServiceAccountAuth({client_email: email, private_key: key});
    await doc.loadInfo();
    return doc;
}

function WorkplaceContainer(props) {
    const [initialDoc, setInitialDoc] = useState(null);
    const [lookupDoc, setLookupDoc] = useState(null);
    const [synonymsDoc, setSynonymsDoc] = useState(null);

    const loadLookupDoc = async (spreadsheetId, email, key) => {
        let doc = await loadGoogleSpreadsheet(spreadsheetId, email, key);
        setLookupDoc(doc);
    };

    const lookupDocLoadCheck = () => {
        props.setLookupDocIsLoaded(!!lookupDoc);
    };

    useEffect(lookupDocLoadCheck, [lookupDoc]);

    const loadSynonymsDoc = async (spreadsheetId, email, key) => {
        let doc = await loadGoogleSpreadsheet(spreadsheetId, email, key);
        setSynonymsDoc(doc);
    };

    const synonymsDocLoadCheck = () => {
        props.setSynonymsDocIsLoaded(!!synonymsDoc);
    };

    useEffect(synonymsDocLoadCheck, [synonymsDoc]);

    return (
        <div id='workplace-container'>
            <Workplace {...{setInitialDoc, loadLookupDoc, loadSynonymsDoc}}/>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setLookupDocIsLoaded: (isLoaded) => {
            dispatch(setLookupDocIsLoaded(isLoaded));
        },
        setSynonymsDocIsLoaded: (isLoaded) => {
            dispatch(setSynonymsDocIsLoaded(isLoaded));
        },
    };
};

export  default connect(mapStateToProps, mapDispatchToProps)(WorkplaceContainer);

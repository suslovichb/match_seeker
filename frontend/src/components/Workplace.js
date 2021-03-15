import React from 'react';
import Toolbar from "./Toolbar";
import SettingsContainer from "./SettingsContainer";
import TableContainer from "./TableContainer";


const Workplace = ({
    loadInitialArray,
    loadLookupArray,
    loadSynonymsDict,
    setInitialDoc,
    runSeeking,
    clearResults,
    lookupResults
}) => {
    return (
        <div id='workplace'>
            <SettingsContainer {...{loadInitialArray, loadLookupArray, loadSynonymsDict, setInitialDoc}}/>
            <Toolbar {...{runSeeking, clearResults}}/>
            <TableContainer {...{lookupResults}}/>
        </div>
    )
};

export default Workplace;

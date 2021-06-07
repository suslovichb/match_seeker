import React from 'react';
import Toolbar from "./Toolbar";
import SettingsContainer from "./SettingsContainer";
import MatchTable from "./MatchTable";


const Workplace = ({
    loadInitialArray,
    loadLookupArray,
    loadSynonymsDict,
    setInitialDoc,
    runSeeking,
    clearResults,
    downloadResults,
    lookupResults,
    updateLookupResults
}) => {
    return (
        <div id='workplace'>
            <SettingsContainer {...{loadInitialArray, loadLookupArray, loadSynonymsDict, setInitialDoc}}/>
            <Toolbar {...{runSeeking, clearResults, downloadResults}}/>
            {
                lookupResults &&
                <MatchTable {...{
                    data: lookupResults,
                    updateTableData: updateLookupResults
                }}/>
            }
        </div>
    );
};

export default Workplace;

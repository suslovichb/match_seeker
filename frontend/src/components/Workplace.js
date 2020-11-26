import React from 'react';
import Toolbar from "./Toolbar";
import SettingsContainer from "./SettingsContainer";
import TableContainer from "./TableContainer";


const Workplace = ({ setInitialDoc, loadLookupDoc, loadSynonymsDoc }) => {
    return (
        <div id='workplace'>
            <SettingsContainer {...{setInitialDoc, loadLookupDoc, loadSynonymsDoc}}/>
            <Toolbar />
            <TableContainer />
        </div>
    )
};

export default Workplace;

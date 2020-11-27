import React from 'react';


const Settings = ({
    lookupDocId,
    lookupDocEmail,
    lookupDocKey,
    synonymsDocId,
    synonymsDocEmail,
    synonymsDocKey,
    onLookupDocIdChange,
    onLookupDocSheetIdChange,
    onLookupDocColumnChange,
    onLookupDocEmailChange,
    onLookupDocKeyChange,
    onSynonymsDocIdChange,
    onSynonymsDocSheetIdChange,
    onSynonymsDocColumnChange,
    onSynonymsDocEmailChange,
    onSynonymsDocKeyChange,
    onSynonymsDocChange,
    onInitialDocInputChange,
    loadSettings,
    saveSettings,
    lookupDocSheetId,
    lookupDocColumn,
    synonymsDocSheetId,
    synonymsDocColumn,
    lookupDocIsLoaded,
    synonymsDocIsLoaded,
    loadLookupDoc,
    loadSynonymsDoc,
    lookupSheetColumns,
}) => {
    const isLoadedIndicator = (isLoaded) => {
        if (isLoaded) {
            return(<span>&#10003;</span>)
        }
        return (<span>&#10005;</span>)
    };

    // const arrayToOptions = (array) => {
    //     return array.map((optionName, index) => {return <option value={optionName} key={index}>{optionName}</option>})
    // };

    return (
        <div id='settings'>
            {/*<div id="settings-heading" className="panel-heading">*/}
                {/*<h4 className="panel-title">*/}
                    {/*<a data-toggle="collapse" href="#collapsable">*/}
                        {/*Settings*/}
                    {/*</a>*/}
                {/*</h4>*/}
            {/*</div>*/}

            <div id="settings-bar" className="navbar navbar-expand-lg navbar-dark bg-dark collapse">
                <span className="input-group-wrapper">
                    <label htmlFor="initial-doc-input">Initial doc:</label>
                    <input type="file" id="initial-doc-input" placeholder="Initial doc"
                           onChange={onInitialDocInputChange}/>
                </span>

                <span className="input-group-wrapper">
                    <label htmlFor="lookup-doc-id">Lookup doc:</label>
                    <input type="text" id="lookup-doc-id" placeholder="ID"
                           value={lookupDocId} onChange={onLookupDocIdChange}/>
                    <input type="text" id="lookup-doc-sheet-id" placeholder="Sheet ID"
                           value={lookupDocSheetId} onChange={onLookupDocSheetIdChange}/>
                    <input type="text" id="lookup-doc-column" placeholder="Column"
                           value={lookupDocColumn} onChange={onLookupDocColumnChange}/>
                    <input type="text" id="lookup-doc-email" placeholder="Email"
                           value={lookupDocEmail} onChange={onLookupDocEmailChange}/>
                    <input type="text" id="lookup-doc-key" placeholder="Key"
                           value={lookupDocKey} onChange={onLookupDocKeyChange}/>
                    <button type="button" className="btn btn-info btn-block"
                            id="lookup-doc-load" onClick={loadLookupDoc}>
                            Load
                    </button>

                    <span>{isLoadedIndicator(lookupDocIsLoaded)}</span>

                    {/*{*/}
                        {/*typeof lookupSheetColumns !== 'undefined' &&*/}
                        {/*lookupSheetColumns.length > 0 &&*/}
                        {/*<select id="lookup-column-select" className="column-select">*/}
                            {/*<option disabled>Choose column</option>*/}
                            {/*{arrayToOptions(lookupSheetColumns)}*/}
                        {/*</select>*/}
                    {/*}*/}
                </span>

                <span className="input-group-wrapper">
                    <label htmlFor="synonyms-doc-id">Synonyms doc:</label>
                    <input type="text" id="synonyms-doc-id" placeholder="ID"
                           value={synonymsDocId} onChange={onSynonymsDocIdChange}/>
                    <input type="text" id="synonyms-doc-sheet-id" placeholder="Sheet ID"
                           value={synonymsDocSheetId} onChange={onSynonymsDocSheetIdChange}/>
                    <input type="text" id="synonyms-doc-column" placeholder="Column"
                           value={synonymsDocColumn} onChange={onSynonymsDocColumnChange}/>
                    <input type="text" id="synonyms-doc-email" placeholder="Email"
                           value={synonymsDocEmail} onChange={onSynonymsDocEmailChange}/>
                    <input type="text" id="synonyms-doc-key" placeholder="Key"
                           value={synonymsDocKey} onChange={onSynonymsDocKeyChange}/>
                    <button type="button" className="btn btn-info btn-block"
                            id="synonyms-doc-load" onClick={loadSynonymsDoc}>
                            Load
                    </button>

                    <span>{isLoadedIndicator(synonymsDocIsLoaded)}</span>

                </span>

                <div id='settings-tools'>
                    <button type="button" className="btn btn-info" onClick={loadSettings}>
                        Load settings
                    </button>
                    <button type="button" className="btn btn-warning" onClick={saveSettings}>
                        Save settings
                    </button>
                </div>

            </div>
        </div>
    )
};

export default Settings;

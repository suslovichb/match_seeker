import React from 'react';


const isLoadedIndicator = (isLoaded) => {
        if (isLoaded) {
            return(<span>&#10003;</span>)
        }
        return (<span>&#10005;</span>)
};

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
    onInitialDocInputChange,
    loadSettings,
    saveSettings,
    lookupDocSheetId,
    lookupDocColumn,
    synonymsDocSheetId,
    synonymsDocColumn,
    synonymsDocIsLoaded,
    loadLookupArray,
    loadSynonymsDict,
    loadInitialArray,
    lookupArrayIsLoaded,
    synonymsArrayIsLoaded,
    synonymsDictIsLoaded,
    initialDocColumn,
    onInitialDocColumnChange,
    initialDocSheetName,
    onInitialDocSheetNameChange,
    initialDocIsLoaded,
    initialArrayIsLoaded,
}) => {
    return (
        <div id='settings'>
            <div id="settings-bar" className="navbar navbar-expand-lg navbar-dark bg-dark collapse">
                <span className="input-group-wrapper">
                    <label htmlFor="initial-doc-input">
                        Initial doc:
                    </label>
                    <input
                        type="file"
                        id="initial-doc-input"
                        placeholder="Initial doc"
                        onChange={onInitialDocInputChange}
                    />
                    <span>
                        Doc {isLoadedIndicator(initialDocIsLoaded)}
                    </span>
                    <input
                        type="text"
                        id="initial-doc-sheet-name"
                        placeholder="Sheet name"
                        value={initialDocSheetName}
                        onChange={onInitialDocSheetNameChange}
                    />
                    <input
                        type="text"
                        id="initial-doc-column"
                        placeholder="Column"
                        value={initialDocColumn}
                        onChange={onInitialDocColumnChange}
                    />
                    <button
                        type="button"
                        className="btn btn-info btn-block"
                        id="initial-doc-load"
                        onClick={loadInitialArray}
                    >
                        Load
                    </button>
                    <span>
                        {isLoadedIndicator(initialArrayIsLoaded)}
                    </span>
                </span>

                <span className="input-group-wrapper">
                    <label htmlFor="lookup-doc-id">
                        Lookup doc:
                    </label>
                    <input
                        type="text"
                        id="lookup-doc-id"
                        placeholder="ID"
                        value={lookupDocId}
                        onChange={onLookupDocIdChange}
                    />
                    <input
                        type="text"
                        id="lookup-doc-sheet-id"
                        placeholder="Sheet ID"
                        value={lookupDocSheetId}
                        onChange={onLookupDocSheetIdChange}
                    />
                    <input
                        type="text"
                        id="lookup-doc-column"
                        placeholder="Column"
                        value={lookupDocColumn}
                        onChange={onLookupDocColumnChange}
                    />
                    <input
                        type="text"
                        id="lookup-doc-email"
                        placeholder="Email"
                        value={lookupDocEmail}
                        onChange={onLookupDocEmailChange}
                    />
                    <input
                        type="text"
                        id="lookup-doc-key"
                        placeholder="Key"
                        value={lookupDocKey}
                        onChange={onLookupDocKeyChange}
                    />
                    <button
                        type="button"
                        className="btn btn-info btn-block"
                        id="lookup-doc-load"
                        onClick={loadLookupArray}
                    >
                        Load
                    </button>
                    <span>
                        {isLoadedIndicator(lookupArrayIsLoaded)}
                    </span>
                </span>

                <span className="input-group-wrapper">
                    <label htmlFor="synonyms-doc-id">
                        Synonyms doc:
                    </label>
                    <input
                        type="text"
                        id="synonyms-doc-id"
                        placeholder="ID"
                        value={synonymsDocId}
                        onChange={onSynonymsDocIdChange}
                    />
                    <input
                        type="text"
                        id="synonyms-doc-sheet-id"
                        placeholder="Sheet ID"
                        value={synonymsDocSheetId}
                        onChange={onSynonymsDocSheetIdChange}
                    />
                    <input
                        type="text"
                        id="synonyms-doc-column"
                        placeholder="Column"
                        value={synonymsDocColumn}
                        onChange={onSynonymsDocColumnChange}
                    />
                    <input
                        type="text"
                        id="synonyms-doc-email"
                        placeholder="Email"
                        value={synonymsDocEmail}
                        onChange={onSynonymsDocEmailChange}
                    />
                    <input
                        type="text"
                        id="synonyms-doc-key"
                        placeholder="Key"
                        value={synonymsDocKey}
                        onChange={onSynonymsDocKeyChange}
                    />
                    <button
                        type="button"
                        className="btn btn-info btn-block"
                        id="synonyms-doc-load"
                        onClick={loadSynonymsDict}
                    >
                        Load
                    </button>
                    <span>
                        {isLoadedIndicator(synonymsDictIsLoaded)}
                    </span>
                </span>

                <div id='settings-tools'>
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={loadSettings}
                    >
                        Load settings
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={saveSettings}
                    >
                        Save settings
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Settings;

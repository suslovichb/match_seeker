import React, { Component } from 'react';

class Settings extends Component{
    render(){
        return(
            <div id='settings'>
                <div id="settings-bar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="input-group-wrapper">
                        <label htmlFor="initial-table-input">Initial table:</label>
                        <input type="file" id="initial-table-input" placeholder="Initial table"/>
                    </span>
                    <span className="input-group-wrapper">
                        <label htmlFor="catalog-table-input">Catalog table:</label>
                        <input type="text" id="catalog-table-input" placeholder="Catalog table"/>
                    </span>
                    <span className="input-group-wrapper">
                        <label htmlFor="synonyms-table-input">Synonyms table:</label>
                        <input type="text" id="synonyms-table-input" placeholder="Synonyms table"/>
                    </span>
                    <button type="button" className="btn btn-info">Load settings</button>
                </div>
            </div>
        )
    }

}

export default Settings;
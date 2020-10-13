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
                        <label htmlFor="catalog-table-id">Catalog table:</label>
                        <input type="text" id="catalog-table-id" placeholder="ID"/>
                        <input type="text" id="catalog-table-email" placeholder="Email"/>
                        <input type="text" id="catalog-table-key" placeholder="Key"/>
                    </span>
                    <span className="input-group-wrapper">
                        <label htmlFor="synonyms-table-id">Synonyms table:</label>
                        <input type="text" id="synonyms-table-id" placeholder="ID"/>
                        <input type="text" id="synonyms-table-email" placeholder="Email"/>
                        <input type="text" id="synonyms-table-key" placeholder="Key"/>
                    </span>
                    <div id='settings-tools'>
                        <button type="button" className="btn btn-info">Load settings</button>
                        <button type="button" className="btn btn-warning">Save settings</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Settings;
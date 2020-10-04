import React, { Component } from 'react';

class Settings extends Component{
    render(){
        return(
            <div id={'settings-component'}>
                <div id="settings-bar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="input-group-wrapper">
                        <label htmlFor="initial-table-input">Initial table:</label>
                        <input type="file" id="initial-table-input" placeholder="Initial table"/>
                    </span>
                    <span className="input-group-wrapper">
                        <label htmlFor="catalog-table-input">Catalog table:</label>
                        <input type="file" id="catalog-table-input" placeholder="Catalog table"/>
                    </span>
                </div>
            </div>
        )
    }

}

export default Settings
import React, { Component } from 'react';

class Table extends Component{
    render(){
        return(
            <div id={'results-table'}>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr className="table-info">
                                <th>Initial</th>
                                <th>Selection</th>
                                <th>Synonyms</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }

}

export default Table;
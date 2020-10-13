import React, { Component } from 'react';
import TableRow from "./TableRow";

class Table extends Component{
    render(){
        return(
            <div id="match-table-container">
                <div className="table-wrapper">
                    <table className="table match-table">
                        <thead>
                            <tr className="table-info">
                                <th>&#8470;</th>
                                <th>Initial</th>
                                <th>Selection</th>
                                <th>Synonyms</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow/>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Table;
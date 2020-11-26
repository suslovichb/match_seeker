import React from 'react';
import TableRow from "./TableRow";


const Table = () => (
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
                </tbody>
            </table>
        </div>
    </div>
);

export default Table;

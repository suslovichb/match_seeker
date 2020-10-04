import React, { Component } from 'react';

class Table extends Component{
    render(){
        return(
            <div id={'table-component'}>
                <div className="table-container">
                    <table className="table">
                        <tr className="table-info">
                            <th>Initial</th>
                            <th>Selection</th>
                            <th>Synonyms</th>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }

}

export default Table
import React, { Component } from 'react';

class TableRow extends Component{
    render(){
        return(
            <tr className='match-table-row'>
                <td >1</td>
                <td >Sample1</td>
                <td>
                    <select className='match-select'>
                        <option>option1</option>
                        <option>option2</option>
                    </select>
                </td>
                <td>
                    <form>
                        <input type='text' className='synonym-input'/>
                        <button className='save-synonym-button'>Save</button>
                    </form>
                </td>
            </tr>
        )
    }

}

export default TableRow;
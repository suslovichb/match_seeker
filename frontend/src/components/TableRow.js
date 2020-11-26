import React, { Component } from 'react';


const TableRow = (props) => {
    return(
        <tr className='match-table-row'>
            <td >{props.number}</td>
            <td >{props.initialValue}</td>
            <td>
                <select className='match-select'>
                    <option>{props.firstOption}</option>
                    <option>{props.secondOption}</option>
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
};

export default TableRow;

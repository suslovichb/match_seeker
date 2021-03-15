import React from 'react';


const TableRow = (props) => {
    return(
        <tr className='match-table-row'>
            <td >{props.number}</td>
            <td >{props.initialValue}</td>
            <td>
                <select className='match-select'>
                    {props.matches.map((match, index) => (<option key={index}>{match.target}</option>))}
                </select>
            </td>
            <td>
                {props.synonyms.join(', ') || ''}
            </td>
            {/*<td>*/}
                {/*<form>*/}
                    {/*<input type='text' className='synonym-input'/>*/}
                    {/*<button className='save-synonym-button'>Save</button>*/}
                {/*</form>*/}
            {/*</td>*/}
        </tr>
    )
};

export default TableRow;

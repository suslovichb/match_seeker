import React, {useMemo} from 'react';
import EditableCell from "./EditableCell";
import OptionsCell from "./OptionsCell";
import WindowedTable from "./WindowedTable";


const MatchTable = ({
    data,
    updateTableData,
}) => {
    const columns = useMemo(() =>
        [
            {
                Header: 'Id',
                accessor: 'rowId',
                width: 40,
            },

            {
                Header: 'Initial',
                accessor: 'initialValue',
            },

            {
                Header: 'Match',
                accessor: 'chosenMatch',
                Cell: EditableCell,
            },

            {
                Header: 'Matches',
                accessor: 'matches',
                Cell: (cellProps) => {
                    const updateChoice = value => {
                        cellProps.updateTableData(cellProps.row.index, 'chosenMatch', value)
                    };
                    const options = cellProps.value;
                    const selectedOption = cellProps.row.original.chosenMatch;
                    return <OptionsCell {...{options, selectedOption, updateChoice}}/>
                },
            },
        ],
        []
    );

    return(
        <WindowedTable {...{data, updateTableData, columns}}/>
    )

};

export default MatchTable;
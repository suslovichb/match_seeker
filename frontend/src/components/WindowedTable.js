import React, {useMemo} from 'react';
import {useTable, useBlockLayout} from 'react-table';
import {FixedSizeList} from 'react-window';


const WindowedTable = ({
    columns,
    data,
    updateTableData
}) => {
    const defaultColumn = useMemo(
        () => ({width: 200}),
        []
    );

    const scrollBarSize = 20;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        totalColumnsWidth,
        prepareRow,
    } = useTable(
       {
           columns,
           data,
           defaultColumn,
           updateTableData,
       },
       useBlockLayout
    );

    const RenderRow = React.useCallback(
        ({index, style}) => {
            const row = rows[index];
            prepareRow(row);
            return (
                <div {...row.getRowProps({style})} className="tr">
                    {
                        row.cells.map(cell => {
                            return (
                                <div {...cell.getCellProps()} className="td">
                                    {
                                        cell.render('Cell')
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    );

    return (
        <div {...getTableProps()} className="table">
            <div>
                {
                    headerGroups.map(headerGroup => (
                        <div {...headerGroup.getHeaderGroupProps()} className="tr">
                            {
                                headerGroup.headers.map(column => (
                                    <div {...column.getHeaderProps()} className="th">
                                        {column.render("Header")}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div {...getTableBodyProps()}>
                <FixedSizeList
                    height={400}
                    itemCount={rows.length}
                    itemSize={35}
                    width={totalColumnsWidth+scrollBarSize}
                >
                    {RenderRow}
                </FixedSizeList>
            </div>
        </div>
    )
};

export default WindowedTable;
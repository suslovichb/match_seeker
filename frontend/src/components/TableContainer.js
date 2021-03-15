import React from 'react';
import {connect} from "react-redux"
import Table from "./Table";


const mapStateToProps = (state, ownProps) => {
    return {
        lookupResults: ownProps.lookupResults,
    }
};

const mapDispatchToProps = (state, ownProps) => {
    return {

    }
};

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);

export default TableContainer;

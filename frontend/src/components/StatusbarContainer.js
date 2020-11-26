import React from 'react';
import {connect} from "react-redux"
import Statusbar from "./Statusbar";


const mapStateToProps = state => {
    return {
        statusbarText: state.statusbar.statusbarText,
        statusbarIsVisible: state.statusbar.statusbarIsVisible
    };
};

const StatusbarContainer = connect(mapStateToProps)(Statusbar);

export default StatusbarContainer;

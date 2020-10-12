import React, { Component } from 'react';
import Settings from "./Settings";
import Table from "./Table";
import Toolbar from "./Toolbar";

class Workplace extends Component{
    render(){
        return(
            <div id='home'>
                <Settings/>
                <Toolbar />
                <Table />
            </div>
        )
    }

}

export default Workplace;
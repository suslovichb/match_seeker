import React, { Component } from 'react';

class Toolbar extends Component{
    render(){
        return(
            <div id={'toolbar-component'}>
                <button type="button" className="btn btn-primary">Run</button>
                <button type="button" className="btn btn-success">Download</button>
                <button type="button" className="btn btn-danger">Clear</button>
            </div>
        )
    }

}

export default Toolbar
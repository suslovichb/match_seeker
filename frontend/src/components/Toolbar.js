import React from 'react';


const Toolbar = ({runSeeking, clearResults}) => {
    return(
        <div id='toolbar' className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <button type="button" className="btn btn-primary" onClick={runSeeking}>Run</button>
            <button type="button" className="btn btn-success">Download</button>
            <button type="button" className="btn btn-danger" onClick={clearResults}>Clear</button>
        </div>
    )
};

export default Toolbar;

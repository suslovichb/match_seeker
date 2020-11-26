import React from 'react';


const Toolbar = () => {
    return(
        <div id='toolbar' className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <button type="button" className="btn btn-primary">Run</button>
            <button type="button" className="btn btn-success">Download</button>
            <button type="button" className="btn btn-danger">Clear</button>
        </div>
    )
};

export default Toolbar;

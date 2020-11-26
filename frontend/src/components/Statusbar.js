import React from 'react';


const Statusbar = ({ statusbarText, statusbarIsVisible}) => (
    <div id="statusbar" style={statusbarIsVisible ? {} : {display:'none'}}>
        {statusbarText}
    </div>
);

export default Statusbar;

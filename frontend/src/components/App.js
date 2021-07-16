import React, { Component } from 'react';
import {Switch, Route, Router} from "react-router-dom";
import EntryContainer from "./EntryContainer";
import StatusbarContainer from "./StatusbarContainer";
import HeaderContainer from "./HeaderContainer";
import WorkplaceContainer from "./WorkplaceContainer";
import history from '../history';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading",
        };
    }

    render(){
        return(
            <div id='app'>
                <Router history={history}>
                    <HeaderContainer />
                    <Switch>
                        <Route exact path={"/"} component={WorkplaceContainer}/>
                        <Route path={"/entry/"} component={EntryContainer}/>
                        <Route path={"/workplace/"} component={WorkplaceContainer}/>
                    </Switch>
                    <StatusbarContainer />
                </Router>
            </div>
        )
    }
}

export default App;

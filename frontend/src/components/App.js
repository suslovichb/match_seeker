import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
// import axiosInstance from "../axiosApi";
import EntryContainer from "./EntryContainer";
import StatusbarContainer from "./StatusbarContainer";
import HeaderContainer from "./HeaderContainer";
import WorkplaceContainer from "./WorkplaceContainer";


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading",
        };
        // this.handleLogout = this.handleLogout.bind(this);
    }
    //
    // async handleLogout(){
    //     try{
    //         const response = await axiosInstance.post('/blacklist/',{
    //             'refresh_token': localStorage.getItem('refresh_token')
    //         });
    //         localStorage.removeItem('access_token');
    //         localStorage.removeItem('refresh_token');
    //         axiosInstance.defaults.headers['Authorization'] = null;
    //         return response;
    //     }
    //     catch (error){
    //         console.log(error);
    //     }
    // }

    render(){
        return(
            <div id='app'>
                {/*<HeaderContainer handleLogout={this.handleLogout}/>*/}
                <HeaderContainer />
                <Switch>
                    <Route exact path={"/entry/"} component={EntryContainer}/>
                    <Route exact path={"/workplace/"} component={WorkplaceContainer}/>
                    <Route exact path={"/"} component={WorkplaceContainer}/>
                </Switch>

                <StatusbarContainer />
            </div>
        )
    }
}

export default App;

import React, { Component } from 'react';
import Entry from "./Entry";
import Header from "./Header";
import Workplace from "./Workplace";
import {Switch, Route, Link} from "react-router-dom";
import axiosInstance from "../axiosApi";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading",
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    async handleLogout(){
        try{
            const response = await axiosInstance.post('/blacklist/',{
                'refresh_token': localStorage.getItem('refresh_token')
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response;
        }
        catch (error){
            console.log(error);
        }
    }

    render(){
        return(
            <div id='app'>
                <Header />

                <button onClick={this.handleLogout}>Logout</button>

                <nav>
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                    <Link className={"nav-link"} to={"/entry/"}>Entry</Link>
                    <Link className={"nav-link"} to={"/workplace/"}>Workplace</Link>
                </nav>

                <Switch>
                    <Route exact path={"/entry/"} component={Entry}/>
                    <Route exact path={"/workplace/"} component={Workplace}/>
                    <Route exact path={"/"} component={Workplace}/>
                </Switch>
            </div>
        )
    }
}

export default App;

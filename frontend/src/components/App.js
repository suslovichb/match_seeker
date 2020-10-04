import { render } from "react-dom";
import React, { Component } from 'react';
import Settings from "./Settings";
import Table from "./Table";
import Entry from "./Entry";
import Toolbar from "./Toolbar";
import Header from "./Header";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    render() {
        return(
            <div id={'main-app-component'}>
                <Header />
                <Entry />
                <Settings />
                <Toolbar />
                <Table />
            </div>
        )
    }
}

export default App;

const container  = document.getElementById("app");
render(<App />, container);
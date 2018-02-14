import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById("myDiv");
        findDOMNode(myDiv).style.color = "green";
    };

    render() {
        return (
            <div>
                <button onClick = {this.findDomNodeHandler}>find Node</button>
                <div id ="myDiv">this html Node styled from App component</div>
            </div>
        );
    }

}

export default App;
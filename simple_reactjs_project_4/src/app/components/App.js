import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.forceUpdateHanlder = this.forceUpdateHanlder.bind(this);
    };

    forceUpdateHanlder() {
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <button onClick = {this.forceUpdateHanlder}>FORCE UPDATE</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}

export default App;
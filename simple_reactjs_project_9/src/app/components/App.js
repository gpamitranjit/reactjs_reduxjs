import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }

        this.updateStateMethod = this.updateStateMethod.bind(this);
        this.cleanInputMethod = this.cleanInputMethod.bind(this);
    };

    updateStateMethod(e) {
        this.setState({data: e.target.value });
    }

    cleanInputMethod() {
        this.setState({ data: '' });
        findDOMNode(this.refs.myInput).focus();
    }


    render() {
        return (
            <div>
            <input value = {this.state.data} onChange = { this.updateStateMethod} ref = "myInput" />
            <button onClick = {this.cleanInputMethod}>Clear input</button>
            <h4>{ this.state.data}</h4>
            </div>
        );
    }
}

export default App;
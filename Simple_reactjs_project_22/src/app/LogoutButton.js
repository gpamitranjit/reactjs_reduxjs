import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LogoutButton extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick = {this.props.onClick}>
            Logout
            </button>
        );
    }
}

export default LogoutButton;
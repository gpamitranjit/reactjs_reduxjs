import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class LoginButton extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <button onClick = {this.props.onClick}>
            Login
            </button>
        );
    }
}

export default LoginButton;
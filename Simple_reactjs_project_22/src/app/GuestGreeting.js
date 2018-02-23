import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class GuestGreeting extends Component {
    
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <h1>Please Sign Up Guest user!</h1>
        );
    }
}

export default GuestGreeting;
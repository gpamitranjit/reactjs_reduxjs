import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';


class Greeting extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.isLoggedIn) {
            return <UserGreeting />
        }
        else {
            return <GuestGreeting />
        }
    }
}

export default Greeting;
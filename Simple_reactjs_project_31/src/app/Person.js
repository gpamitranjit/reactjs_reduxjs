import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Person extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>firstName:{ this.props.firstName }</span> <br/>
                <span>lastName: { this.props.lastName } </span>
            </div>
        );
    }
}

export default Person;
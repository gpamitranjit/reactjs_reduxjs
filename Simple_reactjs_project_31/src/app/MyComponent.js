import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component {
    
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div>passed Message value is : { this.props.message } </div>
        );
    }
}

export default MyComponent;
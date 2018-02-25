import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class OrbitaryComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.props.myOrbitraryComponent }
            </div>
        );
    }
}

export default OrbitaryComponent;
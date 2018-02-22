import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Store from './Store';

class PersonDetails extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li key = {this.props.match.params.number} >{this.props.match.params.number}</li>
                </ul>
                <p><Link to = "/" >Back</Link></p>
            </div>
        );
    }
}


export default PersonDetails;
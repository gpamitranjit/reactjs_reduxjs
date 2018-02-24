import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListItem extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const number = this.props.number;
        return (
            <li>{number  * 2 }</li>
        );
    }
}

export default ListItem;
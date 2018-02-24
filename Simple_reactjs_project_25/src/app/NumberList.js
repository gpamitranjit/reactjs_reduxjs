import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ListItem from './ListItem';


class NumberList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number, index) => {
            // providing the key to list item is important not to it's embeded elements!!
            // so we provide the key to ListItem elements
            return <ListItem number = { number } />
        });

        return ( listItems );
    }
}


export default NumberList;
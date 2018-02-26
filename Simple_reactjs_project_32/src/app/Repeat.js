import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Repeat extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let items = [];
        for(let i=0; i < this.props.numTimes; i++) {
            items.push(this.props.children(i));
        }
        
        return (
        <div>{items}</div>
        );
    }
}

export default Repeat;
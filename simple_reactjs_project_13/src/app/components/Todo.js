import React, { Component }  from 'react';

export default class Todo extends Component {

    render() {
        
        return (
            <li>
                { this.props.id } <b>:</b> { this.props.text}
            </li>
        );
    }
}
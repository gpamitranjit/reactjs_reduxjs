import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        const timerID = setInterval(
            () => {
                return this.tick();
            },1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


// When manipulating the state always try to make use of second form of setState(); method to update the component state
// this ensures that the component states are updated correctly when many state trigger's are batched in single call
    tick() {
        this.setState((prevState, props) => (
            {
            date: new Date().toLocaleTimeString()
        }));
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is { this.state.date }. </h2>
            </div>
        );
    }
}

export default Clock;
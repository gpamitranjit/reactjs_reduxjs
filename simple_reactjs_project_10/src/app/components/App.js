import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    component: 'first Component!',
                    id: 1
                },
                {
                    component: 'second Component!',
                    id: 2
                },
                {
                    component: 'third Component!',
                    id: 3
                }
            ]
        }
    }

    render() {
        return (
            <div>
                    { this.state.data.map((componentObj, i) => <Content key= {i} componentData = {componentObj} /> )}
            </div>
        );
    }
}

export default App;

class Content extends Component {
    constructor() {
        super();
    }

    render() {
        return (
           <div> 
                <div>componentObj ID: { this.props.componentData.id}</div>
                <div>component: { this.props.componentData.component}</div>
           </div>
        );
    }
}
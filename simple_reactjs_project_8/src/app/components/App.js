import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: 'initial data!'
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return(
            <div>
            <Content myDataProp = {this.state.data} 
                updateStateProp = { this.updateState}
            >

            </Content>
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
            <input type = "text" value = { this.props.myDataProp} 
                onChange = {this.props.updateStateProp}
            />
            <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}
import React, { Component} from 'react';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends Component {
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                transitionName = "example"
                transitionAppear = {true} transitionAppearTimeout = {3000}
                transitionEnter = {false} transitionLeave = {false}
                >
                    <h1> My Element</h1>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App;
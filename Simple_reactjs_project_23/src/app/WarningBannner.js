import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class WarningBanner extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('WarningBanner mounted successfully!');
    }

    componentWillUnmount() {
        console.log('WarningBanner un-mounted successfully!');
    }
    render() {
        if(!this.props.warn) {
            return null;
        }
        else {
            return (
                <div className = "warning">
                    warning!
                </div>
            );
        }
    }
}

export default WarningBanner;
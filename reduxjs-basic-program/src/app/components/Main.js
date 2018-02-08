import React from "react";

export class Main extends React.Component {
    constructor(props) {
        console.log('Main components\' constructor is invoked.');
        super(props);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.changeUsername('Anna')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    }
}
import React from "react";

export class User extends React.Component {
    constructor(props) {
        // console.log('User components\' constructor is invoked.');
        super(props);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Name: {this.props.username}</p>
                    </div>
                </div>
            </div>
        );
    }
}

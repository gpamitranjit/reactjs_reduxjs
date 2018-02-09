import React from "react";
import { connect} from "react-redux";

import { User } from './User';
import { Main } from './Main';


export class App extends React.Component {
    constructor() {
        // console.log('App components constructor is invoked.');
        super();
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    };
} 


export default connect(mapStateToProps, mapDispatchToProps)(App);
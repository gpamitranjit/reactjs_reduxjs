import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ControlledFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('form is submitted successfully!');
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        // this.setState((prevState, props) => ({
        //     value: event.target.value
        // }));
    }

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>

            <label>
                Name: 
                <input type="text" name="firstName" value = { this.state.value} onChange = { this.handleChange}/>
            </label>

            <input type="submit" value = "submit" />
            </form>
        );
    }
}


export default ControlledFormComponent;
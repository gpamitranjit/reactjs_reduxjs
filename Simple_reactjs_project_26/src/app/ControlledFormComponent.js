import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ControlledFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selectedValue: ['coconut']
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
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


    handleOptionChange(event) {
        this.setState({
            selectedValue: [...event.target.selectedOptions].map(o => o.value)
        });
    }

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>

            <label>
                Name: 
                <input type="text" name="firstName" value = { this.state.value} onChange = { this.handleChange}/>
            </label>
            <h4>Please Choose your faourite fruit</h4>
            <select value = { this.state.selectedValue } onChange = { this.handleOptionChange} multiple = { true} >
                <option value = 'lime'>Lime</option>
                <option value = 'grapefruit'>Grape Fruit</option>
                <option value = 'applefruit'>Apple Fruit</option>
                <option value = 'coconut'>Coconut</option>
            </select>
            <input type="submit" value = "submit" />
            </form>
        );
    }
}


export default ControlledFormComponent;
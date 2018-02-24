import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  
  constructor(props) {
    super(props);
  }

// use  f array indices as keys for the rendered list of items is Not recommended when the order of the list items changes it has negative impact on the react component state updation!!
  render() {
    const numbers = this.props.numbers;
    const doubledValues = numbers.map((number, index) => { 
      return <li key = {index.toString() } >{ number * 2 }</li>
     });

     return (
       <ul> { doubledValues } </ul>
     );
  }
}


export default App;
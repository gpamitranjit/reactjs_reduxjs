import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = this.props.numbers;
    const doubledValues = numbers.map((number) => { 
      return <li key = {number.toString() } >{ number * 2 }</li>
     });

     return (
       <ul> { doubledValues } </ul>
     );
  }
}


export default App;
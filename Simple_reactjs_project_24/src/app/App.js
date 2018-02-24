import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const doubledValues = numbers.map((number) => { 
      return <li>{ number * 2 }</li>
     });

     return (
       <ul> { doubledValues } </ul>
     );
  }
}
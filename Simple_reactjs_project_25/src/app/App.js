import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberList from './NumberList';


class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
        <h4>Transformed NumberList is: </h4>
        <NumberList numbers = { numbers } />
      </div>
    );
  }
}


export default App;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Reservation/>
      );
  }
}


export default App;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OrbitaryComponent from './OrbitaryComponent';


class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OrbitaryComponent myOrbitraryComponent  = { <h1>Hello, from OrbitaryComponent send from Parent Component </h1> } />
    );
  }
}
export default App;
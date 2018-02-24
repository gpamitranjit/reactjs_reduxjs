import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ControlledFormComponent from './ControlledFormComponent';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <ControlledFormComponent/>
      );
  }
}


export default App;
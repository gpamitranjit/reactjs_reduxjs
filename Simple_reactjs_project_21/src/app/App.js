import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';

// http://stackoverflow.com/questions/39748517/react-es5-vs-es6

console.clear();


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Clock/>
    );
  }
}

export default App;
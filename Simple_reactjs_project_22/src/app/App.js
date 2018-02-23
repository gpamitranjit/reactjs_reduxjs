import React from 'react';
import ReactDOM from 'react-dom';

import LoginControl from './LoginControl';

class App extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return <LoginControl/>
  }
}

export default App;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import PersonDetails from '../components/PersonDetails';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div>
            <Switch>
                <Route exact path = "/" component = { Home } />
                <Route path = "/about" component = { About } />
                <Route path = "/:number" component = { PersonDetails } />
            </Switch>
          </div>
    );
  };

}

export default App;
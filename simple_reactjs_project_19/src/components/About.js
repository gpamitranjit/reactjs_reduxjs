import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div>
          <h1>About Page</h1>
          <Link to = "/">Home</Link>
          </div>
      );
  }
  
}

export default About;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        person:[]
    }
  }


  componentDidMount() {
      const data = [
          {id: '1', name: 'Ranjit'},
          {id: '2', name: 'Amit'},
          {id: '3', name: 'Smita', age: '27'}
      ]

      this.setState({person: data});
  }
  render() {

    const personNode =  this.state.person.map((data) => {
       return  <li key = {data.id} ><Link to = {`/${data.id}`} data = {data}>{data.name}</Link></li>;
    });
      return (
          <div>
          <h1>Home Page</h1>
          <h4>Programmer Details</h4>
          <div>
          {personNode}
          </div>
          <Link to = "/about">About</Link>
          </div>
      );
  }
  
}

export default Home;
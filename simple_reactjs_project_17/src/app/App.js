import React, { Component } from 'react';

import Request from 'superagent';


const urlForUsername = username =>
  `https://api.github.com/users/${username}`

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
          requestFailed: false
        }
    }

    componentDidMount() {
        fetch(urlForUsername("gpamitranjit"))
          .then(response => {
            if (!response.ok) {
              throw Error("Network request failed")
            }
    
            return response
          })
          .then(d => d.json())
          .then(d => {
              console.log(d);
            this.setState({
              githubData: d
            })
          }, () => {
            this.setState({
              requestFailed: true
            })
          })
        }
    
      render() {
    
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.githubData) return <p>Loading...</p>
        return (
          <div>
            <h2>{this.state.githubData.name}</h2>
          </div>
        )
      }
}

export default App;
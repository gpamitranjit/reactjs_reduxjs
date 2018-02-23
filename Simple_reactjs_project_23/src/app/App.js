import React from 'react';
import ReactDOM from 'react-dom';
import WarningBannner from './WarningBannner';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.handleToggleClick = this.handleToggleClick.bind(this);
      this.state = {
        showWarning : true
      };
      
  }

  handleToggleClick() {
    this.setState((prevState, props) => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
        <div>
            <WarningBannner warn = {this.state.showWarning} />
            <button onClick = {this.handleToggleClick}>
            { this.state.showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    );
  }
}

export default App;
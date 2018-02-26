import React from 'react';
import ReactDOM from 'react-dom';

import Repeat from './Repeat';

class App extends React.Component {

  constructor(props) {
      super(props);     
  }

  render()  {
    return (
      <Repeat numTimes = {10} >
        {(index) => <div key = {index}> This is item {index} in the list</div>}
      </Repeat>
    );
  }

}

export default App;
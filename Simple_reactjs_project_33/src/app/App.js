import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';


class App extends React.Component {

  constructor(props) {
      super(props);     
  }

  render()  {
    // this boolean variable will decide if <MyComponent> should be rendered or not based on it's boolean value!
    // when shouldIRender boolean variable's value is false then the subsequent component will not be rendered otherwise it will render the subsequent component
    let shouldIRender = false;
    return (
      <div>
        {shouldIRender && <MyComponent/>}
      </div>
    );
  }

}

export default App;
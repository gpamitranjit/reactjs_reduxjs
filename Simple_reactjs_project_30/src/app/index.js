import React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = {
        Message: function GetMessage(props) {
                return <span>Hello { props.name }!</span>;
        }
}

ReactDOM.render(
<MyComponent.Message name = "Amit"/>
, document.getElementById("app"));
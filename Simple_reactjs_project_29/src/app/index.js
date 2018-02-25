import React from 'react';
import ReactDOM from 'react-dom';

function hello(props) {
        return (
                <div>Hello from { props.towhat }</div>
        );
}

ReactDOM.render(
        <hello towhat = "Amit"/>
, document.getElementById("app"));
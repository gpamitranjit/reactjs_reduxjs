import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';


ReactDOM.render(
// Notice that the passed message is HTML-unescaped value
// more perticlarly message = "<Amit" will be the final value of the passed message
<MyComponent message = "&lt;Amit" />
, document.getElementById("app"));
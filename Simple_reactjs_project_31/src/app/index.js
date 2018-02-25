import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';
import Person from './Person';

const props = {firstName: "Ranjit", lastName: "Patil"};

ReactDOM.render(
// Notice that the passed message is HTML-unescaped value
// more perticlarly message = "<Amit" will be the final value of the passed message

// Notice that when we don't pass any explicit value to the component's attribute ( in this exxmple message is a component attribute) then a default value of boolean true will ve sent to the child component!
// calling <MyComponent message /> is equivalent to below code
// <MyComponent messaage = { true } />

// Using spread Operator to pass the object as in JSX and have the each attribute of the object as properties in the child component
// below code using spread operator
// <Person { ...props } />

<div>
<MyComponent message = "&lt;Amit" />
<MyComponent message/>
<Person firstName = "Amit" lastName = "patil" />
<Person { ...props } />
</div>
, document.getElementById("app"));
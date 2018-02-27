import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';

// this is a reducer function that discribe's on how the dispatched action transforms the state of entire app!
function counter(state = 5, action) {
        switch(action.type) {
                case 'INCREMENT': return state + 1;
                case 'DECREMENT': return state - 1;
                default: return state;
        }
}

// create the redux store using provided reducer!
let store = createStore(counter);

// Triggers when the state of the app the chagnes by the dispached Action!
store.subscribe(() => {
        console.log(store.getState());
});


// Dispatching the action to store
store.dispatch({type: 'INCREMENT'});

store.dispatch({type: 'DECREMENT'});

ReactDOM.render(
        <App/>
, document.getElementById("app"));
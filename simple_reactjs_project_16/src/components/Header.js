import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.

// An Arrow function's body can be either expression or block!!
// If the arrow function's body is expression then we don't have to write return statement explicitly
// () => ()  : this is a arrow function with expression body and hence don't need to return explicitly


// If the arrow function's body is block then we have provide the return statement explicitly.
// () => { return 'some data'; }  :this is arrow function with block body and hence we need to explicitly provide the return statement


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header

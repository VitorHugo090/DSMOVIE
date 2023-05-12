import React from 'react';
import {ReactComponent as GithubIcon} from 'Vector.svg'


function App() {
  return (
   <header>
    <nav className="container">
    <h1>DsMovie</h1>
    
    <a className="navbar-brand" href="#">
      <GithubIcon />
      <h2>/VitorHugo</h2>
    </a>
    </nav>
   </header>


  );
}

export default App;

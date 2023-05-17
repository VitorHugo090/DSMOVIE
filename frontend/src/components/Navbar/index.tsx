import React from 'react';
import {ReactComponent as GithubIcon} from 'Vector.svg'
import './styles.css'


function Navbar(){
    return (
        <header>
         <nav className="container">
         <div className="dsmovid-navbar-content" >
         <h1>DsMovie</h1>
       <a href="">
         <div className="gitclass">
           <GithubIcon />
           <p className="gitclass-contact-link"> /VitorHugo</p>
           </div>
         </a>
         </div>
         </nav>
        </header>);
}

export default Navbar;
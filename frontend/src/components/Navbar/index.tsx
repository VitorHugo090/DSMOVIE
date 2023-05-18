import React from 'react';
import {ReactComponent as GithubIcon} from 'Vector.svg'
import './styles.css'


function Navbar(){
    return (
        <header>
         <nav className="container">
         <div className="dsmovid-navbar-content" >
         <h1>Letterbox - Plataforma Portifólio de Filmes</h1>
       <a href="https://github.com/VitorHugo090">
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
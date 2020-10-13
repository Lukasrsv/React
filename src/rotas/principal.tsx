import React from 'react';
import '../styles/global.css';
import '../styles/pages/landing.css';
import logoimg from '../imagens/Logo.svg';
import {FiArrowRight} from 'react-icons/fi'
import{Link} from 'react-router-dom';

function landing(){
    return (
        <div id="page-landing">
         
        <div className="content-wrapper">
          <img src={logoimg} alt="Happy"></img>
          <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
    
          </main>
          <div className="location">
              <strong>Passo Fundo</strong>
              <span>Rio Grande do Sul</span>
    
          </div>
          <Link to="/app" className="enter-app">
    
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </Link>
    
        </div>
    
    
        </div>
      );

}

export default landing;
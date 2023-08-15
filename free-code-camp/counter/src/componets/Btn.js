import React from 'react';
import PropTypes from "prop-types";

export function Btn({texto, esBtnClick, manejarClic}) {
    return (
      <button 
        className={esBtnClick ? 'boton-clic' : 'boton-reiniciar'}
        onClick={manejarClic}>
          {texto}
      </button>
    );
  }
    
  
  

  Btn.propTypes = {
    texto: PropTypes.string.isRequired
  };
  
  Btn.defaultProps = { 
    texto: "+1"
  };
    
    /*
    { user_avatar, user_name, user_review }) => {
    return (
      <article className="review-box">
        <img src={user_avatar} className="App-logo" alt={`foto de ${user_name}` }/>
        <div className="App-text">
          <h3 className="review-title">{user_name}</h3>
          <p className="review-test">"{user_review}"</p>
        </div>
      </article>
    );
  };
  
  
  
  */
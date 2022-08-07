import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import "./card.css";

async function handleClick(idPaseador){
  let idDog= '62aa7d42959a6bde1d556a7b';
  let dataSend= {"id_dog": idDog,
  "id_dogwalker": idPaseador,
  "estado": true};
  try{
    let config= {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(dataSend),
    }
    let res = fetch('https://apirest-streetpaws.herokuapp.com/api/transaction', config);
    let json = res.json();
    console.log(json)
  }catch{

  }
  console.log(idPaseador);
}

function Card({ imageSource, nameC, text, url, idPaseador }) {
  
    
  return (
    <div className="card">
      <div class="head">
        <div class="circle"></div>
        <div class="img">
          <img src={imageSource} alt="" />
        </div>
        </div>
        <div class="description">
        <h4 className="card-title">{nameC}</h4>
        <p className="card-text text-secondary">
          {text
            ? "Calificación: " + text
            : "Sin calificación"}
        </p>
        </div>
        <div class="contact">
        <a
          onClick={() => handleClick(idPaseador)}
          target="_blank"
          className="btn"
          rel="noreferrer"
        >
          Contactar con {nameC}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  nameC: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
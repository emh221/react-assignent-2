import React from 'react';
import './Char.css';

const char = (props) => {

  let lettersList = props.letters

  return(
    <div className = 'Char'
    onClick ={props.clicked}
    >
      {props.character}

    </div>
  )
}


export default char;

import React from 'react';
import BasketIcon from '../componets/BasketIcon';
import './main.css';

const MainTemplate = ({children}) => {
  
  return (
    <div>
      <div id="title" style={{display: "flex", justifyContent: "space-between", margin: "30px"}}>
        <img src='/img/logo.svg'></img>
        <BasketIcon />
      </div>
      {children}
    </div>
  )
}

export default MainTemplate;
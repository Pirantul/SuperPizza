import React from 'react';
import Basket from '../Basket';

const BasketIcon = ({basketCount}) => {
  return (
    <div  id="basket-icon" 
          onClick={Basket.handleOpen}
          style={{
            position: "relative",
            width: "75px",
            height: "75px",
            backgroundImage: "url(/img/basket.jpg)"
            }}>
      <span id="in-basket"
          style={{
            position: "absolute",
            left: basketCount > 9 ? "28px" : "37px" ,
            bottom: "52px",
            color: "#e63547",
            fontSize: "25px",
            fontWeight: "bold"
          }}>
        {basketCount}
      </span>
    </div>
  )
}

export default BasketIcon;
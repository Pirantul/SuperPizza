import React from 'react';

const BasketIcon = ({inBasket = 0}) => {
  return (
    <div  id="basket-icon" 
          style={{
            position: "relative",
            width: "100px",
            height: "100px",
            backgroundImage: "url(/img/basket.jpg)"
            }}>
      <span id="in-basket"
          style={{
            position: "absolute",
            left: inBasket > 9 ? "42px" : "50px" ,
            bottom: "75px",
            color: "#e63547",
            fontSize: "25px",
            fontWeight: "bold"
          }}>
        {inBasket}
      </span>
    </div>
  )
}

export default BasketIcon;
import React from 'react';
import { Button } from  "@material-ui/core";
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import getCurrencyRate from '../../../currency-rate.json';
import OrderForm from '../Basket/OrderForm/OrderForm';
import ConfirmForm from '../Basket/ConfirmForm/ConfirmForm';

const Total = ({total, sendOrder, productsInBasket}) => {

  const [open, setOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const visibled = +total > 0 ? 'visible' : 'hidden';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    setOpen(false);
    setConfirmOpen(true);
  };

  const handleClickConfirmClose = () => {
    setConfirmOpen(false);
    sendOrder();
  };
  
  return (
    <>
      <hr />
      <div style={{display: "flex", justifyContent: "space-between", visibility: visibled}}>
        <Link to='/'>
          <Button variant="contained" 
                  className="btn-sale" 
                  color="secondary"
                  style={{visibility: "visible"}}
                  >BACK
          </Button>
        </Link>
        <ConfirmForm confirmOpen={confirmOpen} handleClickConfirmClose={handleClickConfirmClose} productsInBasket={productsInBasket} />
        <OrderForm  open={open} 
                    handleSend={handleSend} 
                    handleClickOpen={handleClickOpen} 
                    handleClose={handleClose} 
                    />
        <div style={{ display: "flex", 
                      fontSize: "1.25rem", 
                      justifyContent: "flex-end" 
                      }}>
            Total:
            <div className="price" style={{ fontSize: "1.25rem" }}>
              <CurrencyFormat prefix={'€'} 
                              displayType={'text'} 
                              value={ (+total).toFixed(2) }  />
            </div>
            <CurrencyFormat prefix={'$ ('} 
                            suffix={')'} 
                            displayType={'text'} 
                            value={ (+total * getCurrencyRate.EURUSD).toFixed(2) } 
                            style={{fontSize:"1rem", marginLeft: "10px", lineHeight: "1.75rem"}} />
          </div>

        </div>
    </>
  )
}

export default Total;

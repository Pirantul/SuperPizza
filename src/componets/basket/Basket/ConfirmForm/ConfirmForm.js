import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmForm({ handleClickConfirmClose, confirmOpen, handleSend, productsInBasket }) {

  return (
    <div>
      <Dialog open={confirmOpen} onClose={handleSend} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Order</DialogTitle>
        <DialogContent>
          Your order has been sent!
        </DialogContent>
        <DialogContentText>
          {productsInBasket.map((product, i) =>{
            return (
              <div key={product.name} style={{margin: "15px"}}>
                <div>{`${i+1}. ${product.name} - ${product.count} pc.`}</div>
              </div>
            )
          })}
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClickConfirmClose} color="primary">
            Ok
          </Button>
          
        </DialogActions>
      </Dialog>
      
    </div>
  );
}

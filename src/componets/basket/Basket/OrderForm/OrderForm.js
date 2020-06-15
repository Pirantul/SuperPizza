import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function OrderForm({ open, handleClickOpen, handleClose }) {

  return (
    <div>
      <Button variant="contained" color="primary" style={{color: "#fff"}} onClick={handleClickOpen}>
        Order
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the contact information.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="first-name"
            label="First name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="last-name"
            label="Last name"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="last-name"
            label="Address"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="tel"
            label="Tel. number"
            type="tel"
            fullWidth
          />
          <TextField
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

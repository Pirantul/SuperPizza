import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function OrderForm({ open, handleClickOpen, handleClose, handleSend  }) {

  const [fields, setFields] = useState({firstName: ['', false],
                                        address: ['', false],
                                        tel: ['', false]
                                        });
  
  const handleChange = (event, name = '', value = '') => {
    name = event ? event.target.name : name;
    value = event ? event.target.value : value;
    setFields({...fields, [name]: [value, value ? false : true]});
  }

  const handleSubmit = () => {
    this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  }

  const handleSendForm = () => {
    
    for (let key in fields) {
      if ( fields[key][0] === '') {
        handleChange('', key, '');
        return;
      }
    }
    handleSend();
  }

  return (
    <div>
      <Button variant="contained" color="primary" style={{color: "#fff"}} onClick={handleClickOpen}>
        Order
      </Button>
      <Dialog open={open} onSubmit={handleSubmit} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the contact information.
          </DialogContentText>
            <TextField
              autoFocus
              required
              error={fields.firstName[1]}
              onChange={handleChange}
              margin="dense"
              id="first-name"
              name="firstName"
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
              error={fields.address[1]}
              onChange={handleChange}
              margin="dense"
              id="address"
              name="address"
              label="Address"
              type="text"
              fullWidth
            />
            <TextField
              required
              error={fields.tel[1]}
              onChange={handleChange}
              margin="dense"
              id="tel"
              name="tel"
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
            <Button onClick={handleSendForm} color="primary">
              Order
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}

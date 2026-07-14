import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const emptyForm = {
  firstName: "",
  lastName: "",
  address: "",
  tel: "",
  comment: "",
};

export default function OrderForm({ open, onOpen, onClose, onSubmit }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSendForm = () => {
    const nextErrors = {
      firstName: !form.firstName.trim(),
      address: !form.address.trim(),
      tel: !form.tel.trim(),
    };

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    onSubmit(form);
    setForm(emptyForm);
    setErrors({});
  };

  const handleClose = () => {
    onClose();
    setErrors({});
  };

  return (
    <>
      <Button variant="contained" color="primary" sx={{ color: "#fff" }} onClick={onOpen}>
        Order
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="order-form-title">
        <DialogTitle id="order-form-title">Order</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Please fill in the contact information.
          </DialogContentText>
          <TextField
            autoFocus
            required
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? "First name is required" : ""}
            onChange={handleChange}
            margin="dense"
            id="first-name"
            name="firstName"
            label="First name"
            value={form.firstName}
            fullWidth
          />
          <TextField
            margin="dense"
            id="last-name"
            name="lastName"
            label="Last name"
            value={form.lastName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            required
            error={Boolean(errors.address)}
            helperText={errors.address ? "Address is required" : ""}
            onChange={handleChange}
            margin="dense"
            id="address"
            name="address"
            label="Address"
            value={form.address}
            fullWidth
          />
          <TextField
            required
            error={Boolean(errors.tel)}
            helperText={errors.tel ? "Phone number is required" : ""}
            onChange={handleChange}
            margin="dense"
            id="tel"
            name="tel"
            label="Tel. number"
            type="tel"
            value={form.tel}
            fullWidth
          />
          <TextField
            margin="dense"
            id="comment"
            name="comment"
            label="Comment"
            value={form.comment}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendForm} variant="contained">
            Send order
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

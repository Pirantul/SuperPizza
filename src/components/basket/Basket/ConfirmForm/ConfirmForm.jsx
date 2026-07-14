import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ConfirmForm({ open, onClose, productsInBasket }) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="confirm-order-title">
      <DialogTitle id="confirm-order-title">Order sent</DialogTitle>
      <DialogContent>
        <p>Your order has been sent. Thank you!</p>
        <List dense>
          {productsInBasket.map((product) => (
            <ListItem key={`${product.name}-${product.size}`} disableGutters>
              <ListItemText
                primary={`${product.name} (${product.size} cm)`}
                secondary={`${product.count} pc · €${(Number(product.price) * product.count).toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

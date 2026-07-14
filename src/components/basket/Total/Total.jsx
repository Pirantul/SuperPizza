import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utils/formatCurrency";
import getCurrencyRate from "../../../currency-rate.json";
import OrderForm from "../Basket/OrderForm/OrderForm";
import ConfirmForm from "../Basket/ConfirmForm/ConfirmForm";

export default function Total({ total, onClearCart, productsInBasket }) {
  const [orderOpen, setOrderOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const hasItems = Number(total) > 0;

  const handleSubmitOrder = () => {
    setOrderOpen(false);
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
    onClearCart();
  };

  if (!hasItems) return null;

  return (
    <>
      <hr />
      <div className="total-bar">
        <Link to="/">
          <Button variant="contained" className="btn-sale" color="secondary">
            BACK
          </Button>
        </Link>

        <div className="total-bar__amount">
          Total:
          <div id="total-price-line">
            <div className="price" style={{ fontSize: "1.25rem" }}>
              {formatCurrency(total)}
            </div>
            <span style={{ fontSize: "1rem", marginLeft: "10px", lineHeight: "1.75rem" }}>
              {formatCurrency(Number(total) * Number(getCurrencyRate.EURUSD), {
                prefix: "$ (",
                suffix: ")",
              })}
            </span>
          </div>
        </div>

        <OrderForm
          open={orderOpen}
          onOpen={() => setOrderOpen(true)}
          onClose={() => setOrderOpen(false)}
          onSubmit={handleSubmitOrder}
        />
        <ConfirmForm
          open={confirmOpen}
          onClose={handleConfirmClose}
          productsInBasket={productsInBasket}
        />
      </div>
    </>
  );
}

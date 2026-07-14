import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import BasketIcon from "../components/home/BasketIcon";
import "../templates/main.css";

export default function MainTemplate({ children, basketCount }) {
  return (
    <Container className="layout-no-padding">
      <div id="title" className="layout-header">
        <Link to="/" className="layout-logo-link" aria-label="Super Pizza home">
          <img src="/img/logo.svg" alt="Super Pizza" />
        </Link>
        <Link to="/basket" className="layout-basket-link" aria-label="Open basket">
          <BasketIcon basketCount={basketCount} />
        </Link>
      </div>
      {children}
    </Container>
  );
}

import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import BasketIcon from "../components/home/BasketIcon";
import Footer from "./Footer";
import { assetUrl } from "../utils/assetUrl";
import "../templates/main.css";

export default function MainTemplate({ children, basketCount }) {
  return (
    <div className="layout-page">
      <Container className="layout-no-padding layout-page__container">
        <div id="title" className="layout-header">
          <Link to="/" className="layout-logo-link" aria-label="Super Pizza home">
            <img src={assetUrl("img/logo.jpg")} alt="Super Pizza" />
          </Link>
          <Link to="/basket" className="layout-basket-link" aria-label="Open basket">
            <BasketIcon basketCount={basketCount} />
          </Link>
        </div>
        <main className="layout-main">{children}</main>
      </Container>
      <Footer />
    </div>
  );
}

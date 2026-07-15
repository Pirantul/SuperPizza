import { Link } from "react-router-dom";
import packageJson from "../../package.json";
import { assetUrl } from "../utils/assetUrl";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img
            src={assetUrl("img/logo.jpg")}
            alt=""
            className="site-footer__logo"
            aria-hidden="true"
          />
          <p className="site-footer__tagline">
            Demo pizza shop — a test project for React, Vite, and Material UI.
          </p>
        </div>

        <div className="site-footer__links">
          <Link to="/">Menu</Link>
          <Link to="/basket">Cart</Link>
          <a
            href="https://github.com/Pirantul/SuperPizza"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </div>

        <div className="site-footer__meta">
          <span>Not a real pizzeria — prices and orders are for demo only.</span>
          <span className="site-footer__version">
            © {year} Super Pizza · v{packageJson.version}
          </span>
        </div>
      </div>
    </footer>
  );
}

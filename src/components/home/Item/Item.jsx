import { useState } from "react";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Item({ product, onAddToCart }) {
  const [sizeIndex, setSizeIndex] = useState(0);

  const handleSize = (_event, newSize) => {
    if (newSize === null) return;
    setSizeIndex(newSize);
  };

  const selectedSize = product.sizes[sizeIndex];

  return (
    <div className="product centered">
      <div style={{ margin: "auto" }}>
        <img
          src={`/img/${product.picture}`}
          alt={product.name}
          title={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <div className="product-info-title">
          <div className="product-info-name">{product.name}</div>
          <div className="product-weight">
            <div className="product-info-descr-title">Ingredients:</div>
            <div style={{ display: "flex" }}>
              <div className="icon-weight" aria-hidden="true" />
              <span className="weight-value">{selectedSize?.weight} g</span>
            </div>
          </div>
        </div>
        <div className="product-info-block">
          <div className="product-description">
            <span>
              {product.description.length > 120
                ? `${product.description.slice(0, 120)}…`
                : product.description}
            </span>
          </div>
        </div>

        <div className="product-info-block">
          <div className="product-size-label">
            Size <span>(cm)</span>:
          </div>
          <ToggleButtonGroup
            value={sizeIndex}
            exclusive
            onChange={handleSize}
            className="centered btn"
            aria-label="Pizza size"
          >
            {product.sizes.map((sizeItem, index) => (
              <ToggleButton key={sizeItem.size} className="btn-group" value={index}>
                {sizeItem.size}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <div className="btn-price-container">
            <Button
              variant="outlined"
              className="btn-sale"
              color="primary"
              onClick={() => onAddToCart(product, sizeIndex)}
            >
              BUY
            </Button>
            <div className="price">
              <span>
                <small>€</small> {selectedSize?.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

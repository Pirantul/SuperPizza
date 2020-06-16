import React, {useState} from "react";
import { Button} from  "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from  "@material-ui/lab";
import { Col } from "react-material-responsive-grid";

const Item = ({ product, onClickSale }) => {

  const [size, setSize] = useState(0);
  const handleSize = (event, newSize) => {
    if (newSize === null) return;    
    setSize(newSize);
  };

    return (
        <Col className="centered" sx={12} sm={6} md={4} lg={3}>
            <div className="product">
                <div style={{ margin: "auto" }}>
                    <img
                        srcSet={`./img/${product.picture}`}
                        alt={`${product.name}`}
                        title={`${product.name}`}
                        className="product-image"
                    />
                </div>
                <div className="product-info">
                    <div className="product-info-title">
                        <div className="product-info-name">{product.name}</div>
                        <div className="product-weight">
                            <div className="product-info-descr-title">
                                Ingradients:
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="icon-weight"></div>
                                <span className="weight-value">{product.sizes[size]?.weight}</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-info-block">
                        <div className="product-description">
                            <span>
                                {product.description.length > 120
                                    ? product.description.substr(0, 120) + "..."
                                    : product.description}
                            </span>
                        </div>
                    </div>

                    <div className="product-info-block">
                        <div
                            style={{
                                fontSize: "11pt",
                                color: "#7d7d7d",
                                textAlign: "start",
                            }}
                        >
                            Size <span style={{fontSize: "smaller"}}>(sm.)</span>:
                        </div>
                        <ToggleButtonGroup
                            value={size}
                            exclusive
                            onChange={handleSize}
                            className="centered btn"
                        >
                          { product.sizes?.map((sizeItem, i) => {
                          return  <ToggleButton key={sizeItem.size} className="btn-group" value={i}>{sizeItem.size}</ToggleButton>
                        })}
                        
                        </ToggleButtonGroup>
                        <div className="btn-price-container">
                            <Button variant="outlined" 
                                    className="btn-sale" 
                                    color="primary"
                                    onClick={() => onClickSale(product, size)}
                                    >BUY</Button>
                            <div className="price">
                                <span>
                                <small>€</small> {product.sizes[size].price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Item;

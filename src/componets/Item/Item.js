import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';

const Item = ({product, onClickSizeBtn}) => {

  
  return (

          <Col className="centered" sx={12} sm={6} md={4} lg={3} >
            <div className="product">
              <div style={{margin: "auto"}}>
                <img
                  srcSet={`./img/${product.picture}`}
                  alt={`${product.name}`}
                  title={`${product.name}`}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <div className="product-info-title">
                  <div className="product-info-name">
                  {product.name}
                  </div>
                  <div className="product-weight">
                    <div className="product-info-descr-title">
                      Ingradients:
                    </div>
                    <div style={{display: "flex"}}>
                      <div className="icon-weight"></div>
                      <span className="weight-value">700</span>
                    </div>
                  </div>
                </div>
                <div className="product-info-block">
                  <div className="product-description">
                    <span>
                      {product.description.length > 120? product.description.substr(0, 120) + "...": product.description}
                    </span>
                  </div>
                </div>

                <div className="product-info-block">
                  <div style={{fontSize: "11pt", color: "#7d7d7d", textAlign: "start"}}>Size (sm.):</div>
                  <ButtonGroup color="secondary" aria-label="outlined primary button group" className="centered">
                    <Button onClick={onClickSizeBtn} className="pressed">25</Button>
                    <Button onClick={onClickSizeBtn}>30</Button>
                    <Button onClick={onClickSizeBtn}>40</Button>
                  </ButtonGroup>
                  
                </div>
              </div>
            </div>
          </Col>
      
  )
}

export default Item
import React from 'react';
import {Container} from '@material-ui/core';
import MainTemplate from '../../../templates/Main';
import ProductsList from '../ProductsList/ProduktsList';
import { makeStyles } from '@material-ui/core/styles';

const Basket = ({ total, basketCount, productsInBasket, onClickChangeProduct }) => {

  const useStyles = makeStyles({

    "@media (max-width: 500px)": {
      noPadding: {
        padding: "0"
    } 
    }
  });

  const classes = useStyles();

  return (
    <MainTemplate basketCount={basketCount}>
      <Container  className={classes.noPadding}>
        <ProductsList total={total}  productsInBasket={productsInBasket} onClickChangeProduct={onClickChangeProduct} />
      </Container>
    </MainTemplate>
  )
}

export default Basket;
import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './componets/Home';
import Basket from './componets/Basket';

function App() {

  const [productsInBasket, setProductsInBasket] = useState([]);
  const [basketCount, setBasketCount] = useState(0);

  const onClickSale = ( {name, description, picture, sizes}, i) => {
    
    const size = sizes[i].size;
    const weight = sizes[i].weight;
    const price = sizes[i].price;

    setBasketCount(basketCount + 1);
    onClickChangeProduct({name, description, picture, size, weight, price, action: 'INC'})
  }

  const onClickChangeProduct = ( {name, description, picture, size, weight, price, action}) => {
    
    let count = productsInBasket.filter(prodObj => {
      return (prodObj.name === name && prodObj.size === size)
    })[0]?.count;
    
    let productsForUpdate = productsInBasket;

    if (count) {
      productsForUpdate = productsInBasket.filter(prodObj => {
        return !(prodObj.name === name && prodObj.size === size)
      });
      if (action === 'INC') {
        count++;
        setBasketCount(basketCount + 1);
      }
      if (action === 'DEC' && count > 1) {
        count--;
        setBasketCount(basketCount - 1);
      }
    } 

    if (action === 'DEL') {
      setBasketCount(basketCount - count);
      setProductsInBasket([
        ...productsForUpdate
      ])
    } else {
      setProductsInBasket([
        ...productsForUpdate, {
        name, 
        description, 
        picture, 
        size, 
        weight, 
        price,
        count: count ? count : 1
      }])
    }
  }

  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' render={ () => <Home basketCount={basketCount} onClickSale={onClickSale} />} />
        <Route path='/basket' render={ () => <Basket basketCount={basketCount} productsInBasket={productsInBasket} onClickChangeProduct={onClickChangeProduct} />} />
      </Switch>
    </HashRouter>
  );
}

export default App;

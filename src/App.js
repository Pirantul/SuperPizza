import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './componets/Home';
import Basket from './componets/Basket';

function App() {

  const [productsInBasket, setProductsInBasket] = useState([]);
  const [basketCount, setBasketCount] = useState(0);

  const onClickSale = ( {name, description, picture, sizes}, i) => {
    
    setBasketCount(basketCount + 1);

    const includeInBasket = productsInBasket.filter(prodObj => {
      return (prodObj.name === name && prodObj.size === sizes[i].size)
    });
    let count = includeInBasket[0]?.count;
    
    if (count) {
      const withoutThisObj = productsInBasket.filter(prodObj => {
        return !(prodObj.name === name && prodObj.size === sizes[i].size)
      });
      count++

      setProductsInBasket([
        ...withoutThisObj, {
        name, 
        description, 
        picture, 
        size: sizes[i].size, 
        weight: sizes[i].weight, 
        price: sizes[i].price,
        count: count
      }])
    } else {
      setProductsInBasket([
        ...productsInBasket, {
        name, 
        description, 
        picture, 
        size: sizes[i].size, 
        weight: sizes[i].weight, 
        price: sizes[i].price,
        count: 1
      }])
    }
  }

  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' render={ () => <Home basketCount={basketCount} onClickSale={onClickSale} />} />
        <Route path='/basket' render={ () => <Basket basketCount={basketCount} productsInBasket={productsInBasket} />} />
      </Switch>
    </HashRouter>
  );
}

export default App;

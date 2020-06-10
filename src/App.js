import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './componets/Home';
import Basket from './componets/Basket';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/basket' component={Basket}/>
      </Switch>
    </HashRouter>
  );
}

export default App;

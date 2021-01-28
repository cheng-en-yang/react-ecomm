import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shop.component.jsx';
import Header from './components/Header/header.component';
import SingInAndSignUpPage from '../src/pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SingInAndSignUpPage} />
      </Switch>
    </BrowserRouter>
  )
}


export default App;

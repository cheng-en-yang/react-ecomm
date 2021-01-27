import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shop.component.jsx';
import Header from './components/Header/header.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </BrowserRouter>
  )
}


export default App;

import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shop.component.jsx';
import Header from './components/Header/header.component';
import SingInAndSignUpPage from '../src/pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from '../src/firebase/fitebase.utils';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          console.log(this.state)
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SingInAndSignUpPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;

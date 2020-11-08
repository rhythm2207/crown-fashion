import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shopPage/shopPage'
import Header from './components/header/header'
import SignInOut from './pages/signin-and-out/signin-and-out'
import { auth } from './firebase/firebase.utils'


class App extends React.Component {

  constructor() {
    super();

    this.state = {

    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInOut} />
        </Switch>
      </div>
    );
  }
}

export default App;

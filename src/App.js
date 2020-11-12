import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shopPage/shopPage'
import Header from './components/header/header'
import SignInOut from './pages/signin-and-out/signin-and-out'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {

  constructor() {
    super();

    this.state = {

    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })

      }
      else {
        this.setState({
          currentUser: userAuth
        })
      }

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

import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shopPage/shopPage'
import Header from './components/header/header'
import SignInOut from './pages/signin-and-out/signin-and-out'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }
      else {
        this.props.setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser
              ? (<Redirect to='/' />)
              : <SignInOut />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

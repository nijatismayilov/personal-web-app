import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import {
  auth,
  createUserProfileDocument
} from './firebase/firebae.utils';
import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import SideBar from './components/side-bar/side-bar.component';

import './styles/main.scss';

class App extends React.Component {
  unsbscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    })


  }

  componentWillUnmount() {
    this.unsbscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <SideBar />
          <HomePage />
        </div>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispathToProps)(App);

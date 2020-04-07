import React from 'react';
import { connect } from 'react-redux';

import './styles/main.scss';

import {
  auth,
  createUserProfileDocument
} from './firebase/firebae.utils';
import { setCurrentUser } from './redux/user/user.actions';

import WithSpinner from './components/with-spinner/with-spinner.component';

import HomePage from './pages/homepage/homepage.component';
import SideBar from './components/side-bar/side-bar.component';

const AppBody = () => (
  <div className = "row">
    <SideBar />
    <HomePage />
  </div>
)

const AppWithSpinner = WithSpinner(AppBody)

class App extends React.Component {
  state = {
    isLoading: true
  }

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

      this.setState({ isLoading: false });
    })


  }

  componentWillUnmount() {
    this.unsbscribeFromAuth();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="app">
        <AppWithSpinner isLoading={isLoading} />
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispathToProps)(App);

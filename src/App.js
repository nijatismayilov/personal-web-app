import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from './firebase/firebae.utils';
import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import SideBar from './components/side-bar/side-bar.component';

import './styles/main.scss';

class App extends React.Component {
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

const mapStateToProps = createStructuredSelector({
  currentUser: setCurrentUser
})

export default connect(mapStateToProps)(App);

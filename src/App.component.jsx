import React from 'react';
import { connect } from 'react-redux';

import './styles/main.scss';

import {
  auth,
  createUserProfileDocument
} from './firebase/firebae.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { fetchAboutsStart } from './redux/about/about.actions';
import { fetchInterviewsStart } from './redux/interviews/interviews.actions';
import { fetchTelevisionItemsStart } from './redux/television/television.actions';

import WithSpinner from './components/with-spinner/with-spinner.component';

import Main from './pages/main/main.component';
import SideBar from './components/side-bar/side-bar.component';

const AppBody = () => {
    return (
        <div className="row">
            <SideBar />
            < Main / >
        </div>
    );
};

const AppWithSpinner = WithSpinner(AppBody);

class App extends React.Component {
  state = {
    isLoading: true
  }

  unsbscribeFromAuth = null;

    componentDidMount() {
        const {
            setCurrentUser,
            fetchAboutsStart,
            fetchInterviewsStart,
            fetchTelevisionItemsStart
        } = this.props;

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

        fetchAboutsStart();
        fetchInterviewsStart();
        fetchTelevisionItemsStart();
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
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchAboutsStart: () => dispatch(fetchAboutsStart()),
  fetchInterviewsStart: () => dispatch(fetchInterviewsStart()),
  fetchTelevisionItemsStart: () => dispatch(fetchTelevisionItemsStart())
})

export default connect(null, mapDispathToProps)(App);

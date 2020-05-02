import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUserIsAdmin } from '../../redux/user/user.selectors';

import BurgerBtn from '../../components/burger-btn/burger-btn.component';
import Home from '../home/home.component';
import About from '../about/about.component';
import SitesAndNewspapers from '../sites-and-newspapers/sites-and-newspapers.component';
import Television from '../television/television.component';
import ScientificWork from '../scientific-work/scientific-work.component';
import SignIn from '../sign-in/sign-in.component';
import AdminPanel from '../admin-panel/admin-panel.component';

import './main.styles.scss';

const Main = ({ isAdmin }) => {
  return (
    <div className="main-component">
      <BurgerBtn />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/sites" component={SitesAndNewspapers} />
        <Route path="/tv" component={Television} />
        <Route path="/scientific" component={ScientificWork} />
        <Route path="/signin" render={() =>  <SignIn />} />
        <Route path="/admin" render={() => isAdmin ? <AdminPanel /> : <Redirect to="/" />} />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isAdmin: selectUserIsAdmin
})

export default connect(mapStateToProps)(Main);
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser, selectUserIsAdmin } from '../../redux/user/user.selectors';

import About from '../../components/about/about.component';
import SitesAndNewspapers from '../../components/sites-and-newspapers/sites-and-newspapers.component';
import Television from '../../components/television/television.component';
import ScientificWork from '../../components/scientific-work/scientific-work.component';
import SignIn from '../../components/sign-in/sign-in.component';
import AdminPanel from '../../components/admin-panel/admin-panel.component';

const HomePage = ({ currentUser, isAdmin }) => {
    return (
        <div className="homepage col-md-9">
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/sites" component={SitesAndNewspapers} />
            <Route path="/tv" component={Television} />
            <Route path="/scientific" component={ScientificWork} />
            <Route path="/signin" render={() =>  <SignIn />} />
            <Route path="/admin" render={() => isAdmin ? <AdminPanel /> : <Redirect to="/" />} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isAdmin: selectUserIsAdmin
})

export default connect(mapStateToProps)(HomePage);
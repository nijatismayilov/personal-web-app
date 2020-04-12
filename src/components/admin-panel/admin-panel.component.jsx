import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import AdminPanelItemsContainer from '../admin-panel-items-container/admin-panel-items-container.component';

class AdminPanel extends React.Component {
  render() {
    const { history, match } = this.props;
    return (
      <section className="admin-panel main">
        <h1 className="heading-primary m-b-3">Admin Panel</h1>

        <div className="admin-panel__content">
          <div className="row m-b-6">
            <button
              className="admin-panel-control col-md-3"
              onClick={() => history.push(`${match.path}/about`)}
            >
              <div className="admin-panel-control__content">haqqımda</div>
            </button>

            <button
              className="admin-panel-control col-md-3"
              onClick={() => history.push(`${match.path}/interviews`)}
            >
              <div className="admin-panel-control__content">
                saytlarda və qəzetlərdə çıxışlarım
                  </div>
            </button>

            <button
              className="admin-panel-control col-md-3"
              onClick={() => history.push(`${match.path}/television`)}
            >
              <div className="admin-panel-control__content">
                televiziyada çıxışlarım
                  </div>
            </button>

            <button
              className="admin-panel-control col-md-3"
              onClick={() => history.push(`${match.path}/scientific`)}
            >
              <div className="admin-panel-control__content">
                elmi fəaliyyətim
                  </div>
            </button>
          </div>

          <div className="admin-panel__items">
            <Route exact path={`${match.path}`} render={() => null} />
            <Route
              path={`${match.path}/:containerID`}
              component={AdminPanelItemsContainer}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(AdminPanel);
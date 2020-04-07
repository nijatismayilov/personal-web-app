import React from 'react';
import { connect } from 'react-redux';

import { selectPartOfState, selectKeysOfPartOfState } from "../../redux/root-selector";

import AdminPanelItem from '../admin-panel-item/admin-panel-item.component';
import AdminPanelBtn from '../admin-panel-btn/admin-panel-btn.component';

const AdminPanelItemsContainer = ({ items, keys }) => {
    console.log(keys);
    console.log(items);

    return (
      <div className="admin-panel__items-container">
        <div className="admin-panel__items-container-top">
          <AdminPanelBtn title="əlavə et" />
        </div>

        {
            keys.map(key => (
                items[key].map(({ id, title }) => (
                    <AdminPanelItem id={id} title={title} />
                ))
            ))
        }
      </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
  items: selectPartOfState(ownProps.match.params.containerID)(state),
  keys: selectKeysOfPartOfState(ownProps.match.params.containerID)(state)
});

export default connect(mapStateToProps)(AdminPanelItemsContainer);
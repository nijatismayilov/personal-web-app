import React from 'react';

import AdminPanelBtn from '../admin-panel-btn/admin-panel-btn.component';

const AdminPanelItem = ({ title }) => {
    return (
        <div className="admin-panel-item">
            <h3 className="admin-panel-item__title">
                {title}
            </h3>

            <div className="admin-panel-item__btns">
                <AdminPanelBtn title={'yenilə'} />
                <AdminPanelBtn title={'sil'} />
            </div>
        </div>
    )
}

export default AdminPanelItem
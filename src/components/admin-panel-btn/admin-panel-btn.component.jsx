import React from 'react';

const AdminPanelBtn = ({ title, type }) => {
    return (
        <button className="admin-panel-item__btn">
            {title}
        </button>
    );
}

export default AdminPanelBtn;
import React from 'react';

const AdminPanelItem = ({ id, title }) => {
    return (
        <div className="admin-panel-item">
            <h3 className="admin-panel-item__title">
                {title}
            </h3>

            <div className="admin-panel-item__btns">
                <button className="admin-panel-item__btn">
                    yenilə
                </button>

                <button className="admin-panel-item__btn">
                    sil
                </button>
            </div>
        </div>
    )
}

export default AdminPanelItem
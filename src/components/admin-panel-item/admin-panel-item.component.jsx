import React from 'react'

const AdminPanelItem = ({ title }) => {
    return (
        <div className="admin-panel-item col-md-4">
            <div className="admin-panel-item__content">
                <h2 className="admin-panel-item__title">{title}</h2>

                <div className="admin-panel-item__btns">
                    <button className="admin-panel-item__btn admin-panel-item__btn--add">
                        <span>{String.fromCharCode(43)}</span>
                        əlavə et
                    </button>
                    <button className="admin-panel-item__btn admin-panel-item__btn--update">
                        <span>{String.fromCharCode(8635)}</span>
                        yenilə
                    </button>
                    <button className="admin-panel-item__btn admin-panel-item__btn--delete">
                        <span>{String.fromCharCode(215)}</span>
                        sil
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminPanelItem;
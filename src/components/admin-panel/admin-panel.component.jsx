import React from 'react';

import AdminPanelItem from '../admin-panel-item/admin-panel-item.component';

class AdminPanel extends React.Component {
    constructor() {
        super();

        this.state = {
            adminItems: [
                {
                    id: 1,
                    title: 'haqqımda'
                },
                {
                    id: 2,
                    title: 'saytlarda və qəzetlərdə çıxışlarım'
                },
                {
                    id: 3,
                    title: 'televiziyada çıxışlarım'
                },
                {
                    id: 4,
                    title: 'elmi fəaliyyətim'
                }
            ]
        }
    }

    render() {
        const { adminItems } = this.state;

        return (
            <section className="admin-panel main">
                <h1 className="heading-primary m-b-3">Admin Panel</h1>

                <div className="admin-panel__content container">
                    <div className="row">
                        {
                            adminItems.map(({ id, title }) => (
                                <AdminPanelItem key={id} title={title} />
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default AdminPanel;
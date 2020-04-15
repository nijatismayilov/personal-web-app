import React from 'react';
import { connect } from 'react-redux';

import { fetchAboutsStart } from '../../redux/about/about.actions';
import { fetchInterviewsStart } from '../../redux/interviews/interviews.actions';
import { fetchTelevisionItemsStart } from '../../redux/television/television.actions';

import { deleteItemDocument } from '../../firebase/firebae.utils';

class AdminPanelItem extends React.Component {
    handleDelete = async (collection, id) => {
        const { 
            fetchAboutsStart, 
            fetchInterviewsStart, 
            fetchTelevisionItemsStart
        } = this.props;

        try {
            await deleteItemDocument(collection, id);
            alert("Succesfully deleted");

            if (collection === 'abouts') fetchAboutsStart();
            else if (collection === 'interviews') fetchInterviewsStart();
            else if (collection === 'television') fetchTelevisionItemsStart();

        } catch (error) {
            alert(`Error : ${error.message}`);
        }
    }

    render() {
        const { collection, id, title } = this.props;

        return (
            <div className="admin-panel-item">
                <h3 className="admin-panel-item__title">
                    {title}
                </h3>

                <div className="admin-panel-item__btns">
                    <button 
                        className="admin-panel-item__btn" 
                        onClick={() => this.handleDelete(collection, id)}
                    >
                        sil
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAboutsStart: () => dispatch(fetchAboutsStart()),
    fetchInterviewsStart: () => dispatch(fetchInterviewsStart()),
    fetchTelevisionItemsStart: () => dispatch(fetchTelevisionItemsStart())
})

export default connect(null, mapDispatchToProps)(AdminPanelItem)
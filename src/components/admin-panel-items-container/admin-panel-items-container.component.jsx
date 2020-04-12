import React from 'react';
import { connect } from 'react-redux';

import { createItemDocument } from '../../firebase/firebae.utils';

import { selectPartOfState, selectKeysOfPartOfState } from "../../redux/root-selector";

import AdminPanelItem from '../admin-panel-item/admin-panel-item.component';

class AdminPanelItemsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      newPost: {
        title: '',
        date: undefined,
        text: '',
        url: '',
        website: ''
      },
      modalWindow: false
    }
  }

  handleModalChange = () => {
    this.setState((prevState) => {
      return {
        modalWindow: !prevState.modalWindow,
        newPost: {
          title: '',
          date: '',
          text: '',
          url: '',
          website: ''
        }
      };
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      return {
        newPost: {
          ...prevState.newPost,
          [name]: value
        }
      }
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { keys } = this.props;
    const { newPost } = this.state;
    
    try {
      await createItemDocument(keys[0], newPost);
      alert('Succesfully added to the database!');
      this.setState((prevState) => {
        return {
          modalWindow: !prevState.modalWindow,
          newPost: {
            title: '',
            date: undefined,
            text: '',
            url: '',
            website: ''
          }
        };
      });
    } catch(error) {
      alert(`Errored while sending: ${error.message}`);
    }
  }

  render() {
    const { items, keys } = this.props;
    const { modalWindow, newPost } = this.state;

    return (
      <div className="admin-panel__items-container">
        <div className="admin-panel__items-container-top">
          <button className="admin-panel-item__btn" onClick={this.handleModalChange}>
            Əlavə et
          </button>
        </div>

        {
          keys.map(key => (
            items[key].map(({ id, title }) => (
              <AdminPanelItem key={id} title={title} id={id} />
            ))
          ))
        }

        {
          modalWindow
            ? (
              <div className="modal-add-item">
                <form className="add-form" onSubmit={this.handleSubmit}>
                  <input 
                    type="text" 
                    className="add-form__input" 
                    name="title" 
                    value={newPost.title} 
                    onChange={this.handleChange}
                    placeholder="Başlıq" 
                  />

                  {
                    keys[0] === 'television'
                      ? (
                        <input
                          type="text"
                          className="add-form__input"
                          name="text"
                          value={newPost.text}
                          onChange={this.handleChange}
                          placeholder="Mətn"
                        />
                      )
                      : null
                  }

                  {
                    keys[0] !== 'television'
                      ? (
                        <input
                          type="date"
                          className="add-form__input"
                          name="date"
                          value={newPost.date}
                          onChange={this.handleChange}
                          placeholder="Tarix"
                        />
                      )
                      : null
                  }

                  {
                    keys[0] === 'television'
                      ? (
                        <input
                          type="url"
                          className="add-form__input"
                          name="url"
                          value={newPost.url}
                          onChange={this.handleChange}
                          placeholder="Link"
                        />
                      )
                      : null
                  }

                  {
                    keys[0] === 'sites'
                      ? (
                        <input
                          type="url"
                          className="add-form__input"
                          name="website"
                          value={newPost.website}
                          onChange={this.handleChange}
                          placeholder="Sayt"
                        />
                      )
                      : null
                  }

                  <input
                    type="submit"
                    className="add-form__input add-form__input--submit"
                    name="submit"
                    value="Göndər"
                  />
                </form>

                <button className="admin-panel-item__btn" onClick={this.handleModalChange}>
                  çıx
                </button>
              </div>
              )
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  items: selectPartOfState(ownProps.match.params.containerID)(state),
  keys: selectKeysOfPartOfState(ownProps.match.params.containerID)(state)
});

export default connect(mapStateToProps)(AdminPanelItemsContainer);
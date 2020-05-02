import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setSideBarIsActive } from '../../redux/sidebar/sidebar.actions';

import { selectIsSideBarActive } from '../../redux/sidebar/sidebar.selectors';

import './burger-btn.styles.scss';

const BurgerBtn = ({ selectIsSideBarActive, setSideBarIsActive }) => {
  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    const status = selectIsSideBarActive;
    setSideBarIsActive(!status);
  }

  return (
    <button 
      className={`hamburger hamburger--elastic ${isActive ? "is-active" : ""}`} 
      type="button"
      onClick={handleClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

const mapStateToProps = createStructuredSelector({
  selectIsSideBarActive
});

const mapDispatchToProps = dispatch => ({
  setSideBarIsActive: status => dispatch(setSideBarIsActive(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBtn);
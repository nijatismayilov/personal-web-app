import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser, selectUserIsAdmin } from '../../redux/user/user.selectors';

import profileImg from '../../assests/img/profile-img.png';

const SideBar = ({ currentUser, isAdmin }) => {
    return (
        <div className="side-bar">
            <div className="side-bar__top">
                <img src={profileImg} alt="profile" className="side-bar__img" />
                <span className="side-bar__name">ilyas huseynov</span>
                <div className="side-bar__occupation">akademik</div>
            </div>

            <div className="side-bar__bottom">
                <Link to="/" className="side-bar__link">
                    ana səhifə
                </Link>
                <Link to="/about" className="side-bar__link">
                    haqqımda
                </Link>
                <Link to="/sites" className="side-bar__link">
                    saytlarda və qəzetlərdə çıxışlarım
                </Link>
                <Link to="/tv" className="side-bar__link">
                    televiziyada çıxışlarım
                </Link>
                <Link to="/scientific" className="side-bar__link">
                    elmi fəaliyyətim
                </Link>
                {/* {
                    currentUser
                        ? (
                            <div className="side-bar__link" onClick={() => auth.signOut()}>
                                Çıxış
                            </div>
                        )
                        : (<Link to="/signin" className="side-bar__link">Giriş</Link>)
                } */}

                {
                    isAdmin
                        ? (<Link to="/admin" className="side-bar__link">Admin</Link>)
                        : null
                }
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isAdmin: selectUserIsAdmin
})

export default connect(mapStateToProps)(SideBar);
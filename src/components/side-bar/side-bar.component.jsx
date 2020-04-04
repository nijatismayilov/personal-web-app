import React from 'react';
import { Link } from 'react-router-dom';

import profileImg from '../../assests/img/profile-img.png';

const SideBar = () => {
    return (
      <div className="side-bar col-md-3">
        <div className="side-bar__top">
          <img src={profileImg} alt="profile" className="side-bar__img" />
        </div>

        <div className="side-bar__bottom">
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
          <Link to="/signin" className="side-bar__link">
            giriş
          </Link>
        </div>
      </div>
    );
}

export default SideBar;
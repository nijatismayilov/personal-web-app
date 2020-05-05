import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUserIsAdmin } from '../../redux/user/user.selectors';
import { selectIsSideBarActive } from '../../redux/sidebar/sidebar.selectors';

import profileImg from '../../assests/img/profile-img.png';

import './side-bar.styles.scss';

const pages = [
  { text: "ana səhifə", link: '/', id: 0 },
  { text: "haqqımda", link: '/about', id: 1 },
  { text: "saytlarda və qəzetlərdə çıxışlarım", link: '/sites', id: 2 },
  { text: "televiziyada çıxışlarım", link: '/tv', id: 3 },
  { text: "elmi fəaliyyətim", link: '/scientific', id: 4 },
  { text: "admin", link: '/admin', id: 5 }
];


const SideBar = ({ isSideBarActive, isAdmin }) => {
  const [ activePage, setActivePage ] = useState(0);
  const fadeInFromRight = useSpring({
    opacity: isSideBarActive ? 1 : 0,
    transform: isSideBarActive ? "translateX(0)" : "translateX(-100%)"
  });

  useEffect(() => {
    const active = sessionStorage.getItem('active-page');
    if (active) setActivePage(JSON.parse(active));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('active-page', JSON.stringify(activePage));
  }, [activePage]);
  
  return (
    <animated.div className="side-bar" style={fadeInFromRight}>
      <div className="side-bar__top">
        <img src={profileImg} alt="profile" className="side-bar__img" />
          <span className="side-bar__name">ilyas huseynov</span>
          <div className="side-bar__occupation">akademik</div>
      </div>

      <div className="side-bar__bottom">
        {
          pages.map(page => {
            if (page.id !== 5) {
              return (
                <Link 
                  to={page.link} 
                  className={`side-bar__link ${page.id === activePage ? 'side-bar__link-active' : ''}`}
                  key={page.id}
                  onClick={() => setActivePage(page.id)}>
                  { page.text }
                </Link>
              )
            } else {
              if (!isAdmin) return null
              else {
                return (
                  <Link 
                    to={page.link} 
                    className={`side-bar__link ${page.id === activePage ? 'side-bar__link-active' : ''}`}
                    key={page.id}
                    onClick={() => setActivePage(page.id)}>
                    { page.text }
                  </Link>
                )
              }
            }
          })
        }
      </div>
    </animated.div>
  )
}

const mapStateToProps = createStructuredSelector({
  isAdmin: selectUserIsAdmin,
  isSideBarActive: selectIsSideBarActive
})

export default connect(mapStateToProps)(SideBar);
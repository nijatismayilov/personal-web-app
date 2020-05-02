import React from 'react';
import { useSpring, animated } from 'react-spring';

import './home.styles.scss';

const Home = () => {
    const fade = useSpring({
        from: {
            opacity: 0,
        },
        opacity: 1,
        config: {
            mass: 2.3,
            tension: 141,
            friction: 34,
            precision: 0.018
        }
    });

    return (
        <animated.div className="homepage" style={fade}>
          <h1 className="homepage-title">
            Ilyas huseynovun <br /> şəxsi saytına xoş gəlmisiniz!
          </h1>  
        </animated.div>
    );
};

export default Home;
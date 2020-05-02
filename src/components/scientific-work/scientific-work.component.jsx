import React from 'react';
import { useSpring, animated } from 'react-spring';

const ScientificWork = () => {
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
        <animated.div className="scientific main" style={fade}>
        </animated.div>
    )
}

export default ScientificWork;
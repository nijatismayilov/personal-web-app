import React from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectInterviewItems } from '../../redux/interviews/interviews.selectors';

import InterviewItem from '../../components/interview-item/interview-item.component';

import './sites-and-newspapers.styles.scss';

const SitesAndNewspapers = ({ interviews }) => {
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
      <animated.div className="sites-and-newspapers main u-align-items-center" style={fade}>
        <h1 className="heading-primary">saytlarda və qəzetlərdə çıxışlarım</h1>

        <div className="sites-and-newspapers__content col-md-10">
          {
              interviews
                ? (
                    interviews.map(({ id, ...otherProps }) => (
                        <InterviewItem key={id} {...otherProps} />
                    ))
                )
                : null
          }
        </div>
      </animated.div>
    );
}

const mapStateToProps = createStructuredSelector({
    interviews: selectInterviewItems
})

export default connect(mapStateToProps)(SitesAndNewspapers);
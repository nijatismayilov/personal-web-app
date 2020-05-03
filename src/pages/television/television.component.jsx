import React from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTelevisionApperances } from '../../redux/television/television.selectors';

import TvItem from '../../components/tv-item/tv-item.component';

import './television.styles.scss';

const Television = ({ tvApperances }) => {
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
    <animated.section className="television main" style={fade}>
      <h1 className="heading-primary col-xs-10">Televiziyada çıxışlarım</h1>

      <main className="television__content col-xs-10 row">
        {tvApperances.map(({ id, ...otherProps }) => (
            <TvItem key={id} {...otherProps} />
        ))}
      </main>
    </animated.section>
  );
}

const mapStateToProps = createStructuredSelector({
  tvApperances: selectTelevisionApperances
})

export default connect(mapStateToProps)(Television);
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTelevisionApperances } from '../../redux/television/television.selectors';

import TvItem from '../tv-item/tv-item.component';

const Television = ({ tvApperances }) => {
  return (
    <section className="television main">
      <h1 className="heading-primary">Televiziyada çıxışlarım</h1>

      <main className="television__content col-xs-10 row">
        {tvApperances.map(({ id, ...otherProps }) => (
          <TvItem key={id} {...otherProps} />
        ))}
      </main>
    </section>
  );
}

const mapStateToProps = createStructuredSelector({
  tvApperances: selectTelevisionApperances
})

export default connect(mapStateToProps)(Television);
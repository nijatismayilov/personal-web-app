import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectInterviewItems } from '../../redux/interviews/interviews.selectors';

import InterviewItem from '../interview-item/interview-item.component';

const SitesAndNewspapers = ({ interviews }) => {
    return (
      <div className="sites-and-newspapers main u-align-items-center">
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
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    interviews: selectInterviewItems
})

export default connect(mapStateToProps)(SitesAndNewspapers);
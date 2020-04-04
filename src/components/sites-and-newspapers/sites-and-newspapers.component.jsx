import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSitesInterviews, selectNewspapersInterviews } from '../../redux/interviews/interviews.selectors';

import InterviewItem from '../interview-item/interview-item.component';

const SitesAndNewspapers = ({ sites, newspapers }) => {
    return (
      <div className="sites-and-newspapers main u-align-items-center">
        <h1 className="heading-primary">saytlarda və qəzetlərdə çıxışlarım</h1>

        <div className="sites-and-newspapers__content col-md-10">
          {sites.map(({ id, ...otherInterviewProps }) => (
            <InterviewItem key={id} {...otherInterviewProps} />
          ))}
          {newspapers.map(({ id, ...otherInterviewProps }) => (
            <InterviewItem key={id} {...otherInterviewProps} />
          ))}
        </div>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sites: selectSitesInterviews,
    newspapers: selectNewspapersInterviews
})

export default connect(mapStateToProps)(SitesAndNewspapers);
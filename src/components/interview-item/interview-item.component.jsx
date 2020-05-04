import React from 'react';

import './interview-item.styles.scss';

const InterviewItem = ({ title, website ,date }) => {
  return (
    <div className="interview-item">
      <span />
      <div className="interview-item__content">
        <h2 className="heading-secondary interview-item__title">
          {title}
        </h2>

        <em className="interview-item__website">
          - {website}
        </em>
      </div>
      <div className="interview-item__date">
        { date }
      </div>
    </div>
  );
}

export default InterviewItem;

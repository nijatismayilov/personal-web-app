import React from 'react';

import './about-item.styles.scss';

const AboutItem = ({ date, title }) => {
  return (
    <div className="about-item">
      <span />
      <p className="about-item__content">
        { title }
      </p>
      <div className="about-item__date">
        { date }
      </div>
    </div>
  );
};

export default AboutItem;
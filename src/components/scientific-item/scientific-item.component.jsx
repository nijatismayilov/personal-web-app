import React from 'react';

import './scientific-item.styles.scss';

const ScientificItem = ({ title, date }) => {
  return (
    <div className="scientific-item">
      <span />
      <p className="scientific-item__content">
        { title }
      </p>
      <div className="scientific-item__date">
        { date }
      </div>
    </div>
  );
};

export default ScientificItem;
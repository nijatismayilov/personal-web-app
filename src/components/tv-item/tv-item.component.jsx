import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import './tv-item.styles.scss';

const TvItem = ({ url, title, text, date}) => {
  console.log(date);
  return (
    <div className="col-md-4 p-x-1 p-y-1">
      <div className="tv-item">
        <div className="tv-item__video-wrapper">
          <ReactPlayer
            url={url}
            controls
            className="tv-item__video"
            width="100%"
            height="100%"
          />
        </div>

        <div className="tv-item__content">
          <h3 className="tv-item__title"> {title} </h3>
          <p className="tv-item__text">
              { text.length > 40 ? text.slice(0, 40) : text }
          </p>
          <span className="tv-item__date">
            <FontAwesomeIcon icon={faCalendarAlt} className="tv-item__icon" />
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TvItem;
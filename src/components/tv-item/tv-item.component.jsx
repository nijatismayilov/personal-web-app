import React from 'react';
import ReactPlayer from 'react-player';

const TvItem = ({ url, title, text }) => {
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
            <h3 className="tv-item__title heading-tertiary">{title}</h3>
            <p className="tv-item__text">
                { text.length > 40 ? text.slice(0, 40) : text }
            </p>
          </div>
        </div>
      </div>
    );
}

export default TvItem;
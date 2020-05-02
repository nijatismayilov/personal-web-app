import React from 'react';

import './interview-item.styles.scss';

const InterviewItem = ({ title, website ,date }) => {
    return (
        <div className="interview-item">
            <div className="interview-item__left">
                <div className="interview-item__date">
                    {date}
                </div>
                <span />
            </div>

            <div className="interview-item__right">
                <span />
                <div className="interview-item__content">
                    <h2 className="heading-secondary interview-item__title">
                        {title}
                    </h2>

                    <em className="interview-item__website">
                        - {website}
                    </em>
                </div>
            </div>
        </div>
    );
}

export default InterviewItem;

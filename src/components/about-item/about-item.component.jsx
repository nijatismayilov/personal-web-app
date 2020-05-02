import React from 'react';

import './about-item.styles.scss';

const AboutItem = ({ date, title }) => {
    return (
        <div className="about-item">
            <div className="about-item__left">
                <div className="about-item__date">
                    { date }
                </div>
                <span />
            </div>

            <div className="about-item__right">
                <span />
                <p className="about-item__content">
                    { title }
                </p>
            </div>
        </div>
    )
}

export default AboutItem;
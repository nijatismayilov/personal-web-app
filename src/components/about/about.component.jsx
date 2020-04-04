import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAboutItems } from '../../redux/about/about.selectors';

import AboutItem from '../about-item/about-item.component';

const About = ({ abouts }) => {
    return (
        <section className="about main">
            <h1 className="heading-primary">haqqımda</h1>

            <main className="about__content col-md-10">
                {
                    abouts.map(({ id, ...otherAboutProps }) => 
                        <AboutItem key={id} {...otherAboutProps} />
                    )
                }
            </main>
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    abouts: selectAboutItems
})

export default connect(mapStateToProps)(About);
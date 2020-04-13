import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAboutItemsDescending, selectAboutIsFetching } from '../../redux/about/about.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import AboutItem from '../about-item/about-item.component';

const AboutBody = ({ abouts }) => {
    return (
        <div className="about__area">
            <h1 className="heading-primary">haqqımda</h1>

            <main className="about__content col-md-10">
                {
                    abouts
                        ? (
                            abouts.map(({ id, ...otherAboutProps }) => 
                                <AboutItem key={id} {...otherAboutProps} />
                            )
                        )
                        : null
                }
            </main>
        </div>
    );
};

const AboutWithSpinner = WithSpinner(AboutBody);

class About extends React.Component {
    render() {
        const { abouts, isFething } = this.props;
        return (
            <section className="about main">
                <AboutWithSpinner abouts={abouts} isLoading={isFething} />
            </section>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    abouts: selectAboutItemsDescending,
    isFething: selectAboutIsFetching
})

export default connect(mapStateToProps)(About);
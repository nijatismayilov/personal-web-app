import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAboutItems, selectAboutIsFetching } from '../../redux/about/about.selectors';
import { fetchAboutsStart } from '../../redux/about/about.actions';

import WithSpinner from '../with-spinner/with-spinner.component';

import AboutItem from '../about-item/about-item.component';

const AboutBody = ({ abouts }) => {
    return (
        <section className="about main">
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
        </section>
    );
};

const AboutWithSpinner = WithSpinner(AboutBody);

class About extends React.Component {
    componentDidMount() {
        const { fetchAboutsStart } = this.props;

        fetchAboutsStart();
    }

    render() {
        const { abouts } = this.props;
        return (
            <AboutWithSpinner abouts={abouts} isLoading={false} />
        )
    }
}

const mapStateToProps = createStructuredSelector({
    abouts: selectAboutItems,
    isFething: selectAboutIsFetching
})

const mapDispatchToProps = dispatch => ({
    fetchAboutsStart: () => dispatch(fetchAboutsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(About);
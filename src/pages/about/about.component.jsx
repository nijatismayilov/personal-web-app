import React from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchAboutsStart } from '../../redux/about/about.actions';

import { selectIsAboutsEmpty, selectAboutItemsDescending, selectAboutIsFetching } from '../../redux/about/about.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import AboutItem from '../../components/about-item/about-item.component';

import './about.styles.scss';

const AboutBody = ({ abouts }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    config: {
      mass: 2.3,
      tension: 141,
      friction: 34,
      precision: 0.018
    }
  });

  return (
    <animated.div className="about__area" style={fade}>
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
    </animated.div>
  );
};

const AboutWithSpinner = WithSpinner(AboutBody);

class About extends React.Component {
  componentDidMount() {
    const { isAboutsEmpty, fetchAboutsStart } = this.props;
    if (isAboutsEmpty) fetchAboutsStart();
  }

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
  isAboutsEmpty: selectIsAboutsEmpty,
  abouts: selectAboutItemsDescending,
  isFething: selectAboutIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchAboutsStart: () => dispatch(fetchAboutsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(About);
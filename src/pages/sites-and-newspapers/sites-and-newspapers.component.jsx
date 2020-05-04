import React from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchInterviewsStart } from '../../redux/interviews/interviews.actions';

import { selectIsInterviewsEmpty, selectInterviewsIsFetching, selectInterviewItemsDescending } from '../../redux/interviews/interviews.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import InterviewItem from '../../components/interview-item/interview-item.component';

import './sites-and-newspapers.styles.scss';

const SitesAndNewspapersBody = ({ interviews }) => {
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
    <animated.div className="sites-and-newspapers main u-align-items-center" style={fade}>
      <h1 className="heading-primary col-md-10">saytlarda və qəzetlərdə çıxışlarım</h1>

      <div className="sites-and-newspapers__content col-md-10">
        {
          interviews
            ? (
              interviews.map(({ id, ...otherProps }) => (
                <InterviewItem key={id} {...otherProps} />
              ))
            )
            : null
        }
      </div>
    </animated.div>
  );
};

const InterviewsWithSpinner = WithSpinner(SitesAndNewspapersBody);

class SitesAndNewspapers extends React.Component {
  componentDidMount() {
    const { isEmpty, fetchInterviewsStart } = this.props;

    if (isEmpty) fetchInterviewsStart();
  }

  render() {
    const { interviews, isFetching } = this.props;

    return (
      <section>
        <InterviewsWithSpinner interviews={interviews} isLoading={isFetching} />
      </section>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isEmpty: selectIsInterviewsEmpty,
  interviews: selectInterviewItemsDescending,
  isFetching: selectInterviewsIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchInterviewsStart: () => dispatch(fetchInterviewsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SitesAndNewspapers);